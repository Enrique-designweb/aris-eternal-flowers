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
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";
import gsap from "gsap";

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
  { id: "pequeno", label: "Pequeño (6–9 flores)" },
  { id: "mediano", label: "Mediano (12–18 flores)" },
  { id: "grande", label: "Grande (24+ flores)" },
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
  { title: "Colores y tamaño", sub: "Arma la paleta perfecta" },
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
  occasion: "",
  message: "",
  name: "",
  reference: null,
  referenceUrl: null,
};

/* =========================================
   HELPERS
   ========================================= */

function buildWhatsAppMessage(data: FormState): string {
  const flowerLabels = data.flowers
    .map((id) => FLOWERS.find((f) => f.id === id)?.label ?? id)
    .join(", ");
  const colorLabels = data.colors
    .map((id) => COLORS.find((c) => c.id === id)?.label ?? id)
    .join(", ");
  const sizeLabel = SIZES.find((s) => s.id === data.size)?.label ?? "—";
  const occasionLabel =
    OCCASIONS.find((o) => o.id === data.occasion)?.label ?? "—";

  const lines = [
    "🌸 *Ari's Eternal Flowers* 🌸",
    "",
    "Hola, quiero crear un ramo personalizado:",
    "",
    `🌹 *Flores:* ${flowerLabels || "—"}`,
    `🎨 *Colores:* ${colorLabels || "—"}`,
    `📏 *Tamaño:* ${sizeLabel}`,
    `🎁 *Ocasión:* ${occasionLabel}`,
  ];

  if (data.message.trim()) {
    lines.push("", "💌 *Dedicatoria:*", `"${data.message.trim()}"`);
  }

  if (data.reference) {
    lines.push(
      "",
      `📷 *Referencia:* tengo una imagen (${data.reference.name}). La adjunto en el chat a continuación.`,
    );
  }

  if (data.name.trim()) {
    lines.push("", `👤 *Mi nombre:* ${data.name.trim()}`);
  }

  lines.push("", "¡Gracias! ✨");
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

  const overlayRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const stepRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const prevStepRef = useRef(0);
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

  /* ---------- Transición entre pasos ---------- */
  useEffect(() => {
    if (!open || !stepRef.current) return;
    if (prevStepRef.current === step) return;

    const dir = step > prevStepRef.current ? 1 : -1;
    prevStepRef.current = step;

    gsap.fromTo(
      stepRef.current,
      { opacity: 0, x: 50 * dir },
      { opacity: 1, x: 0, duration: 0.45, ease: "power3.out" },
    );
  }, [step, open]);

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
    if (step === 1) return data.colors.length > 0 && data.size !== "";
    if (step === 2) return data.occasion !== "";
    if (step === 3) return true;
    return true;
  };

  const next = () => {
    if (!canNext() || step >= STEPS.length - 1) return;
    setStep((s) => s + 1);
  };

  const back = () => {
    if (step === 0) return;
    setStep((s) => s - 1);
  };

  const submit = () => {
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      buildWhatsAppMessage(data),
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
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
        <div className="customizer-body" ref={stepRef}>
          {done ? (
            <div className="customizer-done">
              <div className="customizer-done-icon">
                <Check size={32} strokeWidth={3} />
              </div>
              <h3>Tu pedido se envió por WhatsApp</h3>
              <p>
                Si no se abrió automáticamente, revisa el bloqueo de
                ventanas emergentes. <br />
                <strong>No olvides adjuntar tu imagen de referencia
                en el chat.</strong>
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
                        <span className="pick-emoji">{f.emoji}</span>
                        <span className="pick-label">{f.label}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* STEP 1 — Colores y tamaño */}
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

              {/* STEP 3 — Referencia */}
              {step === 3 && (
                <>
                  <p className="customizer-hint">
                    Puedes subir una captura de <strong>Pinterest</strong>,
                    <strong> Instagram</strong> o cualquier imagen que te
                    sirva de inspiración. Al enviar, te recordaremos
                    adjuntarla también en WhatsApp.
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
                      Tu nombre (opcional)
                    </span>
                    <input
                      className="customizer-input"
                      onChange={(e) =>
                        setData((d) => ({ ...d, name: e.target.value }))
                      }
                      placeholder="¿Cómo te llamas?"
                      type="text"
                      value={data.name}
                    />
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
                    value={
                      SIZES.find((s) => s.id === data.size)?.label ?? "—"
                    }
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
                  {data.name && (
                    <SummaryRow label="Nombre" value={data.name} />
                  )}

                  <div className="summary-note">
                    <Sparkles size={16} />
                    Al enviar se abrirá WhatsApp con toda esta
                    información lista para Ari.
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!done && (
          <footer className="customizer-footer">
            <button
              className="button button-secondary"
              disabled={step === 0}
              onClick={back}
              type="button"
            >
              <ArrowLeft size={18} />
              Atrás
            </button>

            {step < STEPS.length - 1 ? (
              <button
                className="button button-primary"
                disabled={!canNext()}
                onClick={next}
                type="button"
              >
                Siguiente
                <ArrowRight size={18} />
              </button>
            ) : (
              <button
                className="button button-primary"
                onClick={submit}
                type="button"
              >
                <MessageCircle size={18} />
                Enviar por WhatsApp
              </button>
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
