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

export const BIO: Bio = {
  GREETING: "Hola, soy David Torres",
  EMOJI: "👋🏻",
  PARAGRAPHS: [
    `Me gusta pensar y desarrollar nuevas ideas. Ingeniero Informático. Ajedrecista. Liberal.`,
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
  DESCRIPTION: "Sitio personal de David Torres, Gopher y desarrollador backend.",
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
    NAME: "Go for it",
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
  TITLE: "Go for it",
  DESCRIPTION: "Go for it: programa de mentoría gratuito. Sesiones personalizadas de 1 hora cada 2 semanas durante un semestre. Próxima edición: enero 2026.",
  PARAGRAPHS: [
    `¿Quieres mejorar en tu carrera y tu vida? <strong>Go for it</strong> es un programa de mentoría <strong>gratuito</strong> donde podemos trabajar juntos en tus objetivos.`,
    `No solo hablamos de tecnología. Las sesiones pueden cubrir desarrollo de software, inversiones, estilo de vida, deporte, o cualquier área donde pueda aportarte valor.`,
    `El programa está <strong>limitado a 4 personas por semestre</strong>. La próxima edición comienza el <strong>1 de enero de 2026</strong>.`,
  ],
  YOUTUBE_ID: "CWDz1-w36h0",
  VIDEO_TITLE: "Conoce Go for it",
  FAQ_TITLE: "Preguntas frecuentes",
  FAQ: [
    {
      QUESTION: "¿Cómo funcionan las sesiones?",
      ANSWER: "Realizamos una sesión de 1 hora cada 2 semanas, durante un semestre completo. Trabajamos en los temas que tú elijas.",
    },
    {
      QUESTION: "¿Las sesiones son presenciales o por videollamada?",
      ANSWER: "Si vives en Valencia o alrededores, es preferible quedar en persona. Si no, podemos hacerlo por videollamada sin problema.",
    },
    {
      QUESTION: "¿Cuándo empieza el programa?",
      ANSWER: "La próxima edición comienza el 1 de enero de 2026.",
    },
    {
      QUESTION: "¿Cuánto cuesta?",
      ANSWER: "El programa es completamente gratuito. Mi objetivo es devolver a la comunidad y ayudar a personas que quieren mejorar.",
    },
    {
      QUESTION: "¿Qué ganas tú con esto?",
      ANSWER: "Ayudar a otros me enriquece y me permite aprender de diferentes perspectivas. Además, me ayuda a mejorar mi parte social e interactuar con gente nueva. Es un win-win.",
    },
    {
      QUESTION: "¿Por qué te crees capaz de dar consejos?",
      ANSWER: "No voy a tomar ninguna decisión por ti ni decirte qué hacer. Mi rol es acompañarte y ayudarte a trabajar en que tomes tú mismo tus propias decisiones. Solo quiero ayudar, nada más.",
    },
    {
      QUESTION: "¿Qué temas se pueden tratar?",
      ANSWER: "Las sesiones no se limitan a tecnología. Podemos hablar de desarrollo de software, arquitectura, pero también de inversiones, estilo de vida, deporte, o cualquier área donde pueda aportarte.",
    },
    {
      QUESTION: "¿Cuántas plazas hay disponibles?",
      ANSWER: "El programa está limitado a 4 personas por semestre para poder dedicar el tiempo y atención necesarios a cada participante.",
    },
    {
      QUESTION: "¿Cómo puedo entrar en el programa?",
      ANSWER: "Contáctame por email o LinkedIn y cuéntame por qué quieres acceder al programa: cuáles son tus objetivos, en qué punto estás y qué esperas conseguir con la mentoría.",
    },
  ],
};
