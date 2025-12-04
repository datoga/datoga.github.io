import type { Site, Metadata, Socials, Bio, FeaturedVideo, MentoringPage, NavLink } from "@types";

// ============================================
// 🔧 SITE CONFIGURATION
// ============================================

export const SITE: Site = {
  NAME: "David Torres",
  EMAIL: "info@datoga.es",
};

// ============================================
// 🎬 FEATURED VIDEO
// ============================================

export const FEATURED_VIDEO: FeaturedVideo = {
  YOUTUBE_ID: "CWDz1-w36h0",
  TITLE: "Vídeo destacado",
};

// ============================================
// 👤 YOUR BIO & INTRODUCTION
// ============================================

// Calculate age dynamically
const birthDate = new Date("1983-06-09");
const today = new Date();
let age = today.getFullYear() - birthDate.getFullYear();
const m = today.getMonth() - birthDate.getMonth();
if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  age--;
}

export const BIO: Bio = {
  GREETING: `Hola, soy David Torres y tengo ${age} años`,
  EMOJI: "👋🏻",
  PARAGRAPHS: [
    `En camino constante para encontrar una mejor versión de mí mismo.`,
    `Ingeniero Informático, entusiasta de la tecnología y el desarrollo de software. Calisténico. Ajedrecista. Liberal. Inversor.`,
    `Mi crisis de los 40 vino bastante vitaminada, con un bache médico que hizo que se tambaleara toda mi vida. Ahora trabajo en mejorar a nivel personal en todas mis facetas.`,
    `Durante este proceso, me he encontrado con algunas personas que me han ayudado a crecer y mejorar. Quiero compartir mi experiencia con otros para que puedan hacer lo mismo.`
  ],
};

// ============================================
// 📢 PROMO BANNER
// ============================================

export const PROMO = {
  ENABLED: true,
  TEXT: "🚀 Go for it — Programa de mentoría gratuito. Empieza el 1 de enero de 2026.",
  LINK_TEXT: "Más información",
  LINK_HREF: "/go-for-it",
};

// ============================================
// 📝 UI TEXTS
// ============================================

export const UI_TEXTS = {
  CONNECT_TITLE: "Contacto",
  CONNECT_TEXT: "Si quieres contactar conmigo para algo o simplemente saludar, escríbeme por redes sociales o envíame un email.",
};

// ============================================
// 📄 PAGE METADATA
// ============================================

export const HOME: Metadata = {
  TITLE: "Inicio",
  DESCRIPTION: "David Torres - Ingeniero Informático, desarrollador backend y entusiasta de Go. Mentoría gratuita, desarrollo de software y crecimiento personal. Valencia, España.",
};

// ============================================
// 🔗 SOCIAL LINKS
// ============================================

export const SOCIALS: Socials = [
  {
    NAME: "twitter",
    HREF: "https://twitter.com/datoga"
  },
  {
    NAME: "github",
    HREF: "https://github.com/datoga"
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/datoga",
  }
];

// ============================================
// 🧭 NAVIGATION
// ============================================

export const NAV_LINKS: NavLink[] = [
  {
    NAME: "🚀 Go for it",
    HREF: "/go-for-it",
  },
  {
    NAME: "Contacto",
    HREF: "/contacto",
  },
];

// ============================================
// 🎓 MENTORING PAGE
// ============================================

export const MENTORING: MentoringPage = {
  TITLE: "🚀 Go for it",
  DESCRIPTION: "Go for it: programa de mentoría gratuita con David Torres. Sesiones personalizadas 1:1 sobre desarrollo de software, carrera profesional y crecimiento personal. Solo 4 plazas por semestre.",
  PARAGRAPHS: [
    `¿Te encuentras estancado en tu carrera? ¿Estás pasando por un bache personal? ¿Quieres mejorarte a ti mismo? <strong>🚀 Go for it</strong> es un programa de mentoría <strong>gratuito</strong> donde podemos trabajar juntos en tus objetivos.`,
    `No solo hablamos de tecnología. Las sesiones pueden cubrir desarrollo de software, estilo de vida, filosofía, inversiones o en general cualquier área donde pueda aportarte valor.`,
  ],
  CALLOUT: `Programa limitado a solo <strong>4 personas</strong> por semestre.`,
  CALLOUT_TITLE: `🚀 1ª EDICIÓN - ENERO 2026`,
  CALLOUT_SUBTITLE: `¿En qué consiste?`,
  FEATURES: [
    `👋 Sesión inicial para conocernos, sin tiempo definido.`,
    `📅 Sesiones de 1 hora cada 4 semanas durante un semestre.`,
    `✅ Sesión final para evaluar objetivos y trabajo futuro.`,
    `🎯 Trabajamos en los temas que tú elijas.`,
    `💬 Tendrás mi teléfono para contactarme cuando lo necesites.`,
    `🤝 Al finalizar, quedada grupal para quienes lo deseen.`,
  ],
  YOUTUBE_ID: "CWDz1-w36h0",
  VIDEO_TITLE: "Conoce 🚀 Go for it",
  FAQ_TITLE: "Preguntas frecuentes",
  FAQ: [
    {
      QUESTION: "¿Las sesiones han de ser presenciales?",
      ANSWER: "Si vives en Valencia o alrededores, es preferible quedar en persona, a poder ser en un parque para entrenar (qué mejor manera de conocerse). Si no eres de Valencia o no te viene bien, no te preocupes, podemos hacer las sesiones por videollamada sin problema.",
    },
    {
      QUESTION: "¿Cuándo empieza el programa?",
      ANSWER: "La próxima edición comienza el 1 de enero de 2026. Agendaré la primera sesión para conocernos durante el mes de enero.",
    },
    {
      QUESTION: "¿Seguro que no cuesta nada? ¿Qué ganas tú con esto?",
      ANSWER: "El programa es completamente gratuito. Por ahora esto es solo un proyecto personal que me hace ilusión hacer. Creo que al ser gratuito, el valor que puedo aportar es mucho mayor, ya que nunca va a estar condicionado por sacar dinero. No busco clientes, sino compañeros. Ayudar a otros me enriquece, me permite aprender de diferentes perspectivas y mejorar mi parte social. Es un win-win.",
    },
    {
      QUESTION: "¿Por qué te crees capaz de dar consejos?",
      ANSWER: "No voy a tomar ninguna decisión por ti ni decirte qué hacer. Mi rol es acompañarte y ayudarte a trabajar en que tomes tú mismo tus propias decisiones. Solo quiero ayudar, nada más.",
    },
    {
      QUESTION: "¿Por qué solo 4 personas por semestre?",
      ANSWER: "El programa está limitado a 4 personas porque así puedo trabajar con una persona por semana, durante el semestre. De esta forma, puedo dedicar el tiempo y atención necesarios a cada participante, sin comprometer mi espacio personal. No te preocupes, si quedas fuera de la presente edición, te añadiré a la lista de espera para la próxima.",
    },
    {
      QUESTION: "¿Será confidencial?",
      ANSWER: "Sí, todo lo que hagamos será confidencial. No voy a guardar ningún tipo de información personal. No voy a hacer ningún tipo de seguimiento, ni nada que pueda comprometer tu privacidad. Si estás más a gusto, podemos incluso firmar un acuerdo de confidencialidad.",
    },
  ],
};
