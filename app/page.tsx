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
import { CinematicBanner } from "../components/cinematic-banner";
import { DynamicWhatsApp } from "../components/dynamic-whatsapp";

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
   ICONOS DE MARCA (SVG inline)
   ========================================= */

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width={size}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" fill="none" height={size} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width={size}>
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
        <span className="petal-fall" key={i} style={{ left: petal.left, width: petal.size, height: petal.size, animationDelay: petal.delay, animationDuration: petal.duration }} />
      ))}
    </div>
  );
}

/* =========================================
   DATA
   ========================================= */

const categories = [
  { image: "/galeria/roses-fuchsia-butterfly.jpg", alt: "Rosas eternas hechas a mano", icon: "🌹", name: "Rosas", slug: "rosas" },
  { image: "/galeria/sunflowers-limpiapipas.jpg", alt: "Girasoles tejidos a mano en limpiapipas", icon: "🌻", name: "Girasoles", slug: "girasoles" },
  { image: "/galeria/lily-pink-limpiapipas.jpg", alt: "Tulipanes y lirios tejidos a mano", icon: "🌷", name: "Tulipanes", slug: "tulipanes" },
  { image: "/galeria/lamp-lotus-blue-1.jpg", alt: "Lámpara floral con forma de loto", icon: "💡", name: "Lámparas", slug: "lamparas" },
  { image: "/galeria/christmas-tree-limpiapipas.jpg", alt: "Árbol de Navidad tejido a mano", icon: "🎄", name: "Navidad", slug: "navidad" },
  { image: "/galeria/harry-potter.jpg", alt: "Ramo temático personalizado", icon: "💝", name: "Personalizados", slug: "personalizados" },
  { image: "/galeria/flores-individuales.jpeg", alt: "Flores individuales hechas a mano", icon: "🌸", name: "Individuales", slug: "individuales" }
];

const offers = [
  { image: "/galeria/rosa-limpiapipa.jpeg", fit: "contain", badge: "Individual", name: "Rosa de Limpiapipa", desc: "Un pequeño tesoro tejido hilo por hilo. Perfecto para esos momentos en los que un detalle sencillo lo dice todo.", priceNow: "500 CUP", priceWas: "", waMessage: "Hola 🌹 Me interesa comprar una Rosa de Limpiapipa individual." },
  { image: "/galeria/girasol-satin.jpeg", fit: "contain", badge: "Individual", name: "Girasol de Satín", desc: "Alegría en estado puro. Un girasol de suave satén que iluminará cualquier espacio y sacará una sonrisa.", priceNow: "600 CUP", priceWas: "", waMessage: "Hola 🌻 Me interesa comprar un Girasol de Satén individual." },
  { image: "/galeria/girasol-limpiapipa.jpeg", fit: "contain", badge: "Individual", name: "Girasol de Limpiapipa", desc: "Hecho a mano con paciencia. Un girasol eterno para recordar a alguien especial que siempre busca el lado brillante de la vida.", priceNow: "500 CUP", priceWas: "", waMessage: "Hola 🌻 Me interesa comprar un Girasol de Limpiapipa individual." },
  { image: "/galeria/rosa-satin.jpeg", fit: "contain", badge: "Individual", name: "Rosa de Satín", desc: "Una caricia en forma de flor. Suave satén y una mariposa dorada que se posa para quedarse contigo.", priceNow: "600 CUP", priceWas: "", waMessage: "Hola 🌹 Me interesa comprar una Rosa de Satén individual." },
  { image: "/galeria/roses-fuchsia-butterfly.jpg", fit: "", badge: "Top ventas", name: "Romantic Pack", desc: "Un abrazo hecho arte. Rosas fucsia intensas, capturadas para siempre con una mariposa dorada que parece recién posada.", priceNow: "$12,000", priceWas: "$15,000", waMessage: "Hola 🌹 Me interesa el Romantic Pack (rosas fucsia con mariposa y corona). ¿Está disponible?" },
  { image: "/galeria/sunflowers-limpiapipas.jpg", fit: "", badge: "Favorito", name: "Sunshine Pack", desc: "Alegría tejida hilo por hilo. Girasoles que no buscan el sol porque lo llevan dentro.", priceNow: "$6,000", priceWas: "", waMessage: "Hola 🌻 Me interesa el Sunshine Pack (girasoles tejidos). ¿Cuánto demora?" },
  { image: "/galeria/lamp-lotus-blue-1.jpg", fit: "", badge: "Nuevo", name: "Flower Night", desc: "Luz cálida para tus noches. Una flor de loto que no se cierra jamás y que ilumina tus espacios con magia.", priceNow: "$1,500", priceWas: "$3,000", waMessage: "Hola 💡 Me interesa la lámpara Flower Night (flor de loto). ¿Tienen más colores?" },
  { image: "/galeria/roses-purple-butterfly.jpg", fit: "", badge: "Nuevo", name: "Lavender Dreams", desc: "Suavidad en tonos violeta. Un susurro de calma y elegancia para los momentos que merecen ser recordados.", priceNow: "$4,000", priceWas: "", waMessage: "Hola 💜 Me interesa el ramo Lavender Dreams (rosas violeta con mariposas). ¿Está disponible?" },
  { image: "/galeria/roses-lime-crown.jpg", fit: "", badge: "Nuevo", name: "Lime Queen", desc: "Frescura vibrante. Un toque de verde limón que no pasa desapercibido y le roba el aliento a quien lo recibe.", priceNow: "$4,000", priceWas: "", waMessage: "Hola 💚 Me interesa el ramo Lime Queen (rosas verde limón con corona dorada). ¿Está disponible?" },
  { image: "/galeria/roses-orange-butterfly.jpg", fit: "", badge: "Promo", name: "Sunset Butterfly", desc: "Atardecer en tus manos. Cálidas rosas naranjas custodiadas por una mariposa que se niega a volar lejos.", priceNow: "$5,000", priceWas: "$6,500", waMessage: "Hola 🧡 Me interesa el ramo Sunset Butterfly (rosas naranjas con mariposa dorada). ¿Está disponible?" },
  { image: "/galeria/roses-blue-crown.jpg", fit: "", badge: "Premium", name: "Blue Royale", desc: "Realeza y serenidad. El azul profundo de un océano en calma, coronado para una ocasión inolvidable.", priceNow: "$7,000", priceWas: "$9,500", waMessage: "Hola 💙 Me interesa el ramo Blue Royale (rosas azules con corona plateada). ¿Está disponible?" },
  { image: "/galeria/roses-white-love.jpg", fit: "", badge: "Especial", name: "White Love", desc: "Pureza y romance. Rosas blancas envueltas en promesas de 'Love', con un toque dorado que ilumina cualquier espacio.", priceNow: "$7,000", priceWas: "$8,500", waMessage: "Hola 🤍 Me interesa el ramo White Love (rosas blancas con papel Love). ¿Está disponible?" },
  { image: "/galeria/golden-sunrise.jpg", fit: "", badge: "Edición limitada", name: "Golden Sunrise", desc: "Un amanecer eterno. Espigas y rosas bañadas en oro para regalar la energía y la luz que todos buscamos.", priceNow: "$8,000", priceWas: "$10,000", waMessage: "Hola 💛 Me interesa el ramo Golden Sunrise (rosas amarillas con espigas blancas). ¿Está disponible?" },
  { image: "/galeria/roses-yellow-butterfly.jpg", fit: "", badge: "Destacado", name: "Sunflower Glow", desc: "El encuentro perfecto. El romance de una rosa y la alegría de un girasol, fundidos en un abrazo artesanal.", priceNow: "$7,000", priceWas: "$8,500", waMessage: "Hola 🌻 Me interesa el ramo Sunflower Glow (rosas amarillas con girasol). ¿Está disponible?" },
  { image: "/galeria/roses-red-passion.jpg", fit: "", badge: "Premium", name: "Red Passion", desc: "Amor sin filtros. Intensidad roja, mariposas doradas y coronas de perlas para gritar lo que sientes sin usar palabras.", priceNow: "$8,000", priceWas: "", waMessage: "Hola ❤️ Me interesa el ramo Red Passion (rosas rojas con mariposa y corona). ¿Está disponible?" },
  { image: "/galeria/coral-aurora.jpg", fit: "", badge: "Nuevo", name: "Coral Aurora", desc: "Tonos de aurora tropical. Un coral cálido que abraza, decorado con mariposas que parecen recién despertar.", priceNow: "$6,500", priceWas: "$7,500", waMessage: "Hola 🌸 Me interesa el ramo Coral Aurora (rosas coral con mariposas). ¿Está disponible?" },
  { image: "/galeria/roses-yellow-foami-50.jpg", fit: "", badge: "Edición limitada", name: "Yellow Fifty", desc: "Cincuenta historias en un solo ramo. Un despliegue de 50 rosas hechas a mano que demuestran que el amor no tiene límites.", priceNow: "$10,000", priceWas: "", waMessage: "Hola 💛 Me interesa el ramo Yellow Fifty (50 rosas amarillas de foami). ¿Está disponible?" },
  { image: "/galeria/lily-pink-limpiapipas.jpg", fit: "", badge: "Económico", name: "Pink Lily", desc: "Delicadeza infinita. Tulipanes tejidos con paciencia, perfectos para decir 'te quiero' con un detalle sutil.", priceNow: "$2,500", priceWas: "$3,500", waMessage: "Hola 🌷 Me interesa el ramo Pink Lily (tulipanes rosados). ¿Está disponible?" },
];

const testimonials = [
  { name: "Lucia Medina", text: "Preciosos, me encantaron todos los detalles." },
  { name: "Maritza Martínez Calderón", text: "Están muy lindas, felicitaciones por tan bello trabajo." },
  { name: "Guillermo Hernández Rojo", text: "Es arte de una artista. Las manos de una artista." },
  { name: "Aniole Gómez", text: "Todas las flores que haces me gustan. ¡Bellas!" },
  { name: "Enrique Hernández González", text: "Una obra de arte, sin duda alguna." },
  { name: "Dayani Gómez Reyes", text: "Me fascina. ¡Guau! Cada vez me sorprendes más." },
  { name: "Ileana González", text: "Hermoso trabajo, lindo y bello. Sigue así." },
  { name: "Ramón González", text: "Felicidades por tu arte. Se nota el amor en cada pieza." },
  { name: "Cliente verificada", text: "De veras una belleza de trabajo. Lo que han de crear tus manos de artista. Súper complacida con el resultado final. ¡Gracias miles!" },
];

const faqs = [
  { q: "¿Las flores realmente duran para siempre?", a: "Nuestras creaciones están elaboradas con materiales de alta durabilidad. Con cuidados básicos — evitar humedad directa y sol intenso — se conservan intactas durante años." },
  { q: "¿Puedo solicitar un diseño personalizado?", a: "Sí. Puedes enviarnos una imagen de referencia (por ejemplo de Pinterest) y describir cómo imaginas tu ramo. Crearemos una propuesta única inspirada en tu idea. Mira nuestros ramos temáticos (Hot Wheels, Harry Potter) como ejemplo." },
  { q: "¿Puedo elegir los colores?", a: "Por supuesto. Trabajamos con rojo, rosa, blanco, amarillo, azul, morado y combinaciones personalizadas. Cuéntanos la paleta que prefieras." },
  { q: "¿Cuánto demora un pedido personalizado?", a: "Todos nuestros ramos se elaboran por encargo. Los pedidos personalizados toman entre 3 y 7 días hábiles dependiendo de la complejidad. Te confirmaremos el tiempo exacto al recibir tu solicitud." },
  { q: "¿Hacen entregas?", a: "Sí, realizamos entregas locales y envíos a través de mensajería. Al confirmar tu pedido te indicaremos las zonas y costos disponibles." },
  { q: "¿Cómo puedo pagar?", a: "Aceptamos pagos en USD (efectivo), transferencia bancaria y pagos móviles (CUP). En zonas habilitadas también aceptamos contra entrega. Te compartimos los detalles al confirmar tu pedido." },
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

        {/* HERO */}
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
              <nav aria-label="Navegación principal" className="hero-nav-desktop">
                <a href="#coleccion">Colección</a>
                <a href="#galeria">Galería</a>
                <a href="#sobre-ari">Sobre Ari</a>
                <a href="#personalizar">Crear</a>
                <a href="#contacto">Contacto</a>
              </nav>
            </header>

            <div className="hero-content hero-content-minimal">
              <div className="hero-copy">
                <span className="eyebrow">Hecho a mano · Hecho con amor</span>
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

        {/* CINEMATIC BANNER */}
        <CinematicBanner />

        {/* CATEGORÍAS */}
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
                <a className="category-card" href="#galeria" key={category.slug}>
                  <Image alt={category.alt} className="category-image" fill sizes="(max-width: 700px) 50vw, 33vw" src={category.image} />
                  <div className="category-content">
                    <div className="category-icon">{category.icon}</div>
                    <h3 className="category-name">{category.name}</h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="story">
          <div className="container">
            <div className="story-inner">
              <span className="story-eyebrow">Regala algo que permanezca</span>
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

        {/* OFERTAS */}
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
                Cada pieza que ves aquí nació en mi mesa de trabajo, entre hilos, foami y mucha paciencia. No son flores de vitrina; son historias moldeadas a mano para que nunca se marchiten. Aceptamos pagos en USD y CUP.
              </p>
            </div>
            <div className="offers-grid">
              {offers.map((offer) => (
                <article className="offer-card" key={offer.name}>
                  <span className="offer-badge">{offer.badge}</span>
                  <div className="offer-visual">
                    <Image
                      alt={offer.name}
                      className={`offer-image ${offer.fit === "contain" ? "img-contain" : ""}`}
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
                      {offer.priceWas && <span className="was">{offer.priceWas}</span>}
                    </div>
                    <a className="button button-primary" href={whatsappUrl(offer.waMessage)} rel="noopener noreferrer" target="_blank">
                      Quiero este ramo
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GALERÍA */}
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
                Un recorrido visual por nuestros diseños más queridos. Desde la delicadeza de una rosa individual hasta la majestuosidad de un ramo XL. Cada pieza que ves aquí fue moldeada a mano, pensando en emocionar a quien la recibe.
              </p>
            </div>
            <div className="gallery-grid">
              {offers.map((item, index) => {
                const isTall = index % 4 === 0 || index % 4 === 3;
                return (
                  <div className={`gallery-item ${isTall ? "tall" : ""}`} key={`gal-${item.name}`}>
                    <Image
                      alt={item.name}
                      className={`gallery-image ${item.fit === "contain" ? "img-contain" : ""}`}
                      fill
                      sizes="(max-width: 700px) 50vw, 25vw"
                      src={item.image}
                    />
                    <span className="caption">{item.name}</span>
                  </div>
                );
              })}
              <div className="gallery-item tall">
                <Image alt="Harry Potter" className="gallery-image" fill sizes="(max-width: 700px) 50vw, 25vw" src="/galeria/harry-potter.jpg" />
                <span className="caption">Harry Potter</span>
              </div>
              <div className="gallery-item">
                <Image alt="Hot Wheels" className="gallery-image" fill sizes="(max-width: 700px) 50vw, 25vw" src="/galeria/hotwheels-black.jpg" />
                <span className="caption">Hot Wheels</span>
              </div>
              <div className="gallery-item">
                <Image alt="Árbol Navideño" className="gallery-image" fill sizes="(max-width: 700px) 50vw, 25vw" src="/galeria/christmas-tree-limpiapipas.jpg" />
                <span className="caption">Árbol Navideño</span>
              </div>
              <div className="gallery-item">
                <Image alt="Lámpara Loto II" className="gallery-image" fill sizes="(max-width: 700px) 50vw, 25vw" src="/galeria/lamp-lotus-blue-2.jpg" />
                <span className="caption">Lámpara Loto II</span>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIOS */}
        <section className="section testimonials-section" id="testimonios">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Lo que dicen</span>
              <h2 className="section-title">Clientes<br />que ya confiaron.</h2>
              <p className="section-lead">Reseñas reales de personas que ya recibieron sus ramos eternos hechos a mano.</p>
            </div>
            <div className="testimonials-grid">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <span className="testimonial-author">{testimonial.name}</span>
                    <span className="testimonial-role">Cliente verificado</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE ARI */}
        <section className="section about-section" id="sobre-ari">
          <div className="container">
            <div className="about-inner">
              <div className="about-content">
                <span className="eyebrow">Sobre Ari</span>
                <h2 className="section-title">Detrás de cada ramo<br />hay una artista.</h2>
                <p className="about-text">
                   Soy <strong>Ariadna Paz González</strong>, creadora
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
                <p className="about-quote">Cada ramo es hecho con amor.</p>
                <div className="about-highlights">
                  <div className="about-highlight">
                    <span className="about-highlight-icon">🎨</span>
                    <span className="about-highlight-label">Educación Artística</span>
                  </div>
                  <div className="about-highlight">
                    <span className="about-highlight-icon">🌸</span>
                    <span className="about-highlight-label">100% Hecho a mano</span>
                  </div>
                  <div className="about-highlight">
                    <span className="about-highlight-icon">📍</span>
                    <span className="about-highlight-label">Santa Clara, Cuba</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONALIZAR */}
        <section className="section" id="personalizar">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Hecho especialmente para ti</span>
              <h2 className="section-title">Tú imaginas.<br />Nosotros creamos.</h2>
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

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Preguntas frecuentes</span>
              <h2 className="section-title">Todo lo que<br />quieres saber.</h2>
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

        {/* CONTACTO */}
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
              <a className="contact-card" href={whatsappUrl()} rel="noopener noreferrer" target="_blank">
                <span className="contact-icon"><MessageCircle size={22} /></span>
                <span className="contact-label">WhatsApp</span>
                <span className="contact-meta">Respuesta rápida</span>
              </a>
              <a className="contact-card" href={`sms:${BRAND.sms}`}>
                <span className="contact-icon"><Send size={22} /></span>
                <span className="contact-label">SMS</span>
                <span className="contact-meta">Mensaje directo</span>
              </a>
              <a className="contact-card" href={`mailto:${BRAND.email}`}>
                <span className="contact-icon"><Mail size={22} /></span>
                <span className="contact-label">Email</span>
                <span className="contact-meta">Gmail</span>
              </a>
              <a className="contact-card" href={BRAND.facebook} rel="noopener noreferrer" target="_blank">
                <span className="contact-icon"><FacebookIcon size={22} /></span>
                <span className="contact-label">Facebook</span>
                <span className="contact-meta">Síguenos</span>
              </a>
              <a className="contact-card" href={BRAND.instagram} rel="noopener noreferrer" target="_blank">
                <span className="contact-icon"><InstagramIcon size={22} /></span>
                <span className="contact-label">Instagram</span>
                <span className="contact-meta">@ari_eternalflowers</span>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <div className="brand-mark">A</div>
            <div className="footer-name">Ari&apos;s Eternal Flowers</div>
            <p className="footer-tagline">Flores que permanecen. Momentos que perduran.</p>
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

        {/* BOTÓN DINÁMICO WHATSAPP */}
        <DynamicWhatsApp 
          phone={BRAND.whatsapp} 
          message={BRAND.whatsappText} 
        />

        {/* MOBILE NAV */}
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
