"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CustomizerButton } from "./customizer";
import { BloomingFlower } from "./blooming-flower";

const SLIDES = [
  { id: 1, bgClass: "bg-spring", eyebrow: "Primavera", title: "Todo comienza.", highlight: "La semilla despierta.", text: "Flores frescas y la promesa de un nuevo comienzo." },
  { id: 2, bgClass: "bg-summer", eyebrow: "Verano", title: "Máximo esplendor.", highlight: "La naturaleza florece.", text: "Ramos llenos de energía, luz y vida." },
  { id: 3, bgClass: "bg-autumn", eyebrow: "Otoño", title: "Todo cambia.", highlight: "Los colores se transforman.", text: "Tonos cálidos y profundos, preludio del descanso." },
  { id: 4, bgClass: "bg-winter", eyebrow: "Invierno", title: "Todo se marchita.", highlight: "La naturaleza se detiene.", text: "El frío llega, los pétalos caen... la belleza desaparece." },
  { id: 5, bgClass: "bg-eternal", eyebrow: "Ari's Eternal Flowers", title: "Aquí, el tiempo", highlight: "se detiene.", text: "Desde una sola flor hasta ramos XL. Hacemos que sea eterno." },
];

export function CinematicBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4500); // 4.5 segundos por slide
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cinematic-banner">
      {/* Fondos */}
      {SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`cinematic-bg ${slide.bgClass} ${index === currentSlide ? "active" : ""}`}
        />
      ))}

      <div className="cinematic-overlay" />

      {/* Pétalos cayendo */}
      <div className="cinematic-petals" aria-hidden="true">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={`cinematic-petal petal-${i + 1}`} />
        ))}
      </div>

      {/* FLOR EN EL FONDO (CENTRADA) */}
      <div className="cinematic-flower-bg">
        <BloomingFlower season={currentSlide} />
      </div>

      {/* CONTENIDO */}
      <div className="container cinematic-content-layout">
        <div className="cinematic-text-box">
          {SLIDES.map((slide, index) => (
            <div
              key={slide.id}
              className={`cinematic-slide-content ${index === currentSlide ? "active" : ""}`}
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
              className={`cinematic-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
