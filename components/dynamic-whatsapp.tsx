"use client";

import { useEffect, useState, useRef } from "react";

export function DynamicWhatsApp({
  phone,
  message,
}: {
  phone: string;
  message: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const hasAppeared = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Aparece cuando el usuario baja 300px y se queda visible para siempre
      if (window.scrollY > 300 && !hasAppeared.current) {
        setIsVisible(true);
        hasAppeared.current = true;
        // ELIMINADO: setTimeout que lo ocultaba a los 20s
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className={`dynamic-wa ${isVisible ? "visible" : ""}`}
    >
      <div className="dynamic-wa-flower">🌻</div>
      <div className="dynamic-wa-text">
        <strong>¿Tienes dudas?</strong>
        <span>Escríbenos por WhatsApp</span>
      </div>
      <div className="dynamic-wa-icon">
        {/* Emoji de flor en lugar del SVG */}
        <span style={{ fontSize: "18px", lineHeight: 1 }}>🌸</span>
      </div>
    </a>
  );
}
