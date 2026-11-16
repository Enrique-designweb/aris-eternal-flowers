"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface MotionOfferCardProps {
  children: ReactNode;
  index: number;
}

/**
 * Envoltorio con animación de entrada (una sola vez) para `.offer-card`.
 * Además la tarjeta "flota" sutilmente: al hover en PC y mientras se toca en móvil.
 */
export function MotionOfferCard({ children, index }: MotionOfferCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="offer-motion"
      initial={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        // Escalonado corto, para que en una grilla de 1 columna no se acumule
        delay: Math.min(index % 3, 2) * 0.06,
      }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <motion.div
        className="offer-float"
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        whileHover={reduceMotion ? undefined : { y: -10 }}
        whileTap={reduceMotion ? undefined : { y: -6, scale: 1.01 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

interface TapLinkProps {
  children: ReactNode;
  className?: string;
  href: string;
}

/** Enlace externo (WhatsApp) con feedback táctil al presionar. */
export function TapLink({ children, className, href }: TapLinkProps) {
  return (
    <motion.a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}
