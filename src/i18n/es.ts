import type { Translations } from './en';

export const es: Translations = {
  // Nav
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    skills: 'Habilidades',
    contact: 'Contacto',
    switchLang: 'EN',
  },

  // Hero
  hero: {
    greeting: 'Hola, soy',
    role: 'Desarrollador Full-Stack Senior',
    tagline: 'Construyo sistemas escalables e interfaces elegantes — desde la base de datos hasta el píxel.',
    cta: 'Ver mi trabajo',
    available: 'Disponible para freelance',
  },

  // About
  about: {
    title: 'Sobre mí',
    label: '01 / sobre mí',
    bio1: 'Soy un desarrollador full-stack con más de 8 años de experiencia creando productos digitales que combinan rendimiento con una gran experiencia de usuario. Me encanta trabajar en la intersección entre la arquitectura backend y el cuidado por el frontend.',
    bio2: 'Cuando no estoy escribiendo código, probablemente estoy haciendo senderismo en la montaña, experimentando con proporciones de espresso o leyendo sobre sistemas distribuidos.',
    location: 'Ubicación',
    locationValue: 'Barcelona, España',
    languages: 'Idiomas',
    languagesValue: 'Inglés, Español, Portugués',
    education: 'Educación',
    educationValue: 'Grado en Ing. Informática — UPC, 2016',
  },

  // Experience
  experience: {
    title: 'Experiencia',
    label: '02 / experiencia',
    present: 'Presente',
    roles: [
      {
        title: 'Desarrollador Full-Stack Senior',
        company: 'NovaTech',
        period: '2021 — Presente',
        description: 'Arquitecto principal de una plataforma SaaS de analíticas con más de 200k usuarios. Migré el monolito a microservicios, reduciendo la latencia p99 en un 60%. Mentoricé a un equipo de 6 ingenieros.',
        stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
      },
      {
        title: 'Desarrollador Full-Stack',
        company: 'CodeCraft Studio',
        period: '2018 — 2021',
        description: 'Desarrollé aplicaciones web y herramientas internas para una agencia de producto. Entregué más de 15 proyectos en verticales de fintech, salud y e-commerce.',
        stack: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Docker'],
      },
      {
        title: 'Desarrollador Frontend Junior',
        company: 'PixelWave',
        period: '2016 — 2018',
        description: 'Desarrollé interfaces responsivas pixel-perfect a partir de mockups de diseño. Mejoré las puntuaciones de Lighthouse de ~55 a 90+ en todo el sitio.',
        stack: ['JavaScript', 'Vue.js', 'SCSS', 'Figma'],
      },
    ],
  },

  // Skills
  skills: {
    title: 'Habilidades',
    label: '03 / habilidades',
    categories: [
      {
        name: 'Frontend',
        items: ['TypeScript', 'React', 'Astro', 'Next.js', 'Tailwind CSS', 'Figma'],
      },
      {
        name: 'Backend',
        items: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs', 'Python'],
      },
      {
        name: 'Infraestructura',
        items: ['Docker', 'AWS', 'GitHub Actions', 'Terraform', 'Linux', 'Nginx'],
      },
    ],
  },

  // Contact
  contact: {
    title: 'Hablemos',
    label: '04 / contacto',
    description: '¿Tienes un proyecto en mente o simplemente quieres conectar? Mi bandeja de entrada siempre está abierta.',
    email: 'alex@rivera.dev',
    github: 'github.com/alexrivera',
    linkedin: 'linkedin.com/in/alexrivera',
    twitter: '@alexrivera_dev',
    cta: 'Envíame un email',
  },

  // Footer
  footer: {
    built: 'Hecho con Astro & Tailwind CSS',
    rights: 'Alex Rivera. Todos los derechos reservados.',
  },
};
