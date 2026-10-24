"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CustomizerButton } from "./customizer";
import { BloomingFlower } from "./blooming-flower";

/* =========================================
   DATOS DE LOS SLIDES
   ========================================= */

const SLIDES = [
  {
    id: 1,
    bgClass: "bg-spring",
    eyebrow: "El ciclo de la vida",
    title: "En primavera, nacen.",
    highlight: "La naturaleza crea belleza.",
    text: "Flores frescas, colores vibrantes y la promesa de un nuevo comienzo.",
  },
  {
    id: 2,
    bgClass: "bg-summer",
    eyebrow: "El ciclo de la vida",
    title: "En verano, brillan.",
    highlight: "La naturaleza florece.",
    text: "Ramos llenos de energía, luz y vida que iluminan cualquier espacio.",
  },
  {
    id: 3,
    bgClass: "bg-autumn",
    eyebrow: "El ciclo de la vida",
    title: "En otoño, cambian.",
    highlight: "La naturaleza se transforma.",
    text: "Tonos cálidos y profundos, perfectos para momentos especiales.",
  },
  {
    id: 4,
    bgClass: "bg-winter",
    eyebrow: "El ciclo de la vida",
    title: "En invierno, descansan.",
    highlight: "La naturaleza se detiene.",
    text: "El frío llega, los pétalos caen... pero la belleza no desaparece.",
  },
  {
    id: 5,
    bgClass: "bg-eternal",
    eyebrow: "Ari's Eternal Flowers",
    title: "Aquí, el tiempo",
    highlight: "se detiene.",
    text: "Desde una sola flor individual hasta ramos XL. Tú eliges.",
  },
];

/* =========================================
   COMPONENTE PRINCIPAL
   ========================================= */

export function CinematicBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Cambia de slide automáticamente cada 4 segundos
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cinematic-banner">
      {/* 1. Fondos con transición */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`cinematic-bg ${slide.bgClass} ${
            index === currentSlide ? "active" : ""
          }`}
        />
      ))}

      {/* 2. Overlay oscuro */}
      <div className="cinematic-overlay" />

      {/* 3. Pétalos cayendo */}
      <div className="cinematic-petals" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={`cinematic-petal petal-${i + 1}`} />
        ))}
      </div>

      {/* 4. Contenido Principal - Layout de 2 columnas */}
      <div className="container cinematic-content-layout">
        
        {/* Columna Izquierda: Textos y Botones */}
        <div className="cinematic-left">
          <div className="cinematic-text-box">
            {SLIDES.map((slide, index) => (
              <div
                key={slide.id}
                className={`cinematic-slide-content ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <span className="cinematic-eyebrow">{slide.eyebrow}</span>
                <h2 className="cinematic-title">
                  {slide.title} <br />
                  <em>{slide.highlight}</em>
                </h2>
                <p className="cinematic-desc">{slide.text}</p>
              </div>
            ))}
          </div>

          <div className="cinematic-actions">
            <a className="button button-gold" href="#coleccion">
              Ver colección
              <ArrowRight size={18} />
            </a>
            <CustomizerButton variant="secondary-glass">
              Crear mi ramo
            </CustomizerButton>
          </div>

          <div className="cinematic-dots">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                className={`cinematic-dot ${
                  index === currentSlide ? "active" : ""
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Columna Derecha: La Flor Animada */}
        <div className="cinematic-right">
          <BloomingFlower />
        </div>

      </div>
    </section>
  );
}
