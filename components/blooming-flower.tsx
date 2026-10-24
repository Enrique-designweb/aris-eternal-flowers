"use client";

import { useEffect, useState } from "react";

export function BloomingFlower() {
  const [isBlooming, setIsBlooming] = useState(false);

  useEffect(() => {
    // Inicia el ciclo de la flor después de que carga la página
    const timer = setTimeout(() => {
      setIsBlooming(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flower-container ${isBlooming ? "animate" : ""}`}>
      <svg
        viewBox="0 0 300 400"
        className="blooming-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Degradados para realismo */}
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2e4a1c" />
            <stop offset="50%" stopColor="#4a702c" />
            <stop offset="100%" stopColor="#2e4a1c" />
          </linearGradient>
          
          <radialGradient id="petalGradOuter" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e86686" />
            <stop offset="70%" stopColor="#a32044" />
            <stop offset="100%" stopColor="#6b0e27" />
          </radialGradient>

          <radialGradient id="petalGradInner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5a3b7" />
            <stop offset="80%" stopColor="#c2355c" />
            <stop offset="100%" stopColor="#911d3c" />
          </radialGradient>

          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fce38a" />
            <stop offset="100%" stopColor="#c9a86a" />
          </radialGradient>

          {/* Sombra suave para los pétalos */}
          <filter id="petalShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#14060a" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* TALLO (Se dibuja hacia arriba) */}
        <path
          className="stem"
          d="M150,400 Q140,300 150,200"
          stroke="url(#stemGrad)"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />

        {/* HOJAS (Aparecen al crecer) */}
        <path
          className="leaf leaf-left"
          d="M145,320 Q110,310 100,280 Q130,290 145,320"
          fill="#3e6123"
        />
        <path
          className="leaf leaf-right"
          d="M148,280 Q180,265 195,235 Q165,250 148,280"
          fill="#4a702c"
        />

        {/* FLOR (Pétalos que se abren) */}
        <g className="flower-head" transform="translate(150, 190)">
          {/* Pétalos traseros */}
          <path className="petal petal-bg-1" d="M0,0 C-40,-50 -60,-100 0,-120 C60,-100 40,-50 0,0" fill="url(#petalGradOuter)" filter="url(#petalShadow)" />
          <path className="petal petal-bg-2" d="M0,0 C40,-50 60,-100 0,-120 C-60,-100 -40,-50 0,0" fill="url(#petalGradOuter)" filter="url(#petalShadow)" transform="rotate(45)" />
          <path className="petal petal-bg-3" d="M0,0 C40,-50 60,-100 0,-120 C-60,-100 -40,-50 0,0" fill="url(#petalGradOuter)" filter="url(#petalShadow)" transform="rotate(-45)" />
          
          {/* Pétalos frontales */}
          <path className="petal petal-fg-1" d="M0,0 C-30,-40 -50,-90 0,-100 C50,-90 30,-40 0,0" fill="url(#petalGradInner)" filter="url(#petalShadow)" />
          <path className="petal petal-fg-2" d="M0,0 C30,-40 50,-90 0,-100 C-50,-90 -30,-40 0,0" fill="url(#petalGradInner)" filter="url(#petalShadow)" transform="rotate(60)" />
          <path className="petal petal-fg-3" d="M0,0 C30,-40 50,-90 0,-100 C-50,-90 -30,-40 0,0" fill="url(#petalGradInner)" filter="url(#petalShadow)" transform="rotate(-60)" />
          
          {/* Centro de la flor */}
          <circle className="flower-center" cx="0" cy="-15" r="18" fill="url(#centerGrad)" />
          
          {/* Detalles del centro (puntos) */}
          <circle cx="-5" cy="-10" r="2" fill="#a37a2a" opacity="0.6" />
          <circle cx="5" cy="-10" r="2" fill="#a37a2a" opacity="0.6" />
          <circle cx="0" cy="-20" r="2" fill="#a37a2a" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
