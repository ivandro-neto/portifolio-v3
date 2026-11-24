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
    p2: "Currently, I'm a Backend Engineer at Ucall, a contact-center operation with 1,000+ employees handling 1M+ calls per day. There I led the backend of a 2-person team building a call-quality-control platform that processes 500K+ audio and chat interactions. Before that, I co-founded Bytebooster as CTO, where we built Kilunga, an agritech product that drew interest from players in the agriculture sector in Angola and abroad.",
    p2_ucall_label: "Ucall",
    p3: "I'm comfortable working in international, distributed teams, collaborating closely with DevOps and product stakeholders. I value clean code, solid architecture, and continuous improvement, and I aim to deliver solutions that are secure and reliable while driving real business value.",
    p4: "Outside of work, I find inspiration in connecting with the tech community, continuous learning, and exploring new technologies.",
  },

  // ---------- EXPERIENCE ----------
  experience: {
    heading: "Experience",
    resumeBtn: "View full résumé",
    resumeBtnAts: "Download ATS-friendly résumé",
    generatingBtn: "Generating PDF...",
    cvFocusLabel: "Résumé focus",
    cvFocusDotnet: "C# / .NET",
    cvFocusNode: "Node.js / TypeScript",
    // Full experience list (translatable parts only)
    items: {
      spacium: {
        role: "Frontend Developer → Team Lead",
        seniority: "Founding Team",
        company: "SPACIUM",
        description:
          "Unpaid role in the second founding team of SPACIUM, a new department that supports entrepreneurs and startups. I started on frontend and design and was later appointed to lead the whole team. I worked on building scalable, high-performance web applications. I designed responsive, intuitive user interfaces and partnered closely with design and backend teams to keep the product experience consistent end to end. Using Next.js, TypeScript, Tailwind CSS, and React, I raised the site's Lighthouse performance score from 54 to 98 and contributed to a cleaner, more maintainable component architecture.",
      },
      risingsystems: {
        role: "Software Developer",
        seniority: "Freelance",
        company: "RisingSystems (partnership)",
        description:
          "Freelance partnership with another developer under the working name RisingSystems, taking on client projects as they came up. Our delivered project was the corporate website of Somobes (Sociedade Moçambicana de Bens e Serviços), a logistics group in Mozambique, presenting the company and its services. I built the site from the assets and requirements provided by the client's project lead and delivered it in late 2024, handing over the project and ownership of the code repositories to the client.",
      },
      freelance: {
        role: "Full Stack Developer",
        seniority: "Junior",
        company: "Freelance",
        description:
          "As a Freelance Full Stack Developer, I delivered end-to-end web applications for startups, combining frontend and backend technologies (React, Node.js, Express.js, and PostgreSQL) to build solutions that fit each client's needs. I designed scalable architectures, optimized system performance, and built responsive interfaces that strengthened clients' digital presence.",
      },
      ucall: {
        role: "Backend Engineer",
        seniority: "Mid-Level",
        company: "Ucall",
        description:
          "Backend engineer on communication and contact-center systems built with C# and .NET, at a BPO with 1,000+ employees that handles 1M+ calls per day across its operations. I led the backend of a 2-person team building a call-quality-control platform that processes 500K+ audio and chat interactions, with features like automatic rotation of supervisors and team assistants integrated with an attendance-control system. I also built media pipelines that import audio into a local SFTP server and offload recordings to cloud storage (Wasabi), and developed self-service IVR solutions. Day-to-day I work with RabbitMQ for message-based workflows, Redis for low-latency critical paths, and collaborate closely with DevOps to keep systems stable under real-world load.",
      },
      wahitech: {
        role: "Backend Developer",
        seniority: "Freelance",
        company: "Wahitech",
        description:
          "Backend developer on a two-person freelance team (backend + Vue.js frontend) building a subscription-based financial dictionary platform, where companies and individuals look up financial terms and content. I built the ASP.NET Core (.NET 8) API in a Clean Architecture layout with EF Core and SQL Server: Identity with JWT access and refresh tokens, subscription plans with shared search quotas across sub-accounts, in-memory caching with targeted invalidation, payments and discount coupons, support tickets, and a small CMS for the public site. I also built the email integration (SMTP via MailKit, working with Outlook and Google accounts) and SMS notifications, S3-compatible object storage for uploads, and Docker deployments through GitHub Actions.",
      },
      bytebooster: {
        role: "Co-founder & CTO",
        seniority: "C-Level",
        company: "Bytebooster",
        description:
          "Co-founder and CTO of an early-stage startup, started in late 2022 and formally registered in 2023. I led technical strategy and software architecture and built Kilunga, an agritech product that drew interest from players in the agriculture sector in Angola and abroad. The company did not reach its first paid contract and the founders parted ways in 2026.",
      },
    },
    presentLabel: "Present",
  },

  // ---------- PROJECTS ----------
  projects: {
    heading: "Projects",
    viewArchive: "View full archive projects",
    items: {
      orus: {
        title: "ORUS",
        description:
          "A product I founded and build on my own: a self-hosted infrastructure reliability platform that turns raw server and application signals into one evidence-backed incident, works out which team owns it and alerts only that team, then tracks acknowledgement, escalation and recovery. A .NET 10 agent runs on Linux and Windows servers (about 58 MB of RAM and 1% CPU), authenticates with ECDSA P-256 keys and certificate pinning, and buffers data in a bounded SQLite outbox, so a server outage replays with no gaps or duplicates. The server ingests metrics into daily-partitioned PostgreSQL tables, forecasts disk exhaustion, and keeps an append-only audit log behind mandatory TOTP login. Designed through 8 architecture decision records and a threat model, with signed releases, integration tests on real PostgreSQL, and a bilingual sales site. Piloted on real infrastructure.",
        // Shorter version used in the generated CV.
        cvDescription:
          "Self-hosted infrastructure reliability platform that I founded and build: it turns server and application signals into one evidence-backed incident, routes it to the owning team, and tracks escalation and recovery. A .NET 10 agent for Linux and Windows (about 58 MB of RAM and 1% CPU) buffers data in a SQLite outbox so outages replay without gaps; PostgreSQL backend, signed releases, TOTP-protected audit log. Piloted on real infrastructure.",
        liveMask: "Incident Routing & Observability",
      },
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
          "A full-stack personal finance application built as a Progressive Web App (PWA). Features an offline-first architecture with reliable data synchronization, so it works fully even without an internet connection.",
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
      "Backend Software Engineer with 4+ years of experience building scalable backend systems in C#/.NET and Node.js. I design and maintain high-throughput APIs and data-intensive backend services within a contact-center operation with 1,000+ employees handling 1M+ calls per day, including a call-quality-control platform I led that processes 500K+ audio and chat interactions, SFTP-to-cloud media pipelines, and self-service IVRs. Skilled in REST and GraphQL APIs, RabbitMQ messaging, Redis caching, SFTP and cloud-storage pipelines, and microservices. I collaborate closely with DevOps and product teams to ship reliable, secure, and fault-tolerant features in production.",
    interests:
      "Chess, Photography, Reading, Quality Time with Family & Friends, Mortal Kombat",

    // Node.js / TypeScript focus of the generated CV (same experience,
    // different emphasis). See src/data/cv-focus.ts.
    focus: {
      node: {
        role: "Backend Software Engineer (Node.js / TypeScript)",
        summary:
          "Backend Software Engineer with 4+ years of experience building scalable backend systems in TypeScript/Node.js and C#/.NET. TypeScript is my longest-standing and strongest language: I design new services from scratch and own the full software development lifecycle. I build and maintain high-throughput APIs and data-intensive backend services within a contact-center operation with 1,000+ employees handling 1M+ calls per day, including a call-quality-control platform I led that processes 500K+ audio and chat interactions, SFTP-to-cloud media pipelines, and self-service IVRs. Skilled in Node.js, NestJS, Express, Prisma, PostgreSQL, Redis, RabbitMQ, REST and GraphQL APIs, and event-driven microservices.",
        experienceDescriptions: {
          ucall:
            "Backend engineer at a BPO with 1,000+ employees handling 1M+ calls per day. Led the backend of a 2-person team on a call-quality-control platform that processes 500K+ audio and chat interactions, with automatic supervisor/team-assistant rotation integrated with an attendance-control system. Built media pipelines importing audio into a local SFTP server and offloading recordings to cloud storage (Wasabi), plus self-service IVR solutions. I design the architecture of new projects from scratch and own their full lifecycle, choosing between TypeScript/Node.js and C#/.NET per project. Stack: TypeScript, Node.js, C#/.NET, RabbitMQ, Redis, REST & GraphQL APIs.",
          bytebooster:
            "Co-founder and CTO of an early-stage startup, started in late 2022 and formally registered in 2023. Led technical strategy and architecture and built Kilunga, an agritech product in Node.js and TypeScript that drew interest from agriculture players in Angola and abroad. Company wound down in 2026 before its first paid contract.",
        },
      },
    },

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
        degree: "Computer Engineering (in progress, 2021 – present)",
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
      wahitech: {
        role: "Backend Developer",
        seniority: "Freelance",
        company: "Wahitech",
        description:
          "Backend developer (freelance, Mar–Sep 2025) on a subscription-based financial dictionary platform for companies and individuals. Built the .NET 8 API (Clean Architecture, EF Core, SQL Server): JWT auth with refresh tokens, plans with shared quotas across sub-accounts, in-memory caching with targeted invalidation, payments, SMTP email integration (Outlook/Google) and SMS notifications, S3-compatible storage, Docker deploys via GitHub Actions.",
      },
      bytebooster: {
        role: "Co-founder & CTO",
        seniority: "C-Level",
        company: "Bytebooster",
        description:
          "Co-founder and CTO of an early-stage startup, started in late 2022 and formally registered in 2023. Led technical strategy and architecture and built Kilunga, an agritech product that drew interest from agriculture players in Angola and abroad. Company wound down in 2026 before its first paid contract.",
      },
      risingsystems: {
        role: "Software Developer",
        seniority: "Freelance",
        company: "RisingSystems (partnership)",
        description:
          "Freelance partnership with another developer. Built and delivered the corporate website of Somobes (Sociedade Moçambicana de Bens e Serviços), a logistics group in Mozambique, from the client's assets and requirements, handing over the project and repository ownership to the client (2024).",
      },
      spacium: {
        role: "Frontend Developer → Team Lead",
        seniority: "Founding Team",
        company: "SPACIUM",
        description:
          "Unpaid role in the second founding team of SPACIUM's startup-support department; later led the whole team. Built responsive frontend applications with Next.js, TypeScript, Tailwind CSS, and React. Raised the site's Lighthouse performance score from 54 to 98 and integrated backend APIs in close collaboration with backend and design teams, contributing to a cleaner, more maintainable component architecture.",
      },
      freelance: {
        role: "Full Stack Developer",
        seniority: "Junior",
        company: "Freelance",
        description:
          "Delivered end-to-end web applications for startups using React, Node.js, Express.js, and PostgreSQL. Designed and deployed scalable architectures supporting business growth and operational efficiency. Built responsive UI/UX with attention to performance, delivering custom, maintainable solutions aligned with client needs.",
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
      linkedin: "LinkedIn",
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
      timeTower: "Puzzle game with an online leaderboard, built in C# with the MonoGame framework (game client, TypeScript leaderboard server and web page) for the Software Engineering course.",
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
