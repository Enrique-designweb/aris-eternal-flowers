import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Mail,
  MessageCircle,
  Send,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { CustomizerButton } from "../components/customizer";
import { ScrollEffects } from "../components/scroll-effects";

/* =========================================
   MARCA
   ========================================= */

const BRAND = {
  name: "Ari's Eternal Flowers",
  whatsapp: "5355693604",
  whatsappText:
    "Hola Ari's Eternal Flowers 🌸 Me gustaría más información sobre sus ramos eternos.",
  email: "ariadnapazgonzalez@gmail.com",
  sms: "+5355693604",
  facebook: "https://www.facebook.com/profile.php?id=61592515977726",
  instagram: "https://www.instagram.com/ari_eternalflowers",
};

const whatsappUrl = (text = BRAND.whatsappText) =>
  `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(text)}`;

/* =========================================
   ICONOS DE MARCA
   ========================================= */

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width={size}
    >
      <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/* =========================================
   PÉTALOS CAYENDO
   ========================================= */

const PETALS = [
  { left: "4%", delay: "0s", duration: "14s", size: 14 },
  { left: "11%", delay: "3.5s", duration: "17s", size: 10 },
  { left: "18%", delay: "7s", duration: "13s", size: 16 },
  { left: "26%", delay: "1.5s", duration: "16s", size: 12 },
  { left: "33%", delay: "9s", duration: "18s", size: 15 },
  { left: "40%", delay: "5s", duration: "15s", size: 11 },
  { left: "48%", delay: "11s", duration: "19s", size: 13 },
  { left: "55%", delay: "2s", duration: "14s", size: 14 },
  { left: "62%", delay: "8s", duration: "17s", size: 10 },
  { left: "70%", delay: "4s", duration: "15s", size: 16 },
  { left: "77%", delay: "10s", duration: "18s", size: 12 },
  { left: "84%", delay: "6s", duration: "16s", size: 13 },
  { left: "90%", delay: "12s", duration: "14s", size: 11 },
  { left: "96%", delay: "0.5s", duration: "17s", size: 15 },
];

function PetalsBackground() {
  return (
    <div aria-hidden="true" className="petals-bg">
      {PETALS.map((petal, i) => (
        <span
          className="petal-fall"
          key={i}
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDelay: petal.delay,
            animationDuration: petal.duration,
          }}
        />
      ))}
    </div>
  );
}

/* =========================================
   DATA
   ========================================= */

const categories = [
  {
    image: "/galeria/roses-fuchsia-butterfly.jpg",
    alt: "Rosas eternas hechas a mano",
    icon: "🌹",
    name: "Rosas",
    slug: "rosas",
  },
  {
    image: "/galeria/sunflowers-limpiapipas.jpg",
    alt: "Girasoles tejidos a mano en limpiapipas",
    icon: "🌻",
    name: "Girasoles",
    slug: "girasoles",
  },
  {
    image: "/galeria/lily-pink-limpiapipas.jpg",
    alt: "Tulipanes y lirios tejidos a mano",
    icon: "🌷",
    name: "Tulipanes",
    slug: "tulipanes",
  },
  {
    image: "/galeria/lamp-lotus-blue-1.jpg",
    alt: "Lámpara floral con forma de loto",
    icon: "💡",
    name: "Lámparas",
    slug: "lamparas",
  },
  {
    image: "/galeria/christmas-tree-limpiapipas.jpg",
    alt: "Árbol de Navidad tejido a mano",
    icon: "🎄",
    name: "Navidad",
    slug: "navidad",
  },
  {
    image: "/galeria/harry-potter.jpg",
    alt: "Ramo temático personalizado",
    icon: "💝",
    name: "Personalizados",
    slug: "personalizados",
  },
];

const offers = [
  {
    image: "/galeria/roses-fuchsia-butterfly.jpg",
    badge: "Top ventas",
    name: "Romantic Pack",
    desc: "Ramo de rosas fucsia con mariposa metálica dorada y corona de perlas. Un detalle romántico y elegante para sorprender a esa persona especial.",
    priceNow: "$7,000",
    priceWas: "$10,000",
    waMessage:
      "Hola 🌹 Me interesa el Romantic Pack (rosas fucsia con mariposa y corona). ¿Está disponible?",
  },
  {
    image: "/galeria/sunflowers-limpiapipas.jpg",
    badge: "Favorito",
    name: "Sunshine Pack",
    desc: "Ramo de girasoles tejidos a mano en limpiapipas, con mariposa dorada y espigas blancas decorativas.",
    priceNow: "$4,000",
    priceWas: "$5,000",
    waMessage:
      "Hola 🌻 Me interesa el Sunshine Pack (girasoles tejidos). ¿Cuánto demora?",
  },
  {
    image: "/galeria/lamp-lotus-blue-1.jpg",
    badge: "Nuevo",
    name: "Flower Night",
    desc: "Lámpara flor de loto tejida a mano con luz LED cálida. Ilumina y decora tu espacio con un toque artesanal.",
    priceNow: "$1,500",
    priceWas: "$3,000",
    waMessage:
      "Hola 💡 Me interesa la lámpara Flower Night (flor de loto). ¿Tienen más colores?",
  },
  {
    image: "/galeria/roses-purple-butterfly.jpg",
    badge: "Nuevo",
    name: "Lavender Dreams",
    desc: "Ramo de rosas violeta claro con mariposas decorativas. Un detalle delicado y femenino, perfecto para sorprender.",
    priceNow: "$4,000",
    priceWas: "",
    waMessage:
      "Hola 💜 Me interesa el ramo Lavender Dreams (rosas violeta con mariposas). ¿Está disponible?",
  },
  {
    image: "/galeria/roses-lime-crown.jpg",
    badge: "Nuevo",
    name: "Lime Queen",
    desc: "Ramo de rosas verde limón con mariposa y corona dorada. Un color vibrante y moderno que no pasa desapercibido.",
    priceNow: "$4,000",
    priceWas: "",
    waMessage:
      "Hola 💚 Me interesa el ramo Lime Queen (rosas verde limón con corona dorada). ¿Está disponible?",
  },
  {
    image: "/galeria/roses-orange-butterfly.jpg",
    badge: "Promo",
    name: "Sunset Butterfly",
    desc: "Ramo de rosas naranjas con mariposa dorada calada. Un detalle cálido y elegante para sorprender.",
    priceNow: "$5,000",
    priceWas: "$6,500",
    waMessage:
      "Hola 🧡 Me interesa el ramo Sunset Butterfly (rosas naranjas con mariposa dorada). ¿Está disponible?",
  },
  {
    image: "/galeria/roses-blue-crown.jpg",
    badge: "Premium",
    name: "Blue Royale",
    desc: "Ramo de rosas azules con mariposas y corona plateada. Elegancia y distinción en cada detalle.",
    priceNow: "$7,000",
    priceWas: "$9,500",
    waMessage:
      "Hola 💙 Me interesa el ramo Blue Royale (rosas azules con corona plateada). ¿Está disponible?",
  },
  {
    image: "/galeria/roses-white-crown.jpg",
    badge: "Especial",
    name: "White Love",
    desc: "Ramo de rosas blancas con papel Love personalizado, corona dorada y mariposa calada. Romántico y delicado.",
    priceNow: "$7,000",
    priceWas: "$8,500",
    waMessage:
      "Hola 🤍 Me interesa el ramo White Love (rosas blancas con papel Love). ¿Está disponible?",
  },
  {
    image: "/galeria/roses-yellow-butterfly.jpg",
    badge: "Edición limitada",
    name: "Golden Sunrise",
    desc: "Ramo de rosas amarillas con espigas blancas y mariposas doradas. Un regalo luminoso y lleno de energía.",
    priceNow: "$8,000",
    priceWas: "",
    waMessage:
      "Hola 💛 Me interesa el ramo Golden Sunrise (rosas amarillas con espigas blancas). ¿Está disponible?",
  },
  {
    image: "/galeria/roses-yellow-sunflower.jpg",
    badge: "Destacado",
    name: "Sunflower Glow",
    desc: "Ramo de rosas amarillas con centro de girasol tejido a mano. Un contraste luminoso y original que combina lo mejor de dos mundos.",
    priceNow: "$7,000",
    priceWas: "$8,500",
    waMessage:
      "Hola 🌻 Me interesa el ramo Sunflower Glow (rosas amarillas con girasol). ¿Está disponible?",
  },
  {
    image: "/galeria/roses-red-passion.jpg",
    badge: "Premium",
    name: "Red Passion",
    desc: "Ramo de rosas rojas intensas con mariposa calada dorada y corona de perlas. Un clásico romántico que nunca falla.",
    priceNow: "$8,000",
    priceWas: "",
    waMessage:
      "Hola ❤️ Me interesa el ramo Red Passion (rosas rojas con mariposa y corona). ¿Está disponible?",
  },
  {
    image: "/galeria/roses-coral-butterfly.jpg",
    badge: "Nuevo",
    name: "Coral Aurora",
    desc: "Ramo de rosas coral con mariposas doradas y corona decorativa. Un color cálido y sofisticado.",
    priceNow: "$6,500",
    priceWas: "$7,500",
    waMessage:
      "Hola 🌸 Me interesa el ramo Coral Aurora (rosas coral con mariposas). ¿Está disponible?",
  },
  {
    image: "/galeria/roses-yellow-foami-50.jpg",
    badge: "Edición limitada",
    name: "Yellow Fifty",
    desc: "Ramo XL de 50 rosas amarillas hechas a mano en foami, con mariposas y corona decorativa. Nuestra pieza más imponente.",
    priceNow: "$10,000",
    priceWas: "",
    waMessage:
      "Hola 💛 Me interesa el ramo Yellow Fifty (50 rosas amarillas de foami). ¿Está disponible?",
  },
  {
    image: "/galeria/lily-pink-limpiapipas.jpg",
    badge: "Económico",
    name: "Pink Lily",
    desc: "Ramo de tulipanes rosados tejidos a mano en limpiapipas. Delicado, duradero y perfecto para cualquier ocasión.",
    priceNow: "$2,500",
    priceWas: "$3,500",
    waMessage:
      "Hola 🌷 Me interesa el ramo Pink Lily (tulipanes rosados). ¿Está disponible?",
  },
];

const galleryItems = [
  {
    src: "/galeria/roses-fuchsia-butterfly.jpg",
    caption: "Ramo Rosé",
    alt: "Ramo de rosas fucsia con mariposas metálicas y corona dorada",
    cls: "tall",
  },
  {
    src: "/galeria/roses-red-passion.jpg",
    caption: "Red Passion",
    alt: "Ramo de rosas rojas con mariposa dorada y corona de perlas",
    cls: "",
  },
  {
    src: "/galeria/roses-purple-butterfly.jpg",
    caption: "Lavender Dreams",
    alt: "Ramo de rosas violeta con mariposas decorativas",
    cls: "",
  },
  {
    src: "/galeria/roses-blue-crown.jpg",
    caption: "Blue Royale",
    alt: "Ramo de rosas azules con corona plateada",
    cls: "",
  },
  {
    src: "/galeria/roses-white-crown.jpg",
    caption: "White Queen",
    alt: "Ramo de rosas blancas con corona dorada y mariposa",
    cls: "tall",
  },
  {
    src: "/galeria/roses-orange-butterfly.jpg",
    caption: "Sunset Butterfly",
    alt: "Ramo de rosas naranjas con mariposa dorada",
    cls: "",
  },
  {
    src: "/galeria/roses-yellow-butterfly.jpg",
    caption: "Golden Sunrise",
    alt: "Ramo de rosas amarillas con espigas blancas y mariposas",
    cls: "",
  },
  {
    src: "/galeria/roses-yellow-sunflower.jpg",
    caption: "Sunflower Glow",
    alt: "Ramo de rosas amarillas con centro de girasol",
    cls: "tall",
  },
  {
    src: "/galeria/roses-coral-butterfly.jpg",
    caption: "Coral Aurora",
    alt: "Ramo de rosas coral con mariposas doradas",
    cls: "",
  },
  {
    src: "/galeria/roses-lime-crown.jpg",
    caption: "Lime Queen",
    alt: "Ramo de rosas verde limón con corona dorada",
    cls: "",
  },
  {
    src: "/galeria/roses-yellow-foami-50.jpg",
    caption: "Yellow Fifty",
    alt: "Ramo XL de 50 rosas amarillas de foami",
    cls: "tall",
  },
  {
    src: "/galeria/sunflowers-limpiapipas.jpg",
    caption: "Sunny Day",
    alt: "Ramo de girasoles tejidos en limpiapipas",
    cls: "",
  },
  {
    src: "/galeria/lily-pink-limpiapipas.jpg",
    caption: "Pink Lily",
    alt: "Ramo de tulipanes rosados tejidos en limpiapipas",
    cls: "",
  },
  {
    src: "/galeria/lamp-lotus-blue-1.jpg",
    caption: "Lámpara Loto",
    alt: "Lámpara con forma de flor de loto azul",
    cls: "tall",
  },
  {
    src: "/galeria/lamp-lotus-blue-2.jpg",
    caption: "Lámpara Loto II",
    alt: "Variante de lámpara flor de loto",
    cls: "",
  },
  {
    src: "/galeria/harry-potter.jpg",
    caption: "Harry Potter",
    alt: "Ramo temático Harry Potter",
    cls: "",
  },
  {
    src: "/galeria/hotwheels-black.jpg",
    caption: "Hot Wheels",
    alt: "Ramo temático Hot Wheels",
    cls: "",
  },
  {
    src: "/galeria/christmas-tree-limpiapipas.jpg",
    caption: "Árbol Navideño",
    alt: "Árbol de Navidad tejido a mano",
    cls: "tall",
  },
];

const testimonials = [
  {
    name: "Lucia Medina",
    text: "Preciosos, me encantaron todos los detalles.",
  },
  {
    name: "Maritza Martínez Calderón",
    text: "Están muy lindas, felicitaciones por tan bello trabajo.",
  },
  {
    name: "Guillermo Hernández Rojo",
    text: "Es arte de una artista. Las manos de una artista.",
  },
  {
    name: "Aniole Gómez",
    text: "Todas las flores que haces me gustan. ¡Bellas!",
  },
  {
    name: "Enrique Hernández González",
    text: "Una obra de arte, sin duda alguna.",
  },
  {
    name: "Dayani Gómez Reyes",
    text: "Me fascina. ¡Guau! Cada vez me sorprendes más.",
  },
  {
    name: "Ileana González",
    text: "Hermoso trabajo, lindo y bello. Sigue así.",
  },
  {
    name: "Ramón González",
    text: "Felicidades por tu arte. Se nota el amor en cada pieza.",
  },
  {
    name: "Cliente verificada",
    text: "De veras una belleza de trabajo. Lo que han de crear tus manos de artista. Súper complacida con el resultado final. ¡Gracias miles!",
  },
];

const faqs = [
  {
    q: "¿Las flores realmente duran para siempre?",
    a: "Nuestras creaciones están elaboradas con materiales de alta durabilidad. Con cuidados básicos — evitar humedad directa y sol intenso — se conservan intactas durante años.",
  },
  {
    q: "¿Puedo solicitar un diseño personalizado?",
    a: "Sí. Puedes enviarnos una imagen de referencia (por ejemplo de Pinterest) y describir cómo imaginas tu ramo. Crearemos una propuesta única inspirada en tu idea. Mira nuestros ramos temáticos (Hot Wheels, Harry Potter) como ejemplo.",
  },
  {
    q: "¿Puedo elegir los colores?",
    a: "Por supuesto. Trabajamos con rojo, rosa, blanco, amarillo, azul, morado y combinaciones personalizadas. Cuéntanos la paleta que prefieras.",
  },
  {
    q: "¿Cuánto demora un pedido personalizado?",
    a: "Todos nuestros ramos se elaboran por encargo. Los pedidos personalizados toman entre 3 y 7 días hábiles dependiendo de la complejidad. Te confirmaremos el tiempo exacto al recibir tu solicitud.",
  },
  {
    q: "¿Hacen entregas?",
    a: "Sí, realizamos entregas locales y envíos a través de mensajería. Al confirmar tu pedido te indicaremos las zonas y costos disponibles.",
  },
  {
    q: "¿Cómo puedo pagar?",
    a: "Aceptamos transferencia bancaria y efectivo contra entrega en zonas habilitadas. Te compartimos los detalles al confirmar tu pedido.",
  },
];

/* =========================================
   HOME
   ========================================= */

export default function Home() {
  return (
    <>
      <PetalsBackground />

      <main>
        <ScrollEffects />

        {/* =====================================
            HERO
            ===================================== */}

        <section className="hero">
          <div className="container">
            <header className="hero-header">
              <Link aria-label={BRAND.name} className="brand" href="/">
                <div className="brand-mark">A</div>

                <div className="brand-name">
                  Ari&apos;s Eternal
                  <span>Flowers</span>
                </div>
              </Link>

              <nav
                aria-label="Navegación principal"
                className="hero-nav-desktop"
              >
                <a href="#coleccion">Colección</a>
                <a href="#galeria">Galería</a>
                <a href="#sobre-ari">Sobre Ari</a>
                <a href="#personalizar">Crear</a>
                <a href="#contacto">Contacto</a>
              </nav>
            </header>

            <div className="hero-content hero-content-minimal">
              <div className="hero-copy">
                <span className="eyebrow">
                  Hecho a mano · Hecho con amor
                </span>

                <h1 className="hero-title">
                  Flores que
                  <span>permanecen.</span>
                </h1>

                <p className="hero-description">
                  Ramos eternos y regalos personalizados creados
                  para convertir momentos especiales en recuerdos
                  que nunca se marchitan.
                </p>
              </div>

              <div className="hero-actions">
                <a className="button button-primary" href="#coleccion">
                  Ver colección
                  <ArrowRight size={18} />
                </a>

                <CustomizerButton variant="secondary">
                  Crear mi ramo
                  <Heart size={18} />
                </CustomizerButton>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
            CATEGORÍAS
            ===================================== */}

        <section className="section" id="coleccion">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Nuestra colección</span>

              <h2 className="section-title">
                Un regalo para
                <br />
                cada ocasión.
              </h2>

              <p className="section-lead">
                En Ari&apos;s Eternal Flowers creamos ramos eternos
                hechos a mano con materiales de alta durabilidad:
                rosas eternas, girasoles tejidos en limpiapipas,
                tulipanes, lámparas florales, arbolitos navideños y
                creaciones personalizadas. Cada pieza es única,
                pensada para regalar en cumpleaños, aniversarios,
                San Valentín, Día de las Madres o cualquier ocasión
                especial.
              </p>
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <a
                  className="category-card"
                  href="#galeria"
                  key={category.slug}
                >
                  <Image
                    alt={category.alt}
                    className="category-image"
                    fill
                    sizes="(max-width: 700px) 50vw, 33vw"
                    src={category.image}
                  />

                  <div className="category-content">
                    <div className="category-icon">{category.icon}</div>
                    <h3 className="category-name">{category.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            STORY
            ===================================== */}

        <section className="story">
          <div className="container">
            <div className="story-inner">
              <span className="story-eyebrow">
                Regala algo que permanezca
              </span>

              <h2 className="story-quote">
                Las flores tradicionales
                <br />
                desaparecen.
                <br />
                <em>Las historias no.</em>
              </h2>

              <div className="story-divider" />

              <p className="story-text">
                Creamos flores eternas hechas a mano para que ese
                momento especial pueda permanecer contigo mucho
                más tiempo. Cada ramo es único, como la persona
                que lo recibe.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================
            OFERTAS
            ===================================== */}

        <section className="section" id="ofertas">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Ofertas especiales</span>

              <h2 className="section-title">
                Ramos eternos
                <br />
                para sorprender.
              </h2>

              <p className="section-lead">
                Descubre nuestra selección de ramos eternos hechos a
                mano: rosas en todos los colores, girasoles tejidos,
                tulipanes artesanales y lámparas florales. Cada ramo
                incluye la posibilidad de personalizar colores,
                tamaño y dedicatoria. <strong>Todos se elaboran por
                encargo.</strong> Precios en pesos cubanos (CUP).
              </p>
            </div>

            <div className="offers-grid">
              {offers.map((offer) => (
                <article className="offer-card" key={offer.name}>
                  <span className="offer-badge">{offer.badge}</span>

                  <div className="offer-visual">
                    <Image
                      alt={offer.name}
                      className="offer-image"
                      fill
                      sizes="(max-width: 700px) 100vw, 380px"
                      src={offer.image}
                    />
                  </div>

                  <div className="offer-body">
                    <h3 className="offer-name">{offer.name}</h3>

                    <p className="offer-desc">{offer.desc}</p>

                    <div className="offer-price">
                      <span className="now">{offer.priceNow}</span>
                      {offer.priceWas && (
                        <span className="was">{offer.priceWas}</span>
                      )}
                    </div>

                    <a
                      className="button button-primary"
                      href={whatsappUrl(offer.waMessage)}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Comprar ahora
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            GALERÍA
            ===================================== */}

        <section className="section" id="galeria">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Galería</span>

              <h2 className="section-title">
                Creaciones
                <br />
                que hablan por sí solas.
              </h2>

              <p className="section-lead">
                Explora nuestra galería de creaciones reales: ramos
                de rosas eternas con mariposas metálicas y coronas
                de perlas, girasoles tejidos a mano en limpiapipas,
                lámparas florales con luz LED, ramos temáticos
                inspirados en Hot Wheels o Harry Potter, y arbolitos
                navideños artesanales. Cada ramo es único, como la
                persona que lo recibe.
              </p>
            </div>

            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <div
                  className={`gallery-item ${item.cls}`}
                  key={item.caption}
                >
                  <Image
                    alt={item.alt}
                    className="gallery-image"
                    fill
                    sizes="(max-width: 700px) 50vw, 25vw"
                    src={item.src}
                  />

                  <span className="caption">{item.caption}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            TESTIMONIOS
            ===================================== */}

        <section className="section testimonials-section" id="testimonios">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Lo que dicen</span>

              <h2 className="section-title">
                Clientes
                <br />
                que ya confiaron.
              </h2>

              <p className="section-lead">
                Reseñas reales de personas que ya recibieron sus
                ramos eternos hechos a mano.
              </p>
            </div>

            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <div className="testimonial-stars">★★★★★</div>

                  <p className="testimonial-text">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  <div>
                    <span className="testimonial-author">
                      {testimonial.name}
                    </span>
                    <span className="testimonial-role">
                      Cliente verificado
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            SOBRE ARI
            ===================================== */}

        <section className="section about-section" id="sobre-ari">
          <div className="container">
            <div className="about-inner">
              <div className="about-content">
                <span className="eyebrow">Sobre Ari</span>

                <h2 className="section-title">
                  Detrás de cada ramo
                  <br />
                  hay una artista.
                </h2>

                <p className="about-text">
                  Soy <strong>Ariadna</strong>, creadora
                  de Ari&apos;s Eternal Flowers desde Santa Clara,
                  Villa Clara, Cuba. Comencé este proyecto en junio
                  de este año, aunque la idea llevaba tiempo rondando
                  mi cabeza — desde niña me han encantado las
                  manualidades, la pintura y el dibujo. Tanto que
                  decidí formarme en la carrera de Educación
                  Artística, donde adquirí conocimientos y
                  experiencias sobre el arte que hoy aplico en cada
                  creación.
                </p>

                <p className="about-text">
                  Trabajo con foami, limpiapipas, cintas de satín,               mariposas metálicas y coronas decorativas. Me
                  inspira la naturaleza, el arte y las personas. Lo
                  que más me gusta es la emoción y la sorpresa en el
                  rostro de quien recibe un ramo — esa reacción es
                  la razón de todo lo que hago.
                </p>

                <p className="about-quote">
                  Cada ramo es hecho con amor.
                </p>

                <div className="about-highlights">
                  <div className="about-highlight">
                    <span className="about-highlight-icon">🎨</span>
                    <span className="about-highlight-label">
                      Educación Artística
                    </span>
                  </div>
                  <div className="about-highlight">
                    <span className="about-highlight-icon">🌸</span>
                    <span className="about-highlight-label">
                      100% Hecho a mano
                    </span>
                  </div>
                  <div className="about-highlight">
                    <span className="about-highlight-icon">📍</span>
                    <span className="about-highlight-label">
                      Santa Clara, Cuba
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
            PERSONALIZAR
            ===================================== */}

        <section className="section" id="personalizar">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                Hecho especialmente para ti
              </span>

              <h2 className="section-title">
                Tú imaginas.
                <br />
                Nosotros creamos.
              </h2>

              <p className="section-lead">
                Cuéntanos qué tienes en mente, elige colores, flores
                y detalles, y envíanos una imagen de referencia para
                crear un ramo único. Como nuestros ramos temáticos de
                Hot Wheels, Harry Potter o composiciones totalmente
                personalizadas.
              </p>
            </div>

            <div className="mt-6.5">
              <CustomizerButton variant="primary">
                <Sparkles size={18} />
                Personalizar mi ramo
              </CustomizerButton>
            </div>
          </div>
        </section>

        {/* =====================================
            FAQ
            ===================================== */}

        <section className="section" id="faq">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Preguntas frecuentes</span>

              <h2 className="section-title">
                Todo lo que
                <br />
                quieres saber.
              </h2>

              <p className="section-lead">
                Resolvemos las dudas más frecuentes sobre nuestras
                flores eternas: durabilidad, personalización, colores
                disponibles, tiempos de entrega, envíos locales y
                métodos de pago.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.q}>
                  <summary>{faq.q}</summary>

                  <p className="faq-answer">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            CONTACTO
            ===================================== */}

        <section className="contact-section" id="contacto">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">¿Tienes una idea?</span>

              <h2 className="section-title">Hablemos.</h2>

              <p className="section-lead">
                Escríbenos por WhatsApp, SMS, email o redes sociales.
                Te responderemos lo antes posible para ayudarte a
                crear el regalo perfecto, con atención personalizada
                y envío cuidado.
              </p>
            </div>

            <div className="contact-grid">
              <a
                className="contact-card"
                href={whatsappUrl()}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="contact-icon">
                  <MessageCircle size={22} />
                </span>
                <span className="contact-label">WhatsApp</span>
                <span className="contact-meta">Respuesta rápida</span>
              </a>

              <a className="contact-card" href={`sms:${BRAND.sms}`}>
                <span className="contact-icon">
                  <Send size={22} />
                </span>
                <span className="contact-label">SMS</span>
                <span className="contact-meta">Mensaje directo</span>
              </a>

              <a className="contact-card" href={`mailto:${BRAND.email}`}>
                <span className="contact-icon">
                  <Mail size={22} />
                </span>
                <span className="contact-label">Email</span>
                <span className="contact-meta">Gmail</span>
              </a>

              <a
                className="contact-card"
                href={BRAND.facebook}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="contact-icon">
                  <FacebookIcon size={22} />
                </span>
                <span className="contact-label">Facebook</span>
                <span className="contact-meta">Síguenos</span>
              </a>

              <a
                className="contact-card"
                href={BRAND.instagram}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="contact-icon">
                  <InstagramIcon size={22} />
                </span>
                <span className="contact-label">Instagram</span>
                <span className="contact-meta">@ari_eternalflowers</span>
              </a>
            </div>
          </div>
        </section>

        {/* =====================================
            FOOTER
            ===================================== */}

        <footer className="footer">
          <div className="container">
            <div className="brand-mark">A</div>

            <div className="footer-name">Ari&apos;s Eternal Flowers</div>

            <p className="footer-tagline">
              Flores que permanecen. Momentos que perduran.
            </p>

            <nav className="footer-links">
              <Link href="/">Inicio</Link>
              <a href="#coleccion">Colección</a>
              <a href="#ofertas">Ofertas</a>
              <a href="#galeria">Galería</a>
              <a href="#testimonios">Testimonios</a>
              <a href="#sobre-ari">Sobre Ari</a>
              <a href="#personalizar">Personalizados</a>
              <a href="#faq">FAQ</a>
              <a href="#contacto">Contacto</a>
            </nav>

            <div className="footer-divider" />

            <p className="footer-copy">
              © {new Date().getFullYear()} Ari&apos;s Eternal Flowers.
              Todos los derechos reservados.
            </p>
          </div>
        </footer>

        {/* =====================================
            WHATSAPP FLOAT
            ===================================== */}

        <a
          aria-label="Contactar por WhatsApp"
          className="whatsapp-float"
          href={whatsappUrl()}
          rel="noopener noreferrer"
          target="_blank"
        >
          <MessageCircle size={24} />
        </a>

        {/* =====================================
            MOBILE NAV
            ===================================== */}

        <nav aria-label="Navegación principal" className="mobile-nav">
          <Link className="mobile-nav-item active" href="/">
            <Heart size={20} />
            Inicio
          </Link>

          <a className="mobile-nav-item" href="#coleccion">
            <ShoppingBag size={20} />
            Tienda
          </a>

          <a className="mobile-nav-item" href="#personalizar">
            <Sparkles size={20} />
            Crear
          </a>

          <a className="mobile-nav-item" href="#contacto">
            <MessageCircle size={20} />
            Contacto
          </a>
        </nav>
      </main>
    </>
  );
}
