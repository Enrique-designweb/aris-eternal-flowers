# 🌸 PROYECTO: Ari's Eternal Flowers

## 🎯 Visión General
Ari's Eternal Flowers es un E-commerce de lujo y artesanal especializado en ramos de flores eternas, arbolitos navideños y decoraciones hechas a mano. El sitio está diseñado para ser **rápido, elegante y mobile-first**, con conversión directa a WhatsApp (el canal principal de ventas).
El objetivo actual es llevar el sitio a un **nivel "Wow", altamente interactivo, fluido y premium**.

## 💻 Stack Tecnológico Actual y Nuevo
- **Framework:** Next.js 16 (App Router + Turbopack)
- **Lenguaje:** TypeScript (estricto)
- **Estilos:** Tailwind CSS 4 + CSS custom properties
- **Iconos:** Lucide React
- **Animaciones actuales:** GSAP + ScrollTrigger (se irán reemplazando por Framer Motion)
- **Nuevas Librerías a integrar:** Framer Motion (UI), Lenis (Smooth Scroll), Uploadthing (subida de imágenes), React Three Fiber + Drei (modelos 3D).
- **Deploy:** Vercel

## 📂 Estructura del Proyecto
- `app/layout.tsx`: Metadata, fuentes, Analytics.
- `app/page.tsx`: Landing principal (Hero, categorías, ofertas, galería, sobre Ari, etc.).
- `app/globals.css`: Design tokens y estilos globales.
- `components/customizer.tsx`: Formulario personalizado multipaso.
- `components/cinematic-banner.tsx`: Banner animado (lirios).
- `components/dynamic-whatsapp.tsx`: Botón flotante.
- `public/galeria/`: Fotos reales de las creaciones.
- `public/models/`: (NUEVO) Aquí se guardarán los modelos `.glb` de Meshy.

## 📦 Catálogo de Productos y Lógica de Negocio
- **Arbolitos de Navidad (Variantes):**
  - 30cm: 4500 CUP
  - 40cm: 5000 CUP
  - 50cm: 5500 CUP
  - 60cm: 6000 CUP
  *Nota: La conversión a USD se gestiona 100% por WhatsApp, NO debe haber un conversor en el sitio.*
- **Formulario de Personalización:** El cliente sube una imagen de referencia. Esta DEBE subirse a Uploadthing. El mensaje de WhatsApp debe incluir el enlace público de la imagen (ej: `https://utfs.io/...`), ya que WhatsApp no permite adjuntar archivos vía URL.
- **Prohibido n8n:** No se usará n8n para el flujo de ventas. La conversión será directa con `wa.me`.

## 🚫 REGLAS ESTRICTAS (PROHIBIDO ROMPER)
1. **NO BORRAR CÓDIGO FUNCIONAL:** Refactoriza, mejora o envuelve. Nunca borres la lógica de negocio (envío a WhatsApp, pasarela de personalización) sin reemplazarla por algo superior.
2. **TRABAJAR POR FASES:** No escribas código de fases futuras hasta que el usuario te lo indique explícitamente. Detente al final de cada fase y espera confirmación.
3. **TIPADO ESTRICTO:** No uses `any`. Define interfaces y tipos para todo.
4. **MOBILE-FIRST:** Todo debe verse perfecto en móvil primero.
5. **EXPLICA ANTES DE ACTUAR:** Antes de modificar un archivo, di brevemente qué vas a hacer y por qué.

## 🎨 Guía de Diseño y UI/UX ("Wow")
- **Paleta:** Borgoña (`#6d1f3a`), Vino (`#a34a63`), Dorado (`#c9a86a`), Crema (`#f5ede0`), Tinta (`#2a2023`).
- **Tipografía:** Títulos con "Cormorant Garamond" (elegante, serif) y cuerpo con "DM Sans" (limpio).
- **Efectos Visuales:** Glassmorphism (cristal), botones magnéticos, transiciones suaves, sombras profundas.
- **Modelos 3D:** Se usarán modelos `.glb` generados en Meshy para la galería interactiva. Debes crear el visor con React Three Fiber (OrbitControls, rotación automática, zoom).

## 🗺️ PLAN DE FASES
- **FASE 1:** Instalación de Lenis, Framer Motion, Uploadthing, R3F. Configuración de Smooth Scroll.
- **FASE 2:** Integración de Uploadthing en el formulario para enviar la URL de la imagen a WhatsApp.
- **FASE 3:** Rediseño visual (Glassmorphism, botones magnéticos, jerarquía tipográfica).
- **FASE 4:** Catálogo dinámico (Arbolitos con variantes de tamaño/precio, nuevos ramos).
- **FASE 5:** Galería 3D interactiva con React Three Fiber.
- **FASE 6:** Pruebas finales, Lint y Deploy.
