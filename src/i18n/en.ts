export const en = {
  // ---------- NAV ----------
  nav: {
    about: "About",
    experience: "Experience",
    languages: "Languages",
    projects: "Projects",
    writing: "Writing",
  },

  // ---------- HERO ----------
  hero: {
    role: "Backend Software Engineer",
    tagline:
      "Backend Software Engineer specialized in C# (.NET) and scalable backend systems. I design and build high-performance APIs and data-intensive platforms that run reliably at scale.",
  },

  // ---------- ABOUT ----------
  about: {
    heading: "About",
    p1: "Backend Software Engineer specialized in C# (.NET) and scalable backend systems. I design and build high-performance APIs and data-intensive platforms with a strong focus on scalability, low latency, security, and fault tolerance. I have hands-on experience with REST & GraphQL APIs, Redis, RabbitMQ, message-based workflows, SFTP and cloud-storage pipelines, and CI/CD.",
    p2: "Currently, I'm a Backend Engineer at Ucall — a contact-center operation with 1,000+ employees handling 1M+ calls per day. There I led the backend of a 2-person team building a call-quality-control platform that processes 500K+ audio and chat interactions. I'm also Co-founder & Tech Lead at Bytebooster, where I help design and deliver scalable software solutions aligned with real business needs.",
    p2_ucall_label: "Ucall",
    p3: "I'm comfortable working in international, distributed teams, collaborating closely with DevOps and product stakeholders. I value clean code, solid architecture, and continuous improvement. My goal is to deliver solutions that are not only robust and secure but also drive tangible business value.",
    p4: "Outside of work, I find inspiration in connecting with the tech community, continuous learning, and exploring new technologies.",
  },

  // ---------- EXPERIENCE ----------
  experience: {
    heading: "Experience",
    resumeBtn: "View full résumé",
    resumeBtnAts: "Download ATS-friendly résumé",
    generatingBtn: "Generating PDF...",
    // Full experience list (translatable parts only)
    items: {
      spacium: {
        role: "Frontend Developer",
        seniority: "Mid-Level",
        company: "SPACIUM",
        description:
          "At SPACIUM, I worked as a Frontend Developer building scalable, high-performance web applications. I designed responsive, intuitive user interfaces and partnered closely with design and backend teams to deliver seamless digital experiences. Using Next.js, TypeScript, Tailwind CSS, and React, I improved frontend performance and contributed to a cleaner, more maintainable component architecture.",
      },
      risingsystems: {
        role: "Software Developer",
        seniority: "Mid-Level",
        company: "RisingSystems",
        description:
          "At RisingSystems, I built and maintained custom software solutions for a range of clients, focused on application performance and reliability. Using C#, .NET Core, SQL Server, and MongoDB, I delivered robust features, optimized database queries, and refactored legacy code to reduce technical debt. I collaborated with cross-functional teams to align software architecture with strategic business objectives and high availability standards.",
      },
      freelance: {
        role: "Full Stack Developer",
        seniority: "Junior",
        company: "Freelance",
        description:
          "As a Freelance Full Stack Developer, I delivered end-to-end web applications for startups, combining frontend and backend technologies — React, Node.js, Express.js, and PostgreSQL — to ship tailored solutions. I designed scalable architectures, optimized system performance, and built responsive interfaces that increased user engagement and strengthened clients' digital presence.",
      },
      ucall: {
        role: "Backend Engineer",
        seniority: "Mid-Level",
        company: "Ucall",
        description:
          "Backend engineer on communication and contact-center systems built with C# and .NET. The company is a BPO with 1,000+ employees that handles 1M+ calls per day across its operations — that's the scale and context I work within, not the throughput of a service I built. I led the backend of a 2-person team building a call-quality-control platform that processes 500K+ audio and chat interactions, with features like automatic rotation of supervisors and team assistants integrated with an attendance-control system. I also built media pipelines that import audio into a local SFTP server and offload recordings to cloud storage (Wasabi), and developed self-service IVR solutions. Day-to-day I work with RabbitMQ for message-based workflows, Redis for low-latency critical paths, and collaborate closely with DevOps to keep systems stable under real-world load.",
      },
      bytebooster: {
        role: "Co-founder & Tech Lead",
        seniority: "C-Level",
        company: "Bytebooster",
        description:
          "Co-founder & Tech Lead driving technical strategy and software architecture. I design and deliver scalable software solutions aligned with real business needs, oversee the development of custom products, and guide engineering decisions from architecture through delivery.",
      },
    },
    presentLabel: "Present",
  },

  // ---------- PROJECTS ----------
  projects: {
    heading: "Projects",
    viewArchive: "View full archive projects",
    items: {
      entitle: {
        title: "Entitle.",
        description:
          "A real-time access-control engine for SaaS products. Built to centralize subscription logic, feature entitlements, rollout rules, and access decisions through a scalable event-driven architecture. Features deterministic subscription state management, feature flags, audit logs, and a developer-focused access control API.",
        liveMask: "Access-Control Engine",
      },
      ulock: {
        title: "Ulock Proxy Service",
        description:
          "High-performance proxy service engineered in C# to ensure secure and reliable request routing. Focused on low-latency communication and resilience in distributed environments.",
        liveMask: "C# Proxy Service",
      },
      imoni: {
        title: "Imoni",
        description:
          "A comprehensive full-stack personal finance application built as a Progressive Web App (PWA). Features offline-first architecture with robust data synchronization, ensuring 100% functionality without internet access.",
        liveMask: "Offline-first Finance PWA",
      },
    },
  },

  // ---------- WRITING ----------
  writing: {
    heading: "Writing & Social",
  },

  // ---------- FOOTER ----------
  footer: {
    copy: "© 2026 Ivandro Neto. All rights reserved.",
  },

  // ---------- CV DATA ----------
  cv: {
    role: "Backend Software Engineer",
    summary:
      "Backend Software Engineer with 4+ years of experience building scalable backend systems in C#/.NET and Node.js. I design and maintain high-throughput APIs and data-intensive backend services — including a call-quality-control platform I led that processes 500K+ audio and chat interactions, SFTP-to-cloud media pipelines, and self-service IVRs — within a contact-center operation with 1,000+ employees handling 1M+ calls per day. Skilled in REST and GraphQL APIs, RabbitMQ messaging, Redis caching, SFTP and cloud-storage pipelines, and microservices. I collaborate closely with DevOps and product teams to ship reliable, secure, and fault-tolerant features in production.",
    interests:
      "Chess, Photography, Reading, Quality Time with Family & Friends, Mortal Kombat",

    // Tech skills categories (keys translated)
    techCategories: {
      languages: "Programming Languages",
      frameworks: "Frameworks & Libraries",
      tools: "Tools & Platforms",
    },

    // Education entries
    educations: [
      {
        institution: "ISPTEC",
        degree: "Computer Engineering",
      },
    ],

    // Certifications entries
    certifications: [
      {
        institution: "Grupo Nuveto",
        degree: "Five9 Administrator and Sigma",
      },
      {
        institution: "Rocketseat",
        degree: "Fundamentals of .NET",
      },
      {
        institution: "Udemy",
        degree: "Complete Software Engineering Course",
      },
    ],

    // Resumed (shorter) experience descriptions used in PDF
    experienceResumed: {
      ucall: {
        role: "Backend Engineer",
        seniority: "Mid-Level",
        company: "Ucall",
        description:
          "Backend engineer at a BPO with 1,000+ employees handling 1M+ calls per day. Led the backend of a 2-person team on a call-quality-control platform that processes 500K+ audio and chat interactions, with automatic supervisor/team-assistant rotation integrated with an attendance-control system. Built media pipelines importing audio into a local SFTP server and offloading recordings to cloud storage (Wasabi), plus self-service IVR solutions. Stack: C#/.NET, RabbitMQ, Redis, REST & GraphQL APIs.",
      },
      bytebooster: {
        role: "Co-founder & Tech Lead",
        seniority: "C-Level",
        company: "Bytebooster",
        description:
          "Co-founder & Tech Lead driving technical strategy and software architecture. Design and deliver scalable, value-driven software solutions aligned with real business needs, and guide engineering decisions from architecture through delivery.",
      },
      risingsystems: {
        role: "Software Developer",
        seniority: "Mid-Level",
        company: "RisingSystems",
        description:
          "Built and maintained robust software solutions, optimizing application performance with C#, .NET Core, SQL Server, and MongoDB. Engineered scalable backends for high-traffic systems, improving database efficiency and query performance. Collaborated cross-functionally to align architecture with business goals while ensuring high availability and security. Refactored legacy code, reducing technical debt and improving maintainability.",
      },
      spacium: {
        role: "Frontend Developer",
        seniority: "Mid-Level",
        company: "SPACIUM",
        description:
          "Built responsive frontend applications with Next.js, TypeScript, Tailwind CSS, and React. Improved frontend performance and integrated backend APIs in close collaboration with backend and design teams, contributing to a cleaner, more maintainable component architecture.",
      },
      freelance: {
        role: "Full Stack Developer",
        seniority: "Junior",
        company: "Freelance",
        description:
          "Delivered end-to-end web applications for startups using React, Node.js, Express.js, and PostgreSQL. Designed and deployed scalable architectures supporting business growth and operational efficiency. Improved user engagement through responsive UI/UX and performance optimizations, delivering tailored, maintainable solutions aligned with client needs.",
      },
    },

    languages: [
      {
        language: "Portuguese",
        level: "Fluent",
      },
      {
        language: "English",
        level: "C1",
      },
      {
        language: "German",
        level: "Learning",
      },
    ],

    // sidebar labels
    labels: {
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      linkedin: "Linked",
      github: "Github",
      blog: "Blog",
      web: "Web",
      summary: "Professional Summary",
      education: "Education",
      certifications: "Certifications",
      skills: "Skills",
      languages: "Languages",
      interests: "Interests",
      experience: "Experience",
      selectedProjects: "Selected Projects",
      tech: "Tech",
    },
  },

  // ---------- ARCHIVE ----------
  archive: {
    heading: "All Projects",
    backLabel: "Ivandro Neto",
    columns: {
      year: "Year",
      project: "Project",
      madeAt: "Made at",
      builtWith: "Built with",
      link: "Link",
    },
    madeAt: {
      personalProject: "Personal Project",
      personalStudy: "Personal Study",
      universityProject: "University Project",
    },
    descriptions: {
      orderManagement:
        "Web API built with C# and .NET Core for managing orders and products.",
      templify:
        "Full-stack templating platform. Web version is functional (demo mode), backend in TypeScript/Node.js.",
      designPatterns:
        "Implementation of various software design patterns demonstrating architectural best practices.",
      timeTower: "Match-3 puzzle game developed using the MonoGame framework.",
      xpto: "Condominium management system modeling focusing on OOP principles and data persistence.",
    },
  },

  // ---------- UI ----------
  ui: {
    langSwitcherLabel: "Language",
  },
} as const;

// Recursively replace all leaf string literal types with `string`
// so other locales can assign their own strings without type errors.
type DeepString<T> = T extends readonly (infer U)[]
  ? readonly DeepString<U>[]
  : T extends Record<string, unknown>
    ? { readonly [K in keyof T]: DeepString<T[K]> }
    : string;

export type Translations = DeepString<typeof en>;
