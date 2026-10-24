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
          {/* Gradiente de luz para el tallo y hojas */}
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3310" />
            <stop offset="50%" stopColor="#3d6122" />
            <stop offset="100%" stopColor="#1e3310" />
          </linearGradient>

          {/* Gradiente de pétalos realista (Luz desde arriba) */}
          <radialGradient id="petalGrad" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffe6eb" /> {/* Brillo superior */}
            <stop offset="40%" stopColor="#d92d5e" /> {/* Rosa vibrante */}
            <stop offset="90%" stopColor="#730f28" /> {/* Sombra profunda */}
            <stop offset="100%" stopColor="#420614" />
          </radialGradient>

          {/* Gradiente para el estado Eterno (Dorado) */}
          <radialGradient id="petalGold" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="30%" stopColor="#fce38a" />
            <stop offset="80%" stopColor="#c9a86a" />
            <stop offset="100%" stopColor="#7a5c29" />
          </radialGradient>

          {/* Sombra suave para dar volumen (No es neón) */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* --- LIRIO IZQUIERDO --- */}
        <g className="lily lily-left" transform="translate(150, 350) scale(0.7)">
          <path className="stem" d="M0,150 Q-15,50 0,-50" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M-5,80 Q-50,40 -60,10 Q-20,30 -5,80" fill="#2e4a1c" />
          <g className="flower-head" transform="translate(0, -50)" filter="url(#softShadow)">
            {/* Pétalos traseros */}
            <path className="petal p-back" d="M0,0 C-30,-20 -50,-80 -20,-110 C10,-80 20,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C30,-20 50,-80 20,-110 C-10,-80 -20,-20 0,0" fill="url(#petalGrad)" />
            {/* Pétalos frontales */}
            <path className="petal p-front" d="M0,0 C-40,-10 -60,-70 -30,-100 C0,-70 20,-10 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C40,-10 60,-70 30,-100 C0,-70 -20,-10 0,0" fill="url(#petalGrad)" />
            {/* Estambres */}
            <g className="flower-center">
              <path d="M0,0 Q-10,-20 -15,-40" stroke="#d4af37" strokeWidth="2" fill="none" />
              <circle cx="-15" cy="-40" r="3" fill="#8a5a1c" />
              <path d="M0,0 Q10,-20 15,-40" stroke="#d4af37" strokeWidth="2" fill="none" />
              <circle cx="15" cy="-40" r="3" fill="#8a5a1c" />
              <path d="M0,0 Q0,-25 0,-45" stroke="#d4af37" strokeWidth="2" fill="none" />
              <circle cx="0" cy="-45" r="3" fill="#8a5a1c" />
            </g>
          </g>
        </g>

        {/* --- LIRIO DERECHO --- */}
        <g className="lily lily-right" transform="translate(350, 330) scale(0.8)">
          <path className="stem" d="M0,170 Q15,50 0,-60" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M5,90 Q50,50 60,20 Q20,40 5,90" fill="#3d6122" />
          <g className="flower-head" transform="translate(0, -60)" filter="url(#softShadow)">
            <path className="petal p-back" d="M0,0 C-30,-20 -50,-80 -20,-110 C10,-80 20,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C30,-20 50,-80 20,-110 C-10,-80 -20,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C-40,-10 -60,-70 -30,-100 C0,-70 20,-10 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C40,-10 60,-70 30,-100 C0,-70 -20,-10 0,0" fill="url(#petalGrad)" />
            <g className="flower-center">
              <path d="M0,0 Q-10,-20 -15,-40" stroke="#d4af37" strokeWidth="2" fill="none" />
              <circle cx="-15" cy="-40" r="3" fill="#8a5a1c" />
              <path d="M0,0 Q10,-20 15,-40" stroke="#d4af37" strokeWidth="2" fill="none" />
              <circle cx="15" cy="-40" r="3" fill="#8a5a1c" />
              <path d="M0,0 Q0,-25 0,-45" stroke="#d4af37" strokeWidth="2" fill="none" />
              <circle cx="0" cy="-45" r="3" fill="#8a5a1c" />
            </g>
          </g>
        </g>

        {/* --- LIRIO CENTRAL (Protagonista) --- */}
        <g className="lily lily-center" transform="translate(250, 320)">
          <path className="stem" d="M0,180 Q-10,60 0,-80" stroke="url(#stemGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M-5,120 Q-60,70 -70,30 Q-30,60 -5,120" fill="#2e4a1c" />
          <path className="leaf" d="M5,70 Q60,40 70,-10 Q30,20 5,70" fill="#3d6122" />
          <g className="flower-head" transform="translate(0, -80)" filter="url(#softShadow)">
            {/* 6 Pétalos (3 traseros, 3 frontales) */}
            <path className="petal p-back" d="M0,0 C-40,-20 -60,-90 -20,-130 C20,-90 30,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C40,-20 60,-90 20,-130 C-20,-90 -30,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C-50,-10 -70,-60 -30,-90 C10,-60 30,-10 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            
            <path className="petal p-front" d="M0,0 C-50,-10 -70,-80 -30,-120 C10,-80 30,-10 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C50,-10 70,-80 30,-120 C-10,-80 -30,-10 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C-60,-20 -80,-70 -40,-100 C0,-70 20,-20 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            
            {/* Estambres grandes y detallados */}
            <g className="flower-center">
              <path d="M0,0 Q-15,-25 -25,-50" stroke="#f5c518" strokeWidth="3" fill="none" strokeLinecap="round" />
              <ellipse cx="-25" cy="-50" rx="4" ry="6" fill="#b85c38" transform="rotate(-30 -25 -50)" />
              
              <path d="M0,0 Q15,-25 25,-50" stroke="#f5c518" strokeWidth="3" fill="none" strokeLinecap="round" />
              <ellipse cx="25" cy="-50" rx="4" ry="6" fill="#b85c38" transform="rotate(30 25 -50)" />
              
              <path d="M0,0 Q-5,-30 -10,-60" stroke="#f5c518" strokeWidth="3" fill="none" strokeLinecap="round" />
              <ellipse cx="-10" cy="-60" rx="4" ry="6" fill="#b85c38" transform="rotate(-10 -10 -60)" />
              
              <path d="M0,0 Q5,-30 10,-60" stroke="#f5c518" strokeWidth="3" fill="none" strokeLinecap="round" />
              <ellipse cx="10" cy="-60" rx="4" ry="6" fill="#b85c38" transform="rotate(10 10 -60)" />
              
              <path d="M0,0 Q0,-35 0,-70" stroke="#f5c518" strokeWidth="3" fill="none" strokeLinecap="round" />
              <ellipse cx="0" cy="-70" rx="4" ry="6" fill="#b85c38" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
