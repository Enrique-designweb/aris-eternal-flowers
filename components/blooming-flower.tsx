"use client";

export function BloomingFlower({ season }: { season: number }) {
  return (
    <div className={`flower-scene season-${season}`}>
      <svg
        viewBox="0 0 500 500"
        className="blooming-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          {/* FILTRO VAN GOGH: Distorsiona los bordes para simular pinceladas al óleo */}
          <filter id="oil-paint" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="10" xChannelSelector="R" yChannelSelector="G" />
          </filter>

          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3310" />
            <stop offset="50%" stopColor="#3d6122" />
            <stop offset="100%" stopColor="#1e3310" />
          </linearGradient>

          {/* Gradiente del Girasol: Amarillos intensos y naranjas quemados */}
          <radialGradient id="petalGrad" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#ffeb3b" />
            <stop offset="50%" stopColor="#fbc02d" />
            <stop offset="100%" stopColor="#e65100" />
          </radialGradient>

          {/* Centro del Girasol: Marrón oscuro con textura */}
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5d4037" />
            <stop offset="70%" stopColor="#3e2723" />
            <stop offset="100%" stopColor="#1b0d08" />
          </radialGradient>
        </defs>

        <g filter="url(#oil-paint)">
          {/* GIRASOL IZQUIERDO */}
          <g className="lily lily-left" transform="translate(140, 280) scale(0.7) rotate(-15)">
            <path className="stem" d="M0,220 Q-10,50 0,0" stroke="url(#stemGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path className="leaf" d="M-5,80 Q-60,50 -70,10 Q-30,30 -5,80" fill="#2e4a1c" />
            
            <g className="flower-head">
              {/* 12 Pétalos Traseros */}
              {[...Array(12)].map((_, i) => (
                <g key={`back-${i}`} transform={`rotate(${i * 30})`}>
                  <path className="petal p-back" d="M0,0 C-15,-20 -20,-70 0,-90 C20,-70 15,-20 0,0" fill="url(#petalGrad)" />
                </g>
              ))}
              {/* 12 Pétalos Frontales (Intercalados) */}
              {[...Array(12)].map((_, i) => (
                <g key={`front-${i}`} transform={`rotate(${i * 30 + 15})`}>
                  <path className="petal p-front" d="M0,0 C-12,-15 -15,-60 0,-80 C15,-60 12,-15 0,0" fill="url(#petalGrad)" />
                </g>
              ))}
              {/* Centro del Girasol */}
              <circle className="flower-center" cx="0" cy="0" r="30" fill="url(#centerGrad)" />
            </g>
          </g>

          {/* GIRASOL DERECHO */}
          <g className="lily lily-right" transform="translate(360, 260) scale(0.8) rotate(12)">
            <path className="stem" d="M0,240 Q15,50 0,0" stroke="url(#stemGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
            <path className="leaf" d="M5,90 Q60,60 70,20 Q30,40 5,90" fill="#3d6122" />
            
            <g className="flower-head">
              {[...Array(12)].map((_, i) => (
                <g key={`back-${i}`} transform={`rotate(${i * 30})`}>
                  <path className="petal p-back" d="M0,0 C-15,-20 -20,-70 0,-90 C20,-70 15,-20 0,0" fill="url(#petalGrad)" />
                </g>
              ))}
              {[...Array(12)].map((_, i) => (
                <g key={`front-${i}`} transform={`rotate(${i * 30 + 15})`}>
                  <path className="petal p-front" d="M0,0 C-12,-15 -15,-60 0,-80 C15,-60 12,-15 0,0" fill="url(#petalGrad)" />
                </g>
              ))}
              <circle className="flower-center" cx="0" cy="0" r="30" fill="url(#centerGrad)" />
            </g>
          </g>

          {/* GIRASOL CENTRAL */}
          <g className="lily lily-center" transform="translate(250, 220)">
            <path className="stem" d="M0,300 Q-10,50 0,0" stroke="url(#stemGrad)" strokeWidth="10" fill="none" strokeLinecap="round" />
            <path className="leaf" d="M-5,140 Q-80,90 -90,40 Q-40,70 -5,140" fill="#2e4a1c" />
            <path className="leaf" d="M5,80 Q80,50 90,0 Q40,30 5,80" fill="#3d6122" />
            
            <g className="flower-head">
              {[...Array(14)].map((_, i) => (
                <g key={`back-${i}`} transform={`rotate(${(i * 360) / 14})`}>
                  <path className="petal p-back" d="M0,0 C-20,-30 -25,-90 0,-120 C25,-90 20,-30 0,0" fill="url(#petalGrad)" />
                </g>
              ))}
              {[...Array(14)].map((_, i) => (
                <g key={`front-${i}`} transform={`rotate(${(i * 360) / 14 + 12.8})`}>
                  <path className="petal p-front" d="M0,0 C-15,-20 -20,-80 0,-110 C20,-80 15,-20 0,0" fill="url(#petalGrad)" />
                </g>
              ))}
              <circle className="flower-center" cx="0" cy="0" r="45" fill="url(#centerGrad)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
