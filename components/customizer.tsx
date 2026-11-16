"use client";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type ReactNode,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Check,
  Loader2,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import gsap from "gsap";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useUploadThing } from "../lib/uploadthing";

/* Transición entre pasos: entra desde la derecha al avanzar, desde la izquierda al volver */
const stepVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: 50 * dir }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: -50 * dir }),
};

/* =========================================
   DATOS
   ========================================= */

const WHATSAPP = "5355693604";

const FLOWERS = [
  { id: "rosas", label: "Rosas eternas", emoji: "🌹" },
  { id: "girasoles", label: "Girasoles", emoji: "🌻" },
  { id: "tulipanes", label: "Tulipanes", emoji: "🌷" },
  { id: "lirios", label: "Lirios / Loto", emoji: "🪷" },
  { id: "lampara", label: "Lámpara floral", emoji: "💡" },
  { id: "navidad", label: "Navideño", emoji: "🎄" },
  { id: "tematico", label: "Temático (Hot Wheels, HP…)", emoji: "🏎️" },
  { id: "combinado", label: "Combinado", emoji: "💐" },
  { id: "una-rosa", label: "1 Rosa individual", emoji: "🌹" },
  { id: "un-girasol", label: "1 Girasol individual", emoji: "🌻" },
  { id: "un-tulipan", label: "1 Tulipán individual", emoji: "🌷" },
];

const COLORS = [
  { id: "rojo", label: "Rojo", hex: "#c0182a" },
  { id: "fucsia", label: "Fucsia", hex: "#d81e6f" },
  { id: "rosa", label: "Rosa", hex: "#e9a9b4" },
  { id: "blanco", label: "Blanco", hex: "#f5f0e8" },
  { id: "amarillo", label: "Amarillo", hex: "#f5c518" },
  { id: "naranja", label: "Naranja", hex: "#e87423" },
  { id: "azul", label: "Azul", hex: "#1e50c0" },
  { id: "morado", label: "Morado", hex: "#6a2f9c" },
  { id: "dorado", label: "Dorado", hex: "#c9a86a" },
];

const SIZES = [
  { id: "una-sola", label: "1 sola flor" }, // NUEVO
  { id: "pequeno", label: "Pequeño (5–10 flores)" },
  { id: "mediano", label: "Mediano (12–20 flores)" },
  { id: "grande", label: "Grande (25–40 flores)" },
  { id: "xl", label: "Extra Grande (50+ flores)" },
];

const CURRENCIES = [
  { id: "CUP", label: "CUP (Pesos Cubanos)" },
  { id: "USD", label: "USD (Dólares)" },
];

const OCCASIONS = [
  { id: "cumple", label: "Cumpleaños", emoji: "🎂" },
  { id: "aniversario", label: "Aniversario", emoji: "💍" },
  { id: "sanvalentin", label: "San Valentín", emoji: "💕" },
  { id: "pareja", label: "Para mi pareja", emoji: "👩‍❤️‍👨" },
  { id: "graduacion", label: "Graduación", emoji: "🎓" },
  { id: "madres", label: "Día de las Madres", emoji: "🌷" },
  { id: "regalo", label: "Regalo especial", emoji: "🎁" },
  { id: "otro", label: "Otro", emoji: "✨" },
];

const STEPS = [
  { title: "¿Qué flores quieres?", sub: "Puedes elegir varias" },
  { title: "Colores, tamaño y pago", sub: "Arma la paleta perfecta" },
  { title: "Ocasión y dedicatoria", sub: "Cuéntanos para qué momento es" },
  { title: "Tu referencia", sub: "Sube una imagen que te inspire" },
  { title: "Confirma y envía", sub: "Revisa todo antes de enviar" },
];

/* =========================================
   TIPOS
   ========================================= */

type FormState = {
  flowers: string[];
  colors: string[];
  size: string;
  currency: string; // NUEVO
  occasion: string;
  message: string;
  name: string;
  reference: File | null;
  referenceUrl: string | null;
};

const INITIAL: FormState = {
  flowers: [],
  colors: [],
  size: "",
  currency: "",
  occasion: "",
  message: "",
  name: "",
  reference: null,
  referenceUrl: null,
};

/* =========================================
   HELPERS
   ========================================= */

function buildWhatsAppMessage(
  data: FormState,
  includeReferenceNote = false,
): string {
  const flowerLabels = data.flowers
    .map((id) => FLOWERS.find((f) => f.id === id)?.label ?? id)
    .join(", ");
  const colorLabels = data.colors
    .map((id) => COLORS.find((c) => c.id === id)?.label ?? id)
    .join(", ");
  const sizeLabel = SIZES.find((s) => s.id === data.size)?.label ?? "—";
  const currencyLabel = CURRENCIES.find((c) => c.id === data.currency)?.label ?? "—";
  const occasionLabel =
    OCCASIONS.find((o) => o.id === data.occasion)?.label ?? "—";

  const divider = "----------------------------------------";

  const lines = [
    "ARI'S ETERNAL FLOWERS",
    "Flores que permanecen, momentos que perduran",
    divider,
    "",
    "Hola, quiero encargar un ramo personalizado:",
    "",
    `FLORES: ${flowerLabels || "—"}`,
    `COLORES: ${colorLabels || "—"}`,
    `TAMAÑO: ${sizeLabel}`,
    `MONEDA: ${currencyLabel}`,
    `OCASIÓN: ${occasionLabel}`,
    "",
    "DEDICATORIA:",
    `"${data.message.trim() || "Ninguna"}"`,
    "",
    `CLIENTE: ${data.name.trim()}`,
    divider,
  ];

  if (includeReferenceNote) {
    lines.push("(Adjunto mi imagen de referencia a continuación)");
  }

  return lines.join("\n");
}

/* =========================================
   MODAL
   ========================================= */

function CustomizerModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>(INITIAL);
  const [done, setDone] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const reduceMotion = useReducedMotion();
  // Con "reducir movimiento" solo hay fundido, sin desplazamiento
  const slide = reduceMotion ? 0 : direction;
  const { startUpload } = useUploadThing("imageUploader");

  const overlayRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const prevUrlRef = useRef<string | null>(null);

  /* ---------- Abrir / cerrar ---------- */
  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    if (open) {
      document.body.style.overflow = "hidden";
      gsap.set(overlay, { display: "flex" });
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" },
      );
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          ease: "power3.out",
          delay: 0.05,
        },
      );
    } else {
      document.body.style.overflow = "";
      gsap.to(cardRef.current, {
        opacity: 0,
        y: 30,
        scale: 0.97,
        duration: 0.25,
        ease: "power2.in",
      });
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.08,
        onComplete: () => {
          gsap.set(overlay, { display: "none" });
        },
      });
    }
  }, [open]);

  /* ---------- Reset al cerrar ---------- */
  useEffect(() => {
    if (open) return;
    const t = setTimeout(() => {
      setStep(0);
      setDone(false);
      if (prevUrlRef.current) {
        URL.revokeObjectURL(prevUrlRef.current);
        prevUrlRef.current = null;
      }
      setData(INITIAL);
    }, 400);
    return () => clearTimeout(t);
  }, [open]);

  /* ---------- Escape ---------- */
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  /* ---------- Barra de progreso ---------- */
  useEffect(() => {
    if (!progressRef.current) return;
    const pct = ((step + 1) / STEPS.length) * 100;
    gsap.to(progressRef.current, {
      width: `${pct}%`,
      duration: 0.55,
      ease: "power3.out",
    });
  }, [step]);

  /* ---------- Handlers ---------- */
  const toggleArray = (key: "flowers" | "colors", id: string) => {
    setData((d) => {
      const arr = d[key];
      return {
        ...d,
        [key]: arr.includes(id)
          ? arr.filter((x) => x !== id)
          : [...arr, id],
      };
    });
  };

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (prevUrlRef.current) URL.revokeObjectURL(prevUrlRef.current);
    const url = URL.createObjectURL(file);
    prevUrlRef.current = url;
    setData((d) => ({ ...d, reference: file, referenceUrl: url }));
  };

  const canNext = (): boolean => {
    if (step === 0) return data.flowers.length > 0;
    if (step === 1) return data.colors.length > 0 && data.size !== "" && data.currency !== "";
    if (step === 2) return data.occasion !== "";
    if (step === 3) return data.name.trim().length > 0;
    return true;
  };

  const next = () => {
    if (!canNext() || step >= STEPS.length - 1) return;
    setDirection(1);
    setStep((s) => s + 1);
  };

  const back = () => {
    if (step === 0) return;
    setDirection(-1);
    setStep((s) => s - 1);
  };

  // Sube la imagen de referencia a Uploadthing y envía su URL por WhatsApp
  const submit = async () => {
    if (isUploading) return;
    let referenceUrl: string | null = null;

    if (data.reference) {
      setIsUploading(true);
      try {
        const res = await startUpload([data.reference]);
        const url = res?.[0]?.ufsUrl;
        if (!url) throw new Error("Uploadthing no devolvió una URL");
        referenceUrl = url;
      } catch (error) {
        console.error("Error subiendo la imagen de referencia:", error);
        alert(
          "No pudimos subir la imagen de referencia. Se abrirá WhatsApp solo con el texto; puedes enviarle la foto a Ari directamente en el chat.",
        );
      } finally {
        setIsUploading(false);
      }
    }

    // La nota de "imagen adjunta" solo aparece si la subida tuvo éxito
    let text = buildWhatsAppMessage(data, referenceUrl !== null);
    if (referenceUrl) text += `\n${referenceUrl}`;

    // encodeURIComponent codifica en UTF-8 y respeta los emojis (pares sustitutos)
    const waUrl = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
    const opened = window.open(waUrl, "_blank", "noopener,noreferrer");
    // Si el navegador bloqueó el popup (común en móvil tras un await), navegamos directo
    if (!opened) window.location.href = waUrl;
    setDone(true);
  };

  /* ---------- Render ---------- */
  return (
    <div
      aria-hidden={!open}
      aria-modal="true"
      className="customizer-overlay"
      ref={overlayRef}
      role="dialog"
    >
      <div
        className="customizer-backdrop"
        onClick={onClose}
        ref={backdropRef}
      />

      <div className="customizer-card" ref={cardRef}>
        {/* Header */}
        <header className="customizer-header">
          <div>
            <span className="customizer-eyebrow">
              {done ? "¡Enviado!" : `Paso ${step + 1} de ${STEPS.length}`}
            </span>
            <h2 className="customizer-title">
              {done ? "Todo listo 🌸" : STEPS[step].title}
            </h2>
            {!done && (
              <p className="customizer-sub">{STEPS[step].sub}</p>
            )}
          </div>

          <button
            aria-label="Cerrar"
            className="customizer-close"
            onClick={onClose}
            type="button"
          >
            <X size={20} />
          </button>
        </header>

        {/* Progress */}
        <div className="customizer-progress">
          <div className="customizer-progress-bar" ref={progressRef} />
        </div>

        {/* Body */}
        <div className="customizer-body" ref={stepRef} data-lenis-prevent>
          <AnimatePresence
            custom={slide}
            initial={false}
            mode="wait"
            onExitComplete={() => stepRef.current?.scrollTo({ top: 0 })}
          >
          <motion.div
            animate="center"
            custom={slide}
            exit="exit"
            initial="enter"
            key={done ? "done" : step}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            variants={stepVariants}
          >
          {done ? (
            <div className="customizer-done">
              <div className="customizer-done-icon">
                <Check size={32} strokeWidth={3} />
              </div>
              <h3>¡Pedido generado!</h3>

              <p>
                Si no se abrió WhatsApp automáticamente, revisa el
                bloqueo de ventanas emergentes o vuelve a pulsar el
                botón.
              </p>

              <button
                className="button button-secondary"
                onClick={onClose}
                type="button"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <>
              {/* STEP 0 — Flores */}
              {step === 0 && (
                <div className="pick-grid">
                  {FLOWERS.map((f) => {
                    const selected = data.flowers.includes(f.id);
                    return (
                      <button
                        className={`pick-card ${selected ? "selected" : ""}`}
                        key={f.id}
                        onClick={() => toggleArray("flowers", f.id)}
                        type="button"
                      >
                        {selected && (
                          <span aria-hidden="true" className="pick-check">
                            <Check size={13} strokeWidth={3.5} />
                          </span>
                        )}
                        <span className="pick-emoji">{f.emoji}</span>
                        <span className="pick-label">{f.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* STEP 1 — Colores, tamaño y moneda */}
              {step === 1 && (
                <>
                  <div className="customizer-field">
                    <span className="customizer-label">Colores</span>
                    <div className="color-grid">
                      {COLORS.map((c) => {
                        const selected = data.colors.includes(c.id);
                        return (
                          <button
                            className={`color-swatch ${selected ? "selected" : ""}`}
                            key={c.id}
                            onClick={() => toggleArray("colors", c.id)}
                            type="button"
                          >
                            <span
                              className="color-dot"
                              style={{ background: c.hex }}
                            />
                            <span className="color-label">{c.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="customizer-field">
                    <span className="customizer-label">Tamaño</span>
                    <div className="size-list">
                      {SIZES.map((s) => {
                        const selected = data.size === s.id;
                        return (
                          <button
                            className={`size-option ${selected ? "selected" : ""}`}
                            key={s.id}
                            onClick={() =>
                              setData((d) => ({ ...d, size: s.id }))
                            }
                            type="button"
                          >
                            <span>{s.label}</span>
                            {selected && <Check size={18} />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="customizer-field">
                    <span className="customizer-label">Moneda de pago</span>
                    <div className="size-list">
                      {CURRENCIES.map((c) => {
                        const selected = data.currency === c.id;
                        return (
                          <button
                            className={`size-option ${selected ? "selected" : ""}`}
                            key={c.id}
                            onClick={() =>
                              setData((d) => ({ ...d, currency: c.id }))
                            }
                            type="button"
                          >
                            <span>{c.label}</span>
                            {selected && <Check size={18} />}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              {/* STEP 2 — Ocasión + mensaje */}
              {step === 2 && (
                <>
                  <div className="customizer-field">
                    <span className="customizer-label">Ocasión</span>
                    <div className="pick-grid">
                      {OCCASIONS.map((o) => {
                        const selected = data.occasion === o.id;
                        return (
                          <button
                            className={`pick-card ${selected ? "selected" : ""}`}
                            key={o.id}
                            onClick={() =>
                              setData((d) => ({ ...d, occasion: o.id }))
                            }
                            type="button"
                          >
                            {selected && (
                              <span aria-hidden="true" className="pick-check">
                                <Check size={13} strokeWidth={3.5} />
                              </span>
                            )}
                            <span className="pick-emoji">{o.emoji}</span>
                            <span className="pick-label">{o.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="customizer-field">
                    <span className="customizer-label">
                      Dedicatoria (opcional)
                    </span>
                    <textarea
                      className="customizer-textarea"
                      onChange={(e) =>
                        setData((d) => ({ ...d, message: e.target.value }))
                      }
                      placeholder="Escribe aquí el mensaje que quieres que lleve la tarjeta…"
                      rows={3}
                      value={data.message}
                    />
                  </div>
                </>
              )}

              {/* STEP 3 — Referencia + Nombre */}
              {step === 3 && (
                <>
                  <p className="customizer-hint">
                    Puedes subir una captura de <strong>Pinterest</strong>,
                    <strong> Instagram</strong> o cualquier imagen que te
                    sirva de inspiración.
                  </p>

                  <label className="upload-zone">
                    <input
                      accept="image/*"
                      hidden
                      onChange={onFile}
                      type="file"
                    />

                    {data.referenceUrl ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          alt="Referencia"
                          className="upload-preview"
                          src={data.referenceUrl}
                        />
                        <span className="upload-name">
                          {data.reference?.name}
                        </span>
                        <span className="upload-change">
                          Toca para cambiar
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="upload-icon">
                          <Camera size={28} />
                        </span>
                        <span className="upload-title">
                          Sube tu imagen de referencia
                        </span>
                        <span className="upload-sub">
                          JPG, PNG · máximo 10 MB
                        </span>
                      </>
                    )}
                  </label>

                  <div className="customizer-field">
                    <span className="customizer-label">
                      Tu nombre <span style={{ color: "#a34a63" }}>*</span>
                    </span>
                    <input
                      className="customizer-input"
                      onChange={(e) =>
                        setData((d) => ({ ...d, name: e.target.value }))
                      }
                      placeholder="Tu nombre completo"
                      type="text"
                      value={data.name}
                    />
                    <p className="customizer-hint" style={{ marginTop: 10 }}>
                      Necesitamos tu nombre para coordinar la entrega.
                    </p>
                  </div>
                </>
              )}

              {/* STEP 4 — Resumen */}
              {step === 4 && (
                <div className="summary">
                  <SummaryRow
                    label="Flores"
                    value={data.flowers
                      .map((id) => FLOWERS.find((f) => f.id === id)?.label)
                      .join(", ")}
                  />
                  <SummaryRow
                    label="Colores"
                    value={data.colors
                      .map((id) => COLORS.find((c) => c.id === id)?.label)
                      .join(", ")}
                  />
                  <SummaryRow
                    label="Tamaño"
                    value={SIZES.find((s) => s.id === data.size)?.label ?? "—"}
                  />
                  <SummaryRow
                    label="Moneda de pago"
                    value={CURRENCIES.find((c) => c.id === data.currency)?.label ?? "—"}
                  />
                  <SummaryRow
                    label="Ocasión"
                    value={
                      OCCASIONS.find((o) => o.id === data.occasion)?.label ??
                      "—"
                    }
                  />
                  {data.message && (
                    <SummaryRow label="Dedicatoria" value={data.message} />
                  )}
                  {data.reference && (
                    <SummaryRow
                      label="Referencia"
                      value={data.reference.name}
                    />
                  )}
                  <SummaryRow label="Nombre" value={data.name} />

                  <div className="summary-note">
                    <Sparkles size={16} />
                    Al enviar se abrirá WhatsApp con toda esta
                    información lista para Ari.
                  </div>
                </div>
              )}
            </>
          )}
          </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        {!done && (
          <footer className="customizer-footer">
            <motion.button
              className="button button-secondary"
              disabled={step === 0}
              onClick={back}
              type="button"
              whileHover={step === 0 ? undefined : { scale: 1.02 }}
              whileTap={step === 0 ? undefined : { scale: 0.95 }}
            >
              <ArrowLeft size={18} />
              Atrás
            </motion.button>

            {step < STEPS.length - 1 ? (
              <motion.button
                className="button button-primary"
                disabled={!canNext()}
                onClick={next}
                type="button"
                whileHover={canNext() ? { scale: 1.02 } : undefined}
                whileTap={canNext() ? { scale: 0.95 } : undefined}
              >
                Siguiente
                <ArrowRight size={18} />
              </motion.button>
            ) : (
              <motion.button
                className="button button-primary"
                disabled={isUploading}
                onClick={submit}
                type="button"
                whileHover={isUploading ? undefined : { scale: 1.02 }}
                whileTap={isUploading ? undefined : { scale: 0.95 }}
              >
                {isUploading ? (
                  <>
                    <Loader2 className="animate-spin" size={18} />
                    Subiendo imagen...
                  </>
                ) : (
                  <>
                    <MessageCircle size={18} />
                    Enviar por WhatsApp
                  </>
                )}
              </motion.button>
            )}
          </footer>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="summary-row">
      <span className="summary-label">{label}</span>
      <span className="summary-value">{value}</span>
    </div>
  );
}

/* =========================================
   BOTÓN QUE ABRE EL MODAL
   ========================================= */

export function CustomizerButton({
  variant = "primary",
  children,
  className = "",
}: {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className={`button button-${variant} ${className}`}
        onClick={() => setOpen(true)}
        type="button"
      >
        {children}
      </button>

      <CustomizerModal onClose={() => setOpen(false)} open={open} />
    </>
  );
}
