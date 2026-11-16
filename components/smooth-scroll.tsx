"use client";

import { ReactLenis } from "lenis/react";
import type { LenisOptions } from "lenis";
import type { ReactNode } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

const lenisOptions: LenisOptions = {
  lerp: 0.1,
  smoothWheel: true,
  // Toques nativos en móvil (más fiable que simularlos)
  syncTouch: false,
  // Los enlaces #ancla (barra de navegación inferior) se animan con Lenis
  anchors: true,
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={lenisOptions}>
      {children}
    </ReactLenis>
  );
}
