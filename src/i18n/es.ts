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
    role: 'Senior Software Engineer',
    tagline: 'Más de 7 años construyendo aplicaciones web — enfocado en arquitectura frontend, mejora de procesos y experiencia de desarrollador.',
    cta: 'Ver mi trabajo',
    available: 'Disponible para nuevos proyectos',
  },

  // About
  about: {
    title: 'Sobre mí',
    label: '01 / sobre mí',
    bio1: 'Ingeniero de software con 7+ años de experiencia en desarrollo web. Actualmente Tech Lead en MetLife, architecto sistemas escalables usando tecnologías full-stack modernas — frontends con React, orquestación Backend-for-Frontend (BFF), y microservicios. Diseño código limpio y mantenible aplicando principios SOLID y observabilidad comprehensiva del sistema.',
    bio2: 'Apasionado por arquitectura frontend, patrones empresariales y construcción de equipos de alto rendimiento. Me enfoco en mejora de procesos, excelencia arquitectónica y experiencia de desarrollador (DX) en todos los proyectos.',
    location: 'Ubicación',
    locationValue: 'Santiago, Chile',
    languages: 'Idiomas',
    languagesValue: 'Español, Inglés',
    education: 'Educación',
    educationValue: 'TSU en Informática — IUTRBF, 2016',
  },

  // Experience
  experience: {
    title: 'Experiencia',
    label: '02 / experiencia',
    present: 'Presente',
    roles: [
      {
        title: 'Tech Lead',
        company: 'MetLife (Imagemaker S.A.)',
        period: '2024 — Presente',
        description: 'Lideré un equipo de 6–10 ingenieros en MetLife, estableciendo principios SOLID y patrones arquitectónicos de nivel empresarial. Diseñé e implementé una arquitectura Backend-for-Frontend (BFF) con Spring Boot y Groovy, orquestando microservicios mediante Azure API Management. Desarrollé APIs de microservicios con NestJS e interfaces React con observabilidad en tiempo real usando Elastic Stack para metrics y distributed tracing. Colaboré con DevOps en pipelines CI/CD, Infrastructure as Code (IaC) y estrategias de deployment en Azure soportando 1000+ usuarios concurrentes en entornos de producción críticos.',
        stack: ['React', 'Spring Boot', 'Groovy', 'NestJS', 'Azure API Management', 'Elastic Stack', 'Azure DevOps'],
      },
      {
        title: 'Software Developer',
        company: 'MetLife (Imagemaker S.A.)',
        period: '2023 — 2024',
        description: 'Desarrollo de aplicaciones web React para gestión de clientes/ventas de seguros. Servicios backend con NestJS para una aplicación con más de 2000 usuarios. Promoví principios SOLID y prácticas de pair programming.',
        stack: ['React', 'NestJS', 'TypeScript', 'SQL Server'],
      },
      {
        title: 'Frontend Tech Lead',
        company: 'Preuniversitario Pedro de Valdivia',
        period: '2022 — 2023',
        description: 'Lideré el equipo frontend en aplicaciones educativas con React/Next.js. Creé un Design System con Tailwind CSS junto al equipo UI/UX. Desarrollé un paquete de componentes personalizado y un template Next.js preconfigurado.',
        stack: ['React', 'Next.js', 'Tailwind CSS', 'React Query', 'Next Auth'],
      },
      {
        title: 'Senior Frontend Developer',
        company: 'Preuniversitario Pedro de Valdivia',
        period: '2021 — 2022',
        description: 'Desarrollo con React/Next.js para sistemas de gestión educativa.',
        stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        title: 'Fullstack Developer',
        company: 'BIOHAZARD STUDIOS',
        period: '2018 — 2021',
        description: 'Desarrollo de sitios web estáticos y dinámicos, SPAs con React, APIs REST con PHP/Laravel y aplicaciones híbridas con Cordova.',
        stack: ['React', 'PHP', 'Laravel', 'JavaScript', 'MySQL'],
      },
      {
        title: 'Junior Web Developer',
        company: 'Meditron C.A.',
        period: '2016 — 2017',
        description: 'Mantenimiento de sistema de inventario PHP y desarrollo de nuevo sistema con Laravel/jQuery. Implementación de Git en el equipo.',
        stack: ['PHP', 'Laravel', 'jQuery', 'MySQL', 'Git'],
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
        items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Atomic Design'],
      },
      {
        name: 'Backend',
        items: ['Node.js', 'NestJS', 'PHP', 'Laravel'],
      },
      {
        name: 'Bases de Datos',
        items: ['MySQL', 'SQL Server'],
      },
      {
        name: 'DevOps / Herramientas',
        items: ['Git', 'GitHub', 'Microsoft Azure', 'Azure DevOps'],
      },
    ],
  },

  // Contact
  contact: {
    title: 'Hablemos',
    label: '04 / contacto',
    description: '¿Tienes un proyecto en mente o simplemente quieres conectar? Mi bandeja de entrada siempre está abierta.',
    email: 'me@luisr.dev',
    github: 'github.com/luisrdev',
    linkedin: 'linkedin.com/in/luisrdev',
    twitter: '',
    cta: 'Envíame un email',
  },

  // CV page
  cv: {
    pageTitle: 'Luis Ramos — CV',
    authorName: 'Luis Enrique Ramos',
    about: 'Tech Lead en MetLife con 7+ años de experiencia arquitectando sistemas escalables. Especializado en desarrollo full-stack con enfoque en arquitectura frontend, orquestación Backend-for-Frontend (BFF), y patrones de microservicios. Comprometido con principios SOLID, observabilidad de sistemas y construcción de equipos de alto rendimiento.',
    sections: {
      experience: 'Experiencia',
      education: 'Educación',
      skills: 'Habilidades',
    },
    education: {
      degree: 'TSU en Informática',
      institution: 'IUTRBF — Instituto Universitario de Tecnología de la Región Capital',
      period: '2013 — 2016',
    },
    print: 'Imprimir / Descargar PDF',
    backToPortfolio: 'Volver al portafolio',
  },

  // Footer
  footer: {
    built: 'Hecho con Astro & Tailwind CSS',
    rights: 'Luis Ramos. Todos los derechos reservados.',
  },
};
