export const en = {
  // Nav
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    switchLang: 'ES',
  },

  // Hero
  hero: {
    greeting: 'Hello, I\'m',
    role: 'Senior Software Engineer',
    tagline: '7+ years building web applications — focused on frontend architecture, process improvement, and developer experience .',
    cta: 'View my work',
    available: 'Available for new projects',
  },

  // About
  about: {
    title: 'About me',
    label: '01 / about',
    bio1: 'I\'m a Senior Software Developer with 7+ years of experience in web development. I architect scalable systems using modern full-stack technologies — React frontends, Backend-for-Frontend (BFF) orchestration, and microservices. I design clean, maintainable code through SOLID principles and comprehensive system observability.',
    bio2: 'Passionate about frontend architecture, enterprise patterns, and building high-performing teams. I focus on process improvement, architectural excellence, and developer experience (DX) across all projects.',
    location: 'Based in',
    locationValue: 'Santiago, Chile',
    languages: 'Languages',
    languagesValue: 'Spanish, English',
    education: 'Education',
    educationValue: 'Technical Diploma in CS — IUTRBF, 2016',
  },

  // Experience
  experience: {
    title: 'Experience',
    label: '02 / experience',
    present: 'Present',
    roles: [
      {
        title: 'Tech Lead',
        company: 'MetLife (Imagemaker S.A.)',
        period: '2024 — Present',
        description: 'Led a 6–10 person engineering team at MetLife, establishing SOLID principles and enterprise-grade architectural standards. Architected a Backend-for-Frontend (BFF) using Spring Boot and Groovy, orchestrating microservices APIs via Azure API Management. Developed NestJS-based microservices (API Systems) and React frontends with real-time observability using Elastic Stack. Collaborated with DevOps on CI/CD pipelines, Infrastructure as Code, and cloud deployment strategies supporting 1000+ concurrent users in production.',
        stack: ['React', 'Spring Boot', 'Groovy', 'NestJS', 'Azure API Management', 'Elastic Stack', 'Azure DevOps'],
      },
      {
        title: 'Software Developer',
        company: 'MetLife (Imagemaker S.A.)',
        period: '2023 — 2024',
        description: 'React web application development for insurance client/sales management. NestJS backend services for a 2000+ user application. Promoted SOLID principles and pair programming practices.',
        stack: ['React', 'NestJS', 'TypeScript', 'SQL Server'],
      },
      {
        title: 'Frontend Tech Lead',
        company: 'Preuniversitario Pedro de Valdivia',
        period: '2022 — 2023',
        description: 'Led frontend team on React/Next.js educational applications. Created a Tailwind CSS Design System with the UI/UX team. Developed a custom component package and a pre-configured Next.js template.',
        stack: ['React', 'Next.js', 'Tailwind CSS', 'React Query', 'Next Auth'],
      },
      {
        title: 'Senior Frontend Developer',
        company: 'Preuniversitario Pedro de Valdivia',
        period: '2021 — 2022',
        description: 'React/Next.js development for educational management systems.',
        stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      },
      {
        title: 'Fullstack Developer',
        company: 'BIOHAZARD STUDIOS',
        period: '2018 — 2021',
        description: 'Built static and dynamic websites, React SPAs, PHP/Laravel REST APIs, and hybrid apps with Cordova.',
        stack: ['React', 'PHP', 'Laravel', 'JavaScript', 'MySQL'],
      },
      {
        title: 'Junior Web Developer',
        company: 'Meditron C.A.',
        period: '2016 — 2017',
        description: 'PHP inventory system maintenance and new Laravel/jQuery inventory system development. Introduced Git to the team.',
        stack: ['PHP', 'Laravel', 'jQuery', 'MySQL', 'Git'],
      },
    ],
  },

  // Skills
  skills: {
    title: 'Skills',
    label: '03 / skills',
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
        name: 'Databases',
        items: ['MySQL', 'SQL Server'],
      },
      {
        name: 'DevOps / Tools',
        items: ['Git', 'GitHub', 'Microsoft Azure', 'Azure DevOps'],
      },
    ],
  },

  // Contact
  contact: {
    title: 'Let\'s talk',
    label: '04 / contact',
    description: 'Have a project in mind or just want to connect? My inbox is always open.',
    email: 'me@luisr.dev',
    github: 'github.com/luisrdev',
    linkedin: 'linkedin.com/in/luisrdev',
    twitter: '',
    cta: 'Send me an email',
  },

  // CV page
  cv: {
    pageTitle: 'Luis Ramos — CV',
    authorName: 'Luis Enrique Ramos',
    about: 'Senior Software Developer with 7+ years of experience in web development. Specialized in full-stack architecture with expertise in frontend development, Backend-for-Frontend (BFF) orchestration, and microservices patterns. Committed to SOLID principles, system observability, and building scalable, maintainable systems.',
    sections: {
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
    },
    education: {
      degree: 'Technical Diploma in Computer Science',
      institution: 'IUTRBF — Instituto Universitario de Tecnología de la Región Capital',
      period: '2013 — 2016',
    },
    print: 'Print / Download PDF',
    backToPortfolio: 'Back to portfolio',
  },

  // Footer
  footer: {
    built: 'Built with Astro & Tailwind CSS',
    rights: 'Luis Ramos. All rights reserved.',
  },
};

export type Translations = typeof en;
