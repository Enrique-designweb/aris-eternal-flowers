import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Heart,
  Mail,
  Menu,
  MessageCircle,
  Send,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { CustomizerButton } from "../components/customizer";
import { ScrollEffects } from "../components/scroll-effects";

/* =========================================
   MARCA — Constantes reales
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
   ICONOS DE MARCA (SVG inline)
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
   DATA
   ========================================= */

const categories = [
  { icon: "🌹", name: "Rosas", slug: "rosas" },
  { icon: "🌻", name: "Girasoles", slug: "girasoles" },
  { icon: "🌷", name: "Tulipanes", slug: "tulipanes" },
  { icon: "💡", name: "Lámparas", slug: "lamparas" },
  { icon: "🎄", name: "Navidad", slug: "navidad" },
  { icon: "💝", name: "Personalizados", slug: "personalizados" },
];

const offers = [
  {
    image: "/galeria/roses-fuchsia-butterfly.jpg",
    badge: "Top ventas",
    name: "Romantic Pack",
    desc: "Ramo de rosas eternas con mariposa metálica y corona de perlas. Incluye tarjeta personalizada escrita a mano.",
    priceNow: "$7,000",
    priceWas: "$10,000",
    waMessage:
      "Hola 🌹 Me interesa el Romantic Pack (rosas eternas con mariposa y corona). ¿Está disponible?",
  },
  {
    image: "/galeria/sunflowers-limpiapipas.jpg",
    badge: "Favorito",
    name: "Sunshine Pack",
    desc: "Ramo de girasoles tejidos a mano en limpiapipas, con mariposa dorada y detalles florales.",
    priceNow: "$4,000",
    priceWas: "$5,000",
    waMessage:
      "Hola 🌻 Me interesa el Sunshine Pack (girasoles tejidos). ¿Cuánto demora?",
  },
  {
    image: "/galeria/lamp-lotus-blue-1.jpg",
    badge: "Nuevo",
    name: "Flower Night",
    desc: "Lámpara flor de loto tejida a mano con luz LED cálida. Ilumina y decora tu espacio.",
    priceNow: "$1,500",
    priceWas: "$3,000",
    waMessage:
      "Hola 💡 Me interesa la lámpara Flower Night (flor de loto). ¿Tienen más colores?",
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
    src: "/galeria/sunflowers-limpiapipas.jpg",
    caption: "Sunny Day",
    alt: "Ramo de girasoles tejidos a mano en limpiapipas con mariposa dorada",
    cls: "",
  },
  {
    src: "/galeria/roses-blue-crown.jpg",
    caption: "Blue Royale",
    alt: "Ramo de rosas azules con corona plateada",
    cls: "",
  },
  {
    src: "/galeria/lamp-lotus-blue-1.jpg",
    caption: "Lámpara Loto",
    alt: "Lámpara con forma de flor de loto azul tejida a mano",
    cls: "tall",
  },
  {
    src: "/galeria/harry-potter.jpg",
    caption: "Harry Potter",
    alt: "Ramo temático Harry Potter con rosas rojas y doradas",
    cls: "",
  },
  {
    src: "/galeria/roses-red-butterfly.jpg",
    caption: "Red Passion",
    alt: "Ramo de rosas rojas con mariposa dorada y corona de perlas",
    cls: "",
  },
  {
    src: "/galeria/christmas-tree-limpiapipas.jpg",
    caption: "Árbol Navideño",
    alt: "Árbol de Navidad tejido a mano en limpiapipas",
    cls: "tall",
  },
  {
    src: "/galeria/hotwheels-black.jpg",
    caption: "Hot Wheels",
    alt: "Ramo temático Hot Wheels con rosas azules y papel negro",
    cls: "",
  },
  {
    src: "/galeria/roses-white-crown.jpg",
    caption: "White Queen",
    alt: "Ramo de rosas blancas con corona dorada y mariposa",
    cls: "",
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
    a: "Los pedidos personalizados toman entre 3 y 7 días hábiles dependiendo de la complejidad. Te confirmaremos el tiempo exacto al recibir tu solicitud.",
  },
  {
    q: "¿Hacen entregas?",
    a: "Sí, realizamos entregas locales y envíos a través de mensajería. Al confirmar tu pedido te indicaremos las zonas y costos disponibles.",
  },
  {
    q: "¿Cómo puedo pagar?",
    a: "Aceptamos transferencia bancaria, pagos móviles y efectivo contra entrega en zonas habilitadas. Te compartimos los detalles al confirmar tu pedido.",
  },
];

/* =========================================
   FLOR ANIMADA
   ========================================= */

function FlowerAnimation() {
  return (
    <div aria-hidden="true" className="flower-stage">
      <div className="flower-ground" />

      <div className="flower">
        <div className="flower-stem" />

        <div className="flower-leaf left" />
        <div className="flower-leaf right" />

        <div className="flower-head">
          <div className="petal petal-1" />
          <div className="petal petal-2" />
          <div className="petal petal-3" />
          <div className="petal petal-4" />
          <div className="petal petal-5" />

          <div className="flower-center" />
        </div>
      </div>

      <span className="sparkle sparkle-1">✦</span>
      <span className="sparkle sparkle-2">✧</span>
      <span className="sparkle sparkle-3">✦</span>
    </div>
  );
}

/* =========================================
   HOME
   ========================================= */

export default function Home() {
  return (
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

            <button
              aria-label="Abrir menú"
              className="button button-secondary"
              type="button"
            >
              <Menu size={20} />
            </button>
          </header>

          <div className="hero-content">
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

            <FlowerAnimation />

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
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <a
                className="category-card"
                href="#galeria"
                key={category.slug}
              >
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

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Ofertas especiales</span>

            <h2 className="section-title">
              Packs pensados
              <br />
              para sorprender.
            </h2>
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
                    <span className="was">{offer.priceWas}</span>
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
          PERSONALIZAR
          ===================================== */}

      <section className="section" id="personalizar">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Hecho especialmente para ti</span>

            <h2 className="section-title">
              Tú imaginas.
              <br />
              Nosotros creamos.
            </h2>
          </div>

          <p className="hero-description">
            Cuéntanos qué tienes en mente, elige colores, flores y
            detalles, y envíanos una imagen de referencia para crear un
            ramo único. Como nuestros ramos temáticos de Hot Wheels o
            Harry Potter.
          </p>

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
          </div>

          <p className="hero-description">
            Escríbenos por el canal que prefieras. Te responderemos lo
            antes posible para ayudarte a crear el regalo perfecto.
          </p>

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
            <a href="#galeria">Galería</a>
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
  );
}
