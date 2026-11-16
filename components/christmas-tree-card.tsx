"use client";

import Image from "next/image";
import { useState } from "react";
import { TapLink } from "./motion-offer";

interface TreeSize {
  cm: number;
  price: number;
}

const TREE_SIZES: readonly TreeSize[] = [
  { cm: 30, price: 4500 },
  { cm: 40, price: 5000 },
  { cm: 50, price: 5500 },
  { cm: 60, price: 6000 },
];

interface ChristmasTreeCardProps {
  whatsappNumber: string;
}

function formatPrice(price: number): string {
  return price.toLocaleString("en-US");
}

function sizeLabel(size: TreeSize): string {
  return `${size.cm}cm - ${formatPrice(size.price)} CUP`;
}

export function ChristmasTreeCard({ whatsappNumber }: ChristmasTreeCardProps) {
  const [selectedSize, setSelectedSize] = useState(0);
  const size = TREE_SIZES[selectedSize];

  const message = `Hola, quiero el Árbol de Navidad de ${size.cm}cm a ${formatPrice(size.price)} CUP`;
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <article className="tree-card">
      <span className="offer-badge">Navidad</span>

      {/* Imagen estática: sin zoom ni transformaciones al cambiar de tamaño */}
      <div className="tree-visual">
        <Image
          alt="Árbol de Navidad tejido a mano con limpiapipas"
          className="tree-image"
          fill
          priority={false}
          sizes="(max-width: 700px) 100vw, 420px"
          src="/galeria/christmas-tree-limpiapipas.jpg"
        />
      </div>

      <div className="tree-body">
        <h3 className="offer-name">Árbol de Navidad</h3>
        <p className="offer-desc">
          Tejido a mano con limpiapipas y luces. Elige el tamaño perfecto para
          tu rincón navideño.
        </p>

        <div
          aria-label="Tamaño del árbol"
          className="tree-sizes"
          role="radiogroup"
        >
          {TREE_SIZES.map((s, i) => {
            const selected = i === selectedSize;
            return (
              <button
                aria-checked={selected}
                className={`tree-size-option${selected ? " selected" : ""}`}
                key={s.cm}
                onClick={() => setSelectedSize(i)}
                role="radio"
                type="button"
              >
                {sizeLabel(s)}
              </button>
            );
          })}
        </div>

        <TapLink className="button button-primary" href={href}>
          Quiero este ramo
        </TapLink>
      </div>
    </article>
  );
}
