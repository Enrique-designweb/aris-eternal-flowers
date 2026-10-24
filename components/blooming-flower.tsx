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

          <radialGradient id="petalGrad" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#ffe6eb" />
            <stop offset="30%" stopColor="#ff4d79" />
            <stop offset="80%" stopColor="#b3002d" />
            <stop offset="100%" stopColor="#66001a" />
          </radialGradient>

          <radialGradient id="petalGold" cx="50%" cy="100%" r="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="40%" stopColor="#fce38a" />
            <stop offset="80%" stopColor="#c9a86a" />
            <stop offset="100%" stopColor="#7a5c29" />
          </radialGradient>

          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* --- LIRIO IZQUIERDO --- */}
        <g className="lily lily-left" transform="translate(140, 280) scale(0.7) rotate(-15)">
          <path className="stem" d="M0,220 Q-10,50 0,0" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M-5,80 Q-50,40 -60,10 Q-20,30 -5,80" fill="#2e4a1c" />
          
          <g className="flower-head" filter="url(#softShadow)">
            <path className="receptacle" d="M-10,0 Q0,15 10,0 L5,-10 L-5,-10 Z" fill="#2e4a1c" />
            
            {/* Pétalos traseros (Más erguidos) */}
            <path className="petal p-back" d="M0,0 C-30,-30 -50,-80 -20,-110 C10,-80 20,-30 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C30,-30 50,-80 20,-110 C-10,-80 -20,-30 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C-20,-40 -20,-90 0,-120 C20,-90 20,-40 0,0" fill="url(#petalGrad)" />
            
            {/* Pétalos frontales (Más abiertos hacia los lados) */}
            <path className="petal p-front" d="M0,0 C-50,-15 -90,-60 -60,-90 C-20,-60 10,-15 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C50,-15 90,-60 60,-90 C20,-60 -10,-15 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C-30,-5 -70,-30 -40,-60 C0,-30 10,-5 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            
            <g className="flower-spots" fill="#4a0014" opacity="0.6">
              <circle cx="-15" cy="-30" r="2" /><circle cx="-25" cy="-45" r="2.5" />
              <circle cx="15" cy="-35" r="2" /><circle cx="25" cy="-50" r="2.5" />
              <circle cx="-30" cy="-60" r="1.5" /><circle cx="30" cy="-55" r="1.5" />
            </g>

            <g className="flower-center">
              <path d="M0,0 Q5,-20 0,-50" stroke="#90ee90" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="0" cy="-50" r="3" fill="#90ee90" />
              {[-35, -15, 15, 35, -50, 50].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  <path d="M0,0 Q10,-25 15,-55" stroke="#ffe4e1" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <ellipse cx="15" cy="-55" rx="3" ry="7" fill="#d97a24" transform="rotate(15 15 -55)" />
                </g>
              ))}
            </g>
          </g>
        </g>

        {/* --- LIRIO DERECHO --- */}
        <g className="lily lily-right" transform="translate(360, 260) scale(0.8) rotate(12)">
          <path className="stem" d="M0,240 Q15,50 0,0" stroke="url(#stemGrad)" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M5,90 Q50,50 60,20 Q20,40 5,90" fill="#3d6122" />
          
          <g className="flower-head" filter="url(#softShadow)">
            <path className="receptacle" d="M-10,0 Q0,15 10,0 L5,-10 L-5,-10 Z" fill="#3d6122" />
            <path className="petal p-back" d="M0,0 C-30,-30 -50,-80 -20,-110 C10,-80 20,-30 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C30,-30 50,-80 20,-110 C-10,-80 -20,-30 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C-20,-40 -20,-90 0,-120 C20,-90 20,-40 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C-50,-15 -90,-60 -60,-90 C-20,-60 10,-15 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C50,-15 90,-60 60,-90 C20,-60 -10,-15 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C-30,-5 -70,-30 -40,-60 C0,-30 10,-5 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            
            <g className="flower-spots" fill="#4a0014" opacity="0.6">
              <circle cx="15" cy="-30" r="2" /><circle cx="25" cy="-45" r="2.5" />
              <circle cx="-15" cy="-35" r="2" /><circle cx="-25" cy="-50" r="2.5" />
              <circle cx="30" cy="-60" r="1.5" /><circle cx="-30" cy="-55" r="1.5" />
            </g>

            <g className="flower-center">
              <path d="M0,0 Q5,-20 0,-50" stroke="#90ee90" strokeWidth="3" fill="none" strokeLinecap="round" />
              <circle cx="0" cy="-50" r="3" fill="#90ee90" />
              {[-35, -15, 15, 35, -50, 50].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  <path d="M0,0 Q10,-25 15,-55" stroke="#ffe4e1" strokeWidth="2" fill="none" strokeLinecap="round" />
                  <ellipse cx="15" cy="-55" rx="3" ry="7" fill="#d97a24" transform="rotate(15 15 -55)" />
                </g>
              ))}
            </g>
          </g>
        </g>

        {/* --- LIRIO CENTRAL --- */}
        <g className="lily lily-center" transform="translate(250, 220)">
          <path className="stem" d="M0,300 Q-10,50 0,0" stroke="url(#stemGrad)" strokeWidth="8" fill="none" strokeLinecap="round" />
          <path className="leaf" d="M-5,140 Q-70,80 -80,40 Q-30,70 -5,140" fill="#2e4a1c" />
          <path className="leaf" d="M5,80 Q70,50 80,0 Q30,30 5,80" fill="#3d6122" />
          
          <g className="flower-head" filter="url(#softShadow)">
            <path className="receptacle" d="M-12,0 Q0,18 12,0 L6,-12 L-6,-12 Z" fill="#2e4a1c" />
            
            {/* Pétalos traseros (Erguidos) */}
            <path className="petal p-back" d="M0,0 C-40,-40 -70,-110 -25,-150 C10,-110 20,-40 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C40,-40 70,-110 25,-150 C-10,-110 -20,-40 0,0" fill="url(#petalGrad)" />
            <path className="petal p-back" d="M0,0 C-25,-50 -25,-120 0,-160 C25,-120 25,-50 0,0" fill="url(#petalGrad)" />
            
            {/* Pétalos frontales (Muy abiertos, forma de estrella) */}
            <path className="petal p-front" d="M0,0 C-60,-20 -110,-70 -70,-110 C-20,-70 10,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C60,-20 110,-70 70,-110 C20,-70 -10,-20 0,0" fill="url(#petalGrad)" />
            <path className="petal p-front" d="M0,0 C-45,-5 -90,-40 -50,-80 C0,-40 10,-5 0,0" fill="url(#petalGrad)" transform="rotate(180)" />
            
            <g className="flower-spots" fill="#4a0014" opacity="0.5">
              <circle cx="-25" cy="-40" r="2.5" /><circle cx="-45" cy="-60" r="3" />
              <circle cx="25" cy="-45" r="2.5" /><circle cx="45" cy="-65" r="3" />
              <circle cx="-55" cy="-90" r="2" /><circle cx="55" cy="-95" r="2" />
              <circle cx="-15" cy="-80" r="3" /><circle cx="25" cy="-85" r="2.5" />
              <circle cx="0" cy="-100" r="2" /><circle cx="-60" cy="-110" r="2" />
              <circle cx="60" cy="-115" r="2" />
            </g>

            <g className="flower-center">
              <path d="M0,0 Q8,-30 0,-70" stroke="#90ee90" strokeWidth="4" fill="none" strokeLinecap="round" />
              <circle cx="0" cy="-70" r="5" fill="#90ee90" />
              
              {/* Estambres grandes y abiertos */}
              {[-45, -20, 20, 45, -65, 65].map((angle, i) => (
                <g key={i} transform={`rotate(${angle})`}>
                  <path d="M0,0 Q15,-35 20,-75" stroke="#ffe4e1" strokeWidth="3" fill="none" strokeLinecap="round" />
                  <ellipse cx="20" cy="-75" rx="4" ry="10" fill="#d97a24" transform="rotate(15 20 -75)" />
                </g>
              ))}
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
