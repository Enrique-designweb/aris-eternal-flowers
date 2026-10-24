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
            <stop offset="0%" stopColor="#2e4a1c" />
            <stop offset="100%" stopColor="#15240b" />
          </linearGradient>

          <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5a3b7" />
            <stop offset="70%" stopColor="#c2355c" />
            <stop offset="100%" stopColor="#911d3c" />
          </radialGradient>

          <radialGradient id="petalGold" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fce38a" />
            <stop offset="100%" stopColor="#c9a86a" />
          </radialGradient>

          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#14060a" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* TALLO (Se dobla en invierno) */}
        <path
          className="stem"
          d="M150,400 Q140,300 150,200"
          stroke="url(#stemGrad)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />

        {/* HOJAS (Caen en invierno) */}
        <g className="leaves">
          <path className="leaf" d="M145,320 Q110,310 100,280 Q130,290 145,320" fill="#3e6123" />
          <path className="leaf" d="M148,280 Q180,265 195,235 Q165,250 148,280" fill="#4a702c" />
        </g>

        {/* FLOR (Se abre, cambia de color y cae) */}
        <g className="flower-head" transform="translate(150, 190)">
          {/* Pétalos traseros */}
          <path className="petal p-back" d="M0,0 C-40,-50 -60,-100 0,-120 C60,-100 40,-50 0,0" fill="url(#petalGrad)" filter="url(#shadow)" />
          <path className="petal p-back" d="M0,0 C40,-50 60,-100 0,-120 C-60,-100 -40,-50 0,0" fill="url(#petalGrad)" filter="url(#shadow)" transform="rotate(60)" />
          <path className="petal p-back" d="M0,0 C40,-50 60,-100 0,-120 C-60,-100 -40,-50 0,0" fill="url(#petalGrad)" filter="url(#shadow)" transform="rotate(-60)" />
          
          {/* Pétalos frontales */}
          <path className="petal p-front" d="M0,0 C-30,-40 -50,-90 0,-100 C50,-90 30,-40 0,0" fill="url(#petalGrad)" filter="url(#shadow)" />
          <path className="petal p-front" d="M0,0 C30,-40 50,-90 0,-100 C-50,-90 -30,-40 0,0" fill="url(#petalGrad)" filter="url(#shadow)" transform="rotate(45)" />
          <path className="petal p-front" d="M0,0 C30,-40 50,-90 0,-100 C-50,-90 -30,-40 0,0" fill="url(#petalGrad)" filter="url(#shadow)" transform="rotate(-45)" />
          
          {/* Centro */}
          <circle className="flower-center" cx="0" cy="-15" r="18" fill="#fce38a" />
        </g>
      </svg>
    </div>
  );
}
