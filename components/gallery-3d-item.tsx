"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { Hand, X } from "lucide-react";

// R3F/Three.js solo se descarga cuando el usuario abre el visor
const ProductViewer3D = dynamic(
  () => import("./product-viewer-3d").then((m) => m.ProductViewer3D),
  {
    ssr: false,
    loading: () => <div className="viewer-3d viewer-3d-empty">Cargando modelo 3D…</div>,
  },
);

interface VisualStyle extends CSSProperties {
  "--visual-bg"?: string;
}

interface Gallery3DItemProps {
  /** Ruta de la imagen de la galería */
  image: string;
  /** Texto alternativo y nombre mostrado */
  name: string;
  /** Ruta del modelo .glb, por ejemplo "/models/hotwheels.glb" */
  modelUrl: string;
  /** Clases extra del contenedor (por ejemplo "tall") */
  className?: string;
  fit?: string;
}

export function Gallery3DItem({
  image,
  name,
  modelUrl,
  className = "",
  fit = "",
}: Gallery3DItemProps) {
  const [open, setOpen] = useState(false);
  // La invitación "Gira para explorar" desaparece en cuanto el cliente toca el modelo
  const [hasInteracted, setHasInteracted] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  const openViewer = () => {
    setHasInteracted(false);
    setOpen(true);
  };

  // Escape para cerrar y bloqueo del scroll de fondo mientras el modal está abierto
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  const style: VisualStyle | undefined =
    fit === "contain" ? { "--visual-bg": `url(${image})` } : undefined;

  return (
    <>
      <div className={`gallery-item gallery-item-3d ${className}`} style={style}>
        <button
          aria-label={`Ver ${name} en 3D`}
          className="gallery-3d-trigger"
          onClick={openViewer}
          type="button"
        >
          <Image
            alt={name}
            className={`gallery-image ${fit === "contain" ? "img-contain" : ""}`}
            fill
            sizes="(max-width: 700px) 50vw, 25vw"
            src={image}
          />
          <span aria-hidden="true" className="gallery-3d-badge">
            Ver en 3D
          </span>
        </button>
        <span className="caption">{name}</span>
      </div>

      {open && (
        <div
          aria-label={`${name} en 3D`}
          aria-modal="true"
          className="viewer-modal"
          onClick={close}
          role="dialog"
        >
          <div className="viewer-modal-panel" onClick={(e) => e.stopPropagation()}>
            <button
              aria-label="Cerrar visor 3D"
              autoFocus
              className="viewer-modal-close"
              onClick={close}
              type="button"
            >
              <X aria-hidden="true" size={22} strokeWidth={2.4} />
            </button>
            <header className="viewer-modal-header">
              <span className="viewer-modal-eyebrow">Colección eterna</span>
              <h3 className="viewer-modal-title">{name}</h3>
            </header>
            <div
              className="viewer-modal-stage"
              onPointerDown={() => setHasInteracted(true)}
              onWheel={() => setHasInteracted(true)}
            >
              <ProductViewer3D
                alt={`Modelo 3D de ${name}`}
                className="viewer-modal-canvas"
                modelUrl={modelUrl}
              />
              <div
                aria-hidden="true"
                className={`viewer-modal-hint${hasInteracted ? " hidden" : ""}`}
              >
                <Hand className="viewer-hint-hand" size={20} />
                <span>Gira para explorar</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
