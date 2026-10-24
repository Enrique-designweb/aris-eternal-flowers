"use client";

export function BloomingFlower({ season }: { season: number }) {
  return (
    <div className={`flower-scene season-${season}`}>
      <svg
        viewBox="0 0 300 400"
        className="blooming-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a702c" />
            <stop offset="100%" stopColor="#2e4a1c" />
          </linearGradient>

          <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffb6c1" /> {/* Rosa muy claro */}
            <stop offset="70%" stopColor="#e81c5e" /> {/* Rosa vibrante */}
            <stop offset="100%" stopColor="#8c1133" />
          </radialGradient>

          <radialGradient id="petalGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff8d6" />
            <stop offset="60%" stopColor="#f5c518" />
            <stop offset="100%" stopColor="#c9a86a" />
          </radialGradient>

          {/* Filtro de resplandor para toda la flor */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
            <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#ffb6c1" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* TALLO */}
        <path
          className="stem"
          d="M150,400 Q140,300 150,200"
          stroke="url(#stemGrad)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* HOJAS */}
        <g className="leaves">
          <path className="leaf" d="M145,320 Q110,310 100,280 Q130,290 145,320" fill="#4a702c" />
          <path className="leaf" d="M148,280 Q180,265 195,235 Q165,250 148,280" fill="#6b9e3e" />
        </g>

        {/* FLOR (Aplicamos el filtro de luz aquí) */}
        <g className="flower-head" transform="translate(150, 190)" filter="url(#glow)">
          {/* Pétalos traseros */}
          <path className="petal p-back" d="M0,0 C-40,-50 -60,-100 0,-120 C60,-100 40,-50 0,0" fill="url(#petalGrad)" />
          <path className="petal p-back" d="M0,0 C40,-50 60,-100 0,-120 C-60,-100 -40,-50 0,0" fill="url(#petalGrad)" transform="rotate(60)" />
          <path className="petal p-back" d="M0,0 C40,-50 60,-100 0,-120 C-60,-100 -40,-50 0,0" fill="url(#petalGrad)" transform="rotate(-60)" />
          
          {/* Pétalos frontales */}
          <path className="petal p-front" d="M0,0 C-30,-40 -50,-90 0,-100 C50,-90 30,-40 0,0" fill="url(#petalGrad)" />
          <path className="petal p-front" d="M0,0 C30,-40 50,-90 0,-100 C-50,-90 -30,-40 0,0" fill="url(#petalGrad)" transform="rotate(45)" />
          <path className="petal p-front" d="M0,0 C30,-40 50,-90 0,-100 C-50,-90 -30,-40 0,0" fill="url(#petalGrad)" transform="rotate(-45)" />
          
          {/* Centro brillante */}
          <circle className="flower-center" cx="0" cy="-15" r="18" fill="#fff8d6" />
        </g>
      </svg>
    </div>
  );
}
