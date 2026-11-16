"use client";

interface LilyProps {
  /** Clase de posición (lily-left | lily-right | lily-center), usada por las animaciones de viento */
  positionClass: string;
  /** Transform inicial del grupo (debe coincidir con los keyframes del CSS) */
  transform: string;
  /** Path del tallo */
  stemPath: string;
  stemWidth: number;
  /** Paths de las hojas con su color */
  leaves: ReadonlyArray<{ d: string; fill: string }>;
  /** Escala de la cabeza de la flor */
  headScale: number;
  /** Rotación base de la flor para variar cada lirio */
  headRotation: number;
}

const OUTER_PETAL = "M0,0 C-26,-28 -36,-74 0,-112 C36,-74 26,-28 0,0 Z";
const INNER_PETAL = "M0,0 C-30,-26 -40,-68 0,-100 C40,-68 30,-26 0,0 Z";

/** Ángulos de los 6 estambres (intercalados con los pétalos) */
const STAMEN_ANGLES: readonly number[] = [20, 80, 140, 200, 260, 320];

/** Posiciones de las manchas oscuras en la base de cada pétalo */
const SPOTS: ReadonlyArray<{ x: number; y: number }> = [
  { x: -6, y: -34 },
  { x: 7, y: -42 },
  { x: -3, y: -52 },
  { x: 6, y: -60 },
];

function Lily({
  positionClass,
  transform,
  stemPath,
  stemWidth,
  leaves,
  headScale,
  headRotation,
}: LilyProps) {
  return (
    <g className={`lily ${positionClass}`} transform={transform}>
      <path
        className="stem"
        d={stemPath}
        stroke="url(#stemGrad)"
        strokeWidth={stemWidth}
        fill="none"
        strokeLinecap="round"
      />
      {leaves.map((leaf, i) => (
        <path key={`leaf-${i}`} className="leaf" d={leaf.d} fill={leaf.fill} />
      ))}

      <g
        className="flower-head"
        transform={`rotate(${headRotation}) scale(${headScale})`}
      >
        {/* 3 pétalos exteriores */}
        {[0, 1, 2].map((i) => (
          <g key={`back-${i}`} transform={`rotate(${i * 120})`}>
            <path className="petal p-back" d={OUTER_PETAL} fill="url(#petalGrad)" />
            <g className="flower-spots" fill="#8e1b4a">
              {SPOTS.map((s, j) => (
                <circle key={j} cx={s.x} cy={s.y} r={1.8} />
              ))}
            </g>
          </g>
        ))}
        {/* 3 pétalos interiores (intercalados) */}
        {[0, 1, 2].map((i) => (
          <g key={`front-${i}`} transform={`rotate(${i * 120 + 60})`}>
            <path
              className="petal p-front"
              d={INNER_PETAL}
              fill="url(#petalInnerGrad)"
            />
            <g className="flower-spots" fill="#8e1b4a">
              {SPOTS.map((s, j) => (
                <circle key={j} cx={s.x} cy={s.y} r={1.8} />
              ))}
            </g>
          </g>
        ))}

        {/* Centro: garganta verde, estambres con polen naranja y pistilo */}
        <g className="flower-center">
          <circle cx="0" cy="0" r="9" fill="url(#centerGrad)" />
          {STAMEN_ANGLES.map((angle) => (
            <g key={angle} transform={`rotate(${angle})`}>
              <path
                d="M0,0 Q4,-22 2,-46"
                stroke="#9bb35a"
                strokeWidth="1.6"
                fill="none"
                strokeLinecap="round"
              />
              <ellipse
                cx="2"
                cy="-48"
                rx="3.2"
                ry="8"
                fill="url(#antherGrad)"
                transform="rotate(8 2 -48)"
              />
            </g>
          ))}
          {/* Pistilo central */}
          <path
            d="M0,0 Q-3,-26 -1,-54"
            stroke="#6f9a3a"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="-1" cy="-55" r="3.4" fill="#8fbf4a" />
        </g>
      </g>
    </g>
  );
}

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
          {/* Sombra suave para dar profundidad a los lirios */}
          <filter id="lily-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="6"
              floodColor="#2a2023"
              floodOpacity="0.35"
            />
          </filter>

          <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e3310" />
            <stop offset="50%" stopColor="#3d6122" />
            <stop offset="100%" stopColor="#1e3310" />
          </linearGradient>

          {/* Pétalos exteriores: garganta rosa pálido hacia puntas fucsia profundo */}
          <radialGradient
            id="petalGrad"
            gradientUnits="userSpaceOnUse"
            cx="0"
            cy="0"
            r="112"
          >
            <stop offset="0%" stopColor="#fde3ee" />
            <stop offset="30%" stopColor="#f58bb9" />
            <stop offset="70%" stopColor="#d81b7a" />
            <stop offset="100%" stopColor="#a1125b" />
          </radialGradient>

          {/* Pétalos interiores: un tono más luminoso */}
          <radialGradient
            id="petalInnerGrad"
            gradientUnits="userSpaceOnUse"
            cx="0"
            cy="0"
            r="100"
          >
            <stop offset="0%" stopColor="#fff0f6" />
            <stop offset="30%" stopColor="#f9a0c6" />
            <stop offset="70%" stopColor="#e63a8f" />
            <stop offset="100%" stopColor="#b8176a" />
          </radialGradient>

          {/* Versión dorada para la estación "Eterna" */}
          <radialGradient
            id="petalGold"
            gradientUnits="userSpaceOnUse"
            cx="0"
            cy="0"
            r="112"
          >
            <stop offset="0%" stopColor="#fff4d6" />
            <stop offset="50%" stopColor="#e6c987" />
            <stop offset="100%" stopColor="#c9a86a" />
          </radialGradient>

          {/* Centro verde del lirio */}
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#b5d86a" />
            <stop offset="70%" stopColor="#6f9a3a" />
            <stop offset="100%" stopColor="#3d6122" />
          </radialGradient>

          {/* Polen naranja de las anteras */}
          <radialGradient id="antherGrad" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffb347" />
            <stop offset="100%" stopColor="#e65100" />
          </radialGradient>
        </defs>

        <g filter="url(#lily-shadow)">
          {/* LIRIO IZQUIERDO */}
          <Lily
            positionClass="lily-left"
            transform="translate(140, 280) scale(0.7) rotate(-15)"
            stemPath="M0,220 Q-10,50 0,0"
            stemWidth={8}
            leaves={[{ d: "M-5,80 Q-60,50 -70,10 Q-30,30 -5,80", fill: "#2e4a1c" }]}
            headScale={0.9}
            headRotation={20}
          />

          {/* LIRIO DERECHO */}
          <Lily
            positionClass="lily-right"
            transform="translate(360, 260) scale(0.8) rotate(12)"
            stemPath="M0,240 Q15,50 0,0"
            stemWidth={8}
            leaves={[{ d: "M5,90 Q60,60 70,20 Q30,40 5,90", fill: "#3d6122" }]}
            headScale={0.95}
            headRotation={-10}
          />

          {/* LIRIO CENTRAL */}
          <Lily
            positionClass="lily-center"
            transform="translate(250, 220)"
            stemPath="M0,300 Q-10,50 0,0"
            stemWidth={10}
            leaves={[
              { d: "M-5,140 Q-80,90 -90,40 Q-40,70 -5,140", fill: "#2e4a1c" },
              { d: "M5,80 Q80,50 90,0 Q40,30 5,80", fill: "#3d6122" },
            ]}
            headScale={1.25}
            headRotation={0}
          />
        </g>
      </svg>
    </div>
  );
}
