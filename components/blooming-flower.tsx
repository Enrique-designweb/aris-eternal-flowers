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
          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3310" />
            <stop offset="50%" stopColor="#3d6122" />
            <stop offset="100%" stopColor="#1e3310" />
          </linearGradient>

          {/* Gradiente realista para los pétalos del lirio */}
          <radialGradient id="petalGrad" cx="50%" cy="80%" r="80%">
            <stop offset="0%" stopColor="#ffb6c1" /> {/* Rosa claro en la base */}
            <stop offset="60%" stopColor="#e81c5e" /> {/* Rosa vibrante */}
            <stop offset="100%" stopColor="#8c1133" /> {/* Borde más oscuro */}
          </radialGradient>

          <radialGradient id="petalGold" cx="50%" cy="80%" r="80%">
            <stop offset="0%" stopColor="#fff8d6" />
            <stop offset="50%" stopColor="#f5c518" />
            <stop offset="100%" stopColor="#c9a86a" />
          </radialGradient>

          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#000" floodOpacity="0.6" />
          </filter>
        </defs>

        {/* --- LIRIO IZQUIERDO --- */}
        <g className="lily lily-left" transform="translate(140, 280) scale(0.7) rotate(-10)">
          <path className="stem" d="M0,220 Q-10,50 0,-50" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M-5,80 Q-50,40 -60,10 Q-20,30 -5,80" fill="#2e4a1c" />
          <g className="flower-head" transform="translate(0, -50)" filter="url(#softShadow)">
            {/* 6 Pétalos (3 traseros, 3 frontales) */}
            <path className="petal p-back" d="M0,0 C-40,-20 -70,-80 -30,-120 C10,-80 20,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C40,-20 70,-80 30,-120 C-10,-80 -20,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C-50,-10 -80,-60 -40,-90 C0,-60 20,-10 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            
            <path className="petal p-front" d="M0,0 C-50,-10 -80,-80 -30,-120 C10,-80 20,-10 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C50,-10 80,-80 30,-120 C-10,-80 -20,-10 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C-60,-20 -90,-70 -40,-100 C0,-70 20,-20 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            
            {/* Puntos característicos del lirio */}
            <g className="flower-spots" fill="#6d1f3a" opacity="0.6">
              <circle cx="-10" cy="-30" r="2" />
              <circle cx="-20" cy="-40" r="2.5" />
              <circle cx="15" cy="-35" r="2" />
              <circle cx="25" cy="-45" r="1.5" />
              <circle cx="-30" cy="-60" r="2" />
              <circle cx="30" cy="-55" r="2" />
            </g>

            {/* Estambres */}
            <g className="flower-center">
              <path d="M0,0 Q-10,-20 -20,-45" stroke="#ffb6c1" strokeWidth="2" fill="none" />
              <ellipse cx="-20" cy="-45" rx="3" ry="8" fill="#d97a24" transform="rotate(-30 -20 -45)" />
              
              <path d="M0,0 Q10,-20 20,-45" stroke="#ffb6c1" strokeWidth="2" fill="none" />
              <ellipse cx="20" cy="-45" rx="3" ry="8" fill="#d97a24" transform="rotate(30 20 -45)" />
              
              <path d="M0,0 Q-5,-25 -10,-55" stroke="#ffb6c1" strokeWidth="2" fill="none" />
              <ellipse cx="-10" cy="-55" rx="3" ry="8" fill="#d97a24" transform="rotate(-10 -10 -55)" />
              
              <path d="M0,0 Q5,-25 10,-55" stroke="#ffb6c1" strokeWidth="2" fill="none" />
              <ellipse cx="10" cy="-55" rx="3" ry="8" fill="#d97a24" transform="rotate(10 10 -55)" />
            </g>
          </g>
        </g>

        {/* --- LIRIO DERECHO --- */}
        <g className="lily lily-right" transform="translate(360, 260) scale(0.8) rotate(10)">
          <path className="stem" d="M0,240 Q15,50 0,-60" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M5,90 Q50,50 60,20 Q20,40 5,90" fill="#3d6122" />
          <g className="flower-head" transform="translate(0, -60)" filter="url(#softShadow)">
            <path className="petal p-back" d="M0,0 C-40,-20 -70,-80 -30,-120 C10,-80 20,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C40,-20 70,-80 30,-120 C-10,-80 -20,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C-50,-10 -80,-60 -40,-90 C0,-60 20,-10 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            <path className="petal p-front" d="M0,0 C-50,-10 -80,-80 -30,-120 C10,-80 20,-10 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C50,-10 80,-80 30,-120 C-10,-80 -20,-10 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C-60,-20 -90,-70 -40,-100 C0,-70 20,-20 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            
            <g className="flower-spots" fill="#6d1f3a" opacity="0.6">
              <circle cx="10" cy="-35" r="2" /><circle cx="25" cy="-50" r="2.5" />
              <circle cx="-15" cy="-40" r="2" /><circle cx="-30" cy="-55" r="1.5" />
              <circle cx="30" cy="-65" r="2" /><circle cx="-20" cy="-70" r="2" />
            </g>

            <g className="flower-center">
              <path d="M0,0 Q-10,-20 -20,-45" stroke="#ffb6c1" strokeWidth="2" fill="none" />
              <ellipse cx="-20" cy="-45" rx="3" ry="8" fill="#d97a24" transform="rotate(-30 -20 -45)" />
              <path d="M0,0 Q10,-20 20,-45" stroke="#ffb6c1" strokeWidth="2" fill="none" />
              <ellipse cx="20" cy="-45" rx="3" ry="8" fill="#d97a24" transform="rotate(30 20 -45)" />
              <path d="M0,0 Q-5,-25 -10,-55" stroke="#ffb6c1" strokeWidth="2" fill="none" />
              <ellipse cx="-10" cy="-55" rx="3" ry="8" fill="#d97a24" transform="rotate(-10 -10 -55)" />
              <path d="M0,0 Q5,-25 10,-55" stroke="#ffb6c1" strokeWidth="2" fill="none" />
              <ellipse cx="10" cy="-55" rx="3" ry="8" fill="#d97a24" transform="rotate(10 10 -55)" />
            </g>
          </g>
        </g>

        {/* --- LIRIO CENTRAL (Protagonista) --- */}
        <g className="lily lily-center" transform="translate(250, 220)">
          <path className="stem" d="M0,300 Q-10,60 0,-80" stroke="url(#stemGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M-5,140 Q-70,80 -80,40 Q-30,70 -5,140" fill="#2e4a1c" />
          <path className="leaf" d="M5,80 Q70,50 80,0 Q30,30 5,80" fill="#3d6122" />
          
          <g className="flower-head" transform="translate(0, -80)" filter="url(#softShadow)">
            {/* 6 Pétalos Grandes */}
            <path className="petal p-back" d="M0,0 C-40,-20 -80,-100 -30,-140 C10,-100 20,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C40,-20 80,-100 30,-140 C-10,-100 -20,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C-60,-10 -90,-80 -40,-110 C0,-80 20,-10 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            
            <path className="petal p-front" d="M0,0 C-60,-10 -90,-100 -30,-140 C10,-100 20,-10 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C60,-10 90,-100 30,-140 C-10,-100 -20,-10 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C-70,-20 -100,-90 -40,-120 C0,-90 20,-20 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            
            {/* Puntos del lirio (Puntillismo) */}
            <g className="flower-spots" fill="#6d1f3a" opacity="0.5">
              <circle cx="-15" cy="-40" r="2.5" /><circle cx="-30" cy="-55" r="3" />
              <circle cx="15" cy="-45" r="2.5" /><circle cx="30" cy="-60" r="3" />
              <circle cx="-40" cy="-80" r="2" /><circle cx="40" cy="-85" r="2" />
              <circle cx="-10" cy="-70" r="3" /><circle cx="20" cy="-75" r="2.5" />
              <circle cx="0" cy="-90" r="2" />
            </g>

            {/* Estambres Centrales (Polen naranja) */}
            <g className="flower-center">
              {/* 6 Estambres */}
              <path d="M0,0 Q-15,-25 -25,-55" stroke="#ffe4e1" strokeWidth="3" fill="none" />
              <ellipse cx="-25" cy="-55" rx="4" ry="10" fill="#d97a24" transform="rotate(-30 -25 -55)" />
              
              <path d="M0,0 Q15,-25 25,-55" stroke="#ffe4e1" strokeWidth="3" fill="none" />
              <ellipse cx="25" cy="-55" rx="4" ry="10" fill="#d97a24" transform="rotate(30 25 -55)" />
              
              <path d="M0,0 Q-5,-30 -15,-65" stroke="#ffe4e1" strokeWidth="3" fill="none" />
              <ellipse cx="-15" cy="-65" rx="4" ry="10" fill="#d97a24" transform="rotate(-10 -15 -65)" />
              
              <path d="M0,0 Q5,-30 15,-65" stroke="#ffe4e1" strokeWidth="3" fill="none" />
              <ellipse cx="15" cy="-65" rx="4" ry="10" fill="#d97a24" transform="rotate(10 15 -65)" />
              
              <path d="M0,0 Q-25,-15 -35,-35" stroke="#ffe4e1" strokeWidth="3" fill="none" />
              <ellipse cx="-35" cy="-35" rx="4" ry="10" fill="#d97a24" transform="rotate(-60 -35 -35)" />
              
              <path d="M0,0 Q25,-15 35,-35" stroke="#ffe4e1" strokeWidth="3" fill="none" />
              <ellipse cx="35" cy="-35" rx="4" ry="10" fill="#d97a24" transform="rotate(60 35 -35)" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
