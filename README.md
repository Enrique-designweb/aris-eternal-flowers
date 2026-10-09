# 🌸 Ari's Eternal Flowers

Sitio web y tienda online de ramos de flores eternas hechos a mano. Un proyecto artesanal con foco en la experiencia móvil y la conversión directa a WhatsApp.

🔗 **Sitio en producción:** [aris-eternal-flowers.vercel.app](https://aris-eternal-flowers.vercel.app)

---

## ✨ Sobre el proyecto

Tienda digital para **Ari's Eternal Flowers**, negocio de ramos y creaciones florales hechas a mano con materiales de alta durabilidad: rosas eternas, girasoles tejidos, tulipanes, lámparas florales, arbolitos navideños en limpiapipas y ramos temáticos personalizados.

El sitio está diseñado para ser rápido, elegante y mobile-first, con **conversión directa a WhatsApp** — el canal por donde llegan la mayoría de los clientes.

---

## 🎨 Características

- 🌸 **Hero minimalista** con pétalos cayendo de fondo
- 🎨 **Pétalos cayendo** globales (respetando `prefers-reduced-motion`)
- 💐 **Formulario personalizado** multi-paso con GSAP (tipo de flor, colores, tamaño, ocasión, referencia, dedicatoria)
- 📱 **PWA instalable** en Android y iOS
- 🖼️ **Galería masonry** con fotos reales de las creaciones
- 🔥 **9 ofertas** con CTA a WhatsApp prellenado por producto
- ❓ **FAQ** con `<details>` nativo (sin JavaScript)
- 📞 **Contacto multi-canal**: WhatsApp, SMS, Email, Facebook, Instagram
- 🎬 **Animaciones GSAP + ScrollTrigger** en todas las secciones
- ♿ **Accesible**: respeta `prefers-reduced-motion`, aria labels, foco visible
- 🔍 **SEO completo**: metadata, Open Graph, Twitter Cards, sitemap, robots
- 📊 **Vercel Analytics** para métricas de visitas

---

## 🛠️ Stack

- **Framework:** Next.js 16 (App Router + Turbopack)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS 4 + CSS custom properties
- **Animaciones:** GSAP + ScrollTrigger
- **Iconos:** Lucide React
- **Tipografías:** Cormorant Garamond (display) + DM Sans (body) vía `next/font`
- **Analytics:** Vercel Analytics
- **Deploy:** Vercel

---

## 📁 Estructura

aris-eternal-flowers/
├── app/
│ ├── layout.tsx # Metadata, fuentes, Analytics
│ ├── page.tsx # Landing principal
│ ├── globals.css # Design tokens + estilos
│ ├── robots.ts # Genera /robots.txt
│ └── sitemap.ts # Genera /sitemap.xml
├── components/
│ ├── customizer.tsx # Formulario personalizado multi-paso
│ └── scroll-effects.tsx # Animaciones GSAP de scroll
├── public/
│ ├── galeria/ # 15 fotos de las creaciones
│ ├── manifest.json # PWA
│ └── og-image.jpg # Imagen para compartir
└── package.json

🚀 Cómo ejecutar en local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Lint
npm run lint

# Build de producción
npm run build
Abre http://localhost:3000.

.

📞 Contacto
🌐 Sitio: aris-eternal-flowers.vercel.app

💬 WhatsApp: +53 5 5693604

📷 Instagram: @ari_eternalflowers

📘 Facebook: Ari's Eternal Flowers

✉️ Email: ariadnapazgonzalez@gmail.com

💐 Sobre Ari's Eternal Flowers
Ramos y creaciones florales hechos a mano con materiales de alta durabilidad. Cada pieza se elabora de forma artesanal y única, pensada para regalar y conservar durante años.

Flores que permanecen. Momentos que perduran.

© 2026 Ari's Eternal Flowers. Todos los derechos reservados.


