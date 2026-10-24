"use client";

export function BloomingFlower({ season }: { season: number }) {
  return (
    <div className={`flower-scene season-${season}`}>
      <svg
        viewBox="0 0 400 400"
        className="blooming-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          {/* Gradientes del tallo y hojas */}
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4a702c" />
            <stop offset="100%" stopColor="#1c2e11" />
          </linearGradient>

          {/* Gradiente de los pétalos del lirio (Rosa suave a Borgoña) */}
          <radialGradient id="petalGrad" cx="50%" cy="80%" r="80%">
            <stop offset="0%" stopColor="#fff0f5" /> {/* Blanco rosado */}
            <stop offset="50%" stopColor="#e81c5e" /> {/* Rosa vibrante */}
            <stop offset="100%" stopColor="#6d1f3a" /> {/* Borgoña */}
          </radialGradient>

          {/* Gradiente dorado para el final */}
          <radialGradient id="petalGold" cx="50%" cy="80%" r="80%">
            <stop offset="0%" stopColor="#fff8d6" />
            <stop offset="50%" stopColor="#f5c518" />
            <stop offset="100%" stopColor="#c9a86a" />
          </radialGradient>

          {/* Filtro de resplandor (Glow) */}
          <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
            <feDropShadow dx="0" dy="0" stdDeviation="10" floodColor="#e81c5e" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* =========================================
            LIRIO IZQUIERDO (Más pequeño)
            ========================================= */}
        <g className="lily lily-left" transform="translate(120, 260) scale(0.7)">
          <path className="stem" d="M0,150 Q-10,50 0,-50" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M-5,80 Q-40,60 -50,30 Q-20,40 -5,80" fill="#3e6123" />
          <path className="leaf" d="M0,40 Q30,20 40,-10 Q15,10 0,40" fill="#4a702c" />
          
          <g className="flower-head" transform="translate(0, -50)">
            {/* Pétalos traseros */}
            <path className="petal p-back" d="M0,0 C-20,-30 -40,-80 0,-110 C40,-80 20,-30 0,0" fill="url(#petalGrad)" filter="url(#glow)"/>
            <path className="petal p-back" d="M0,0 C-20,-30 -40,-80 0,-110 C40,-80 20,-30 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(120)" />
            <path className="petal p-back" d="M0,0 C-20,-30 -40,-80 0,-110 C40,-80 20,-30 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(240)" />
            {/* Pétalos frontales */}
            <path className="petal p-front" d="M0,0 C-15,-25 -30,-70 0,-100 C30,-70 15,-25 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(60)" />
            <path className="petal p-front" d="M0,0 C-15,-25 -30,-70 0,-100 C30,-70 15,-25 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(180)" />
            <path className="petal p-front" d="M0,0 C-15,-25 -30,-70 0,-100 C30,-70 15,-25 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(300)" />
            {/* Estambres (Centro) */}
            <g className="flower-center">
              <path d="M0,0 Q-10,-15 -15,-25" stroke="#f5c518" strokeWidth="2" fill="none" />
              <circle cx="-15" cy="-25" r="3" fill="#c9a86a" />
              <path d="M0,0 Q10,-15 15,-25" stroke="#f5c518" strokeWidth="2" fill="none" />
              <circle cx="15" cy="-25" r="3" fill="#c9a86a" />
              <path d="M0,0 Q0,-20 0,-30" stroke="#f5c518" strokeWidth="2" fill="none" />
              <circle cx="0" cy="-30" r="3" fill="#c9a86a" />
            </g>
          </g>
        </g>

        {/* =========================================
            LIRIO DERECHO (Mediano)
            ========================================= */}
        <g className="lily lily-right" transform="translate(280, 240) scale(0.85)">
          <path className="stem" d="M0,160 Q10,50 0,-60" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M5,90 Q40,70 50,30 Q20,50 5,90" fill="#4a702c" />
          <path className="leaf" d="M0,50 Q-30,30 -40,-10 Q-15,10 0,50" fill="#3e6123" />
          
          <g className="flower-head" transform="translate(0, -60)">
            <path className="petal p-back" d="M0,0 C-20,-30 -40,-80 0,-110 C40,-80 20,-30 0,0" fill="url(#petalGrad)" filter="url(#glow)"/>
            <path className="petal p-back" d="M0,0 C-20,-30 -40,-80 0,-110 C40,-80 20,-30 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(120)" />
            <path className="petal p-back" d="M0,0 C-20,-30 -40,-80 0,-110 C40,-80 20,-30 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(240)" />
            <path className="petal p-front" d="M0,0 C-15,-25 -30,-70 0,-100 C30,-70 15,-25 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(60)" />
            <path className="petal p-front" d="M0,0 C-15,-25 -30,-70 0,-100 C30,-70 15,-25 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(180)" />
            <path className="petal p-front" d="M0,0 C-15,-25 -30,-70 0,-100 C30,-70 15,-25 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(300)" />
            <g className="flower-center">
              <path d="M0,0 Q-10,-15 -15,-25" stroke="#f5c518" strokeWidth="2" fill="none" />
              <circle cx="-15" cy="-25" r="3" fill="#c9a86a" />
              <path d="M0,0 Q10,-15 15,-25" stroke="#f5c518" strokeWidth="2" fill="none" />
              <circle cx="15" cy="-25" r="3" fill="#c9a86a" />
              <path d="M0,0 Q0,-20 0,-30" stroke="#f5c518" strokeWidth="2" fill="none" />
              <circle cx="0" cy="-30" r="3" fill="#c9a86a" />
            </g>
          </g>
        </g>

        {/* =========================================
            LIRIO CENTRAL (El más grande y protagonista)
            ========================================= */}
        <g className="lily lily-center" transform="translate(200, 220)">
          <path className="stem" d="M0,180 Q-10,60 0,-80" stroke="url(#stemGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M-5,110 Q-50,80 -60,40 Q-25,60 -5,110" fill="#3e6123" />
          <path className="leaf" d="M5,60 Q50,40 60,-10 Q25,20 5,60" fill="#4a702c" />
          
          <g className="flower-head" transform="translate(0, -80)">
            {/* Pétalos traseros */}
            <path className="petal p-back" d="M0,0 C-25,-35 -50,-90 0,-130 C50,-90 25,-35 0,0" fill="url(#petalGrad)" filter="url(#glow)"/>
            <path className="petal p-back" d="M0,0 C-25,-35 -50,-90 0,-130 C50,-90 25,-35 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(120)" />
            <path className="petal p-back" d="M0,0 C-25,-35 -50,-90 0,-130 C50,-90 25,-35 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(240)" />
            
            {/* Pétalos frontales */}
            <path className="petal p-front" d="M0,0 C-20,-30 -40,-80 0,-120 C40,-80 20,-30 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(60)" />
            <path className="petal p-front" d="M0,0 C-20,-30 -40,-80 0,-120 C40,-80 20,-30 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(180)" />
            <path className="petal p-front" d="M0,0 C-20,-30 -40,-80 0,-120 C40,-80 20,-30 0,0" fill="url(#petalGrad)" filter="url(#glow)" transform="rotate(300)" />
            
            {/* Estambres Centrales (Más grandes) */}
            <g className="flower-center">
              <path d="M0,0 Q-15,-20 -25,-35" stroke="#f5c518" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="-25" cy="-35" r="4" fill="#e81c5e" />
              <path d="M0,0 Q15,-20 25,-35" stroke="#f5c518" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="25" cy="-35" r="4" fill="#e81c5e" />
              <path d="M0,0 Q0,-25 0,-45" stroke="#f5c518" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="0" cy="-45" r="4" fill="#e81c5e" />
              <path d="M0,0 Q-25,-10 -35,-15" stroke="#f5c518" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="-35" cy="-15" r="4" fill="#e81c5e" />
              <path d="M0,0 Q25,-10 35,-15" stroke="#f5c518" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="35" cy="-15" r="4" fill="#e81c5e" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
