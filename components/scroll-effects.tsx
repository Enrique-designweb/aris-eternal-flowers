"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* =========================================
   SCROLL EFFECTS
   Todas las animaciones de scroll del sitio.
   Se monta una sola vez desde app/page.tsx.
   ========================================= */

export function ScrollEffects() {
  useEffect(() => {
    // Respetar preferencias de accesibilidad
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    // Registrar el plugin (una sola vez)
    gsap.registerPlugin(ScrollTrigger);

    // Contexto para cleanup automático
    const ctx = gsap.context(() => {
      /* -----------------------------------------
         HERO — Parallax de la flor
         ----------------------------------------- */
      const flower = document.querySelector(".flower-stage");
      const heroCopy = document.querySelector(".hero-copy");
      const heroActions = document.querySelector(".hero-actions");

      if (flower) {
        gsap.to(flower, {
          yPercent: 22,
          scale: 0.94,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (heroCopy) {
        gsap.to(heroCopy, {
          yPercent: -18,
          opacity: 0.6,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      if (heroActions) {
        gsap.to(heroActions, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      /* -----------------------------------------
         SECCIONES — Reveal general
         Cada .section-heading aparece con fade + slide
         ----------------------------------------- */
      gsap.utils.toArray<HTMLElement>(".section-heading").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      /* -----------------------------------------
         CATEGORÍAS — Stagger de cards
         ----------------------------------------- */
      const categories = gsap.utils.toArray<HTMLElement>(".category-card");
      if (categories.length) {
        gsap.from(categories, {
          opacity: 0,
          y: 60,
          scale: 0.94,
          duration: 0.85,
          ease: "power3.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: ".category-grid",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* -----------------------------------------
         STORY — Reveal palabra por palabra
         ----------------------------------------- */
      const storyQuote = document.querySelector(".story-quote");
      if (storyQuote) {
        gsap.from(storyQuote, {
          opacity: 0,
          y: 50,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".story",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      const storyDivider = document.querySelector(".story-divider");
      if (storyDivider) {
        gsap.from(storyDivider, {
          scaleX: 0,
          duration: 1,
          ease: "power3.inOut",
          delay: 0.35,
          scrollTrigger: {
            trigger: ".story",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      const storyText = document.querySelector(".story-text");
      if (storyText) {
        gsap.from(storyText, {
          opacity: 0,
          y: 30,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.55,
          scrollTrigger: {
            trigger: ".story",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* -----------------------------------------
         OFERTAS — Stagger con rotate
         ----------------------------------------- */
      const offers = gsap.utils.toArray<HTMLElement>(".offer-card");
      if (offers.length) {
        gsap.from(offers, {
          opacity: 0,
          y: 70,
          rotate: -2,
          duration: 1,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: {
            trigger: ".offers-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* -----------------------------------------
         GALERÍA — Reveal con escala
         ----------------------------------------- */
      const gallery = gsap.utils.toArray<HTMLElement>(".gallery-item");
      if (gallery.length) {
        gsap.from(gallery, {
          opacity: 0,
          scale: 0.85,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* -----------------------------------------
         PERSONALIZAR — Botón con glow
         ----------------------------------------- */
      const personalizeBtn = document.querySelector(
        "#personalizar .button-primary",
      );
      if (personalizeBtn) {
        gsap.from(personalizeBtn, {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: "#personalizar",
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(personalizeBtn, {
          boxShadow: "0 22px 45px rgba(109, 31, 58, 0.4)",
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.8,
        });
      }

      /* -----------------------------------------
         FAQ — Entrada alternada
         ----------------------------------------- */
      const faqItems = gsap.utils.toArray<HTMLElement>(".faq-item");
      if (faqItems.length) {
        gsap.from(faqItems, {
          opacity: 0,
          x: -40,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".faq-list",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* -----------------------------------------
         CONTACTO — Cascada de cards
         ----------------------------------------- */
      const contactCards = gsap.utils.toArray<HTMLElement>(".contact-card");
      if (contactCards.length) {
        gsap.from(contactCards, {
          opacity: 0,
          y: 40,
          scale: 0.92,
          duration: 0.75,
          ease: "back.out(1.3)",
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".contact-grid",
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      }

      /* -----------------------------------------
         FOOTER — Brand mark con rotate
         ----------------------------------------- */
      const footerMark = document.querySelector(".footer .brand-mark");
      if (footerMark) {
        gsap.from(footerMark, {
          rotate: -180,
          scale: 0,
          opacity: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".footer",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    // Cleanup: matar animaciones al desmontar
    return () => {
      ctx.revert();
    };
  }, []);

  return null;
}
