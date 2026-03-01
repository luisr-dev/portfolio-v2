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
    role: 'Senior Full-Stack Developer',
    tagline: 'I build scalable systems and elegant interfaces — from database to pixel.',
    cta: 'View my work',
    available: 'Available for freelance',
  },

  // About
  about: {
    title: 'About me',
    label: '01 / about',
    bio1: 'I\'m a full-stack developer with 8+ years of experience crafting digital products that blend performance with great UX. I love working at the intersection of backend architecture and frontend craftsmanship.',
    bio2: 'When I\'m not writing code, I\'m probably hiking a trail in the mountains, experimenting with espresso ratios, or reading about distributed systems.',
    location: 'Based in',
    locationValue: 'Barcelona, Spain',
    languages: 'Languages',
    languagesValue: 'English, Spanish, Portuguese',
    education: 'Education',
    educationValue: 'B.Sc. Computer Science — UPC, 2016',
  },

  // Experience
  experience: {
    title: 'Experience',
    label: '02 / experience',
    present: 'Present',
    roles: [
      {
        title: 'Senior Full-Stack Developer',
        company: 'NovaTech',
        period: '2021 — Present',
        description: 'Lead architect on a SaaS analytics platform serving 200k+ users. Migrated monolith to microservices, reducing p99 latency by 60%. Mentored a team of 6 engineers.',
        stack: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
      },
      {
        title: 'Full-Stack Developer',
        company: 'CodeCraft Studio',
        period: '2018 — 2021',
        description: 'Built client-facing web apps and internal tooling for a product agency. Delivered 15+ projects across fintech, health, and e-commerce verticals.',
        stack: ['React', 'Node.js', 'GraphQL', 'MongoDB', 'Docker'],
      },
      {
        title: 'Junior Frontend Developer',
        company: 'PixelWave',
        period: '2016 — 2018',
        description: 'Developed pixel-perfect responsive UIs from designer mockups. Improved Lighthouse performance scores site-wide from ~55 to 90+.',
        stack: ['JavaScript', 'Vue.js', 'SCSS', 'Figma'],
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
        items: ['TypeScript', 'React', 'Astro', 'Next.js', 'Tailwind CSS', 'Figma'],
      },
      {
        name: 'Backend',
        items: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'REST APIs', 'Python'],
      },
      {
        name: 'Infrastructure',
        items: ['Docker', 'AWS', 'GitHub Actions', 'Terraform', 'Linux', 'Nginx'],
      },
    ],
  },

  // Contact
  contact: {
    title: 'Let\'s talk',
    label: '04 / contact',
    description: 'Have a project in mind or just want to connect? My inbox is always open.',
    email: 'alex@rivera.dev',
    github: 'github.com/alexrivera',
    linkedin: 'linkedin.com/in/alexrivera',
    twitter: '@alexrivera_dev',
    cta: 'Send me an email',
  },

  // Footer
  footer: {
    built: 'Built with Astro & Tailwind CSS',
    rights: 'Alex Rivera. All rights reserved.',
  },
};

export type Translations = typeof en;
