export const en = {
  // ---------- NAV ----------
  nav: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    writing: "Writing",
  },

  // ---------- HERO ----------
  hero: {
    role: "Backend Software Engineer",
    tagline:
      "Backend Software Engineer specialized in C# (.NET) and scalable, distributed systems. I design and build high-performance APIs and backend platforms.",
  },

  // ---------- ABOUT ----------
  about: {
    heading: "About",
    p1: "Backend Software Engineer specialized in C# (.NET) and scalable, distributed systems. I design and build high-performance APIs and backend platforms with a strong focus on scalability, low latency, security, and fault tolerance. I have hands-on experience with REST & GraphQL APIs, Redis, RabbitMQ, CI/CD pipelines, and cloud-ready architectures.",
    p2: "Currently, I work as a Backend Engineer at Ucall, where I lead backend initiatives focused on system performance and reliability. I'm also the Co-founder & CTO of Bytebooster, where I help design and deliver scalable software solutions aligned with real business needs.",
    p2_ucall_label: "Ucall",
    p3: "I'm comfortable working in international, distributed teams, collaborating closely with DevOps and product stakeholders. I value clean code, solid architecture, and continuous improvement. My goal is to deliver solutions that are not only robust and secure but also drive tangible business value.",
    p4: "Outside of work, I find inspiration in connecting with the tech community, continuous learning, and exploring new technologies.",
  },

  // ---------- EXPERIENCE ----------
  experience: {
    heading: "Experience",
    resumeBtn: "View full résumé",
    generatingBtn: "Generating PDF...",
  },

  // ---------- PROJECTS ----------
  projects: {
    heading: "Projects",
    viewArchive: "View full archive projects",
  },

  // ---------- WRITING ----------
  writing: {
    heading: "Writing & Social",
  },

  // ---------- FOOTER ----------
  footer: {
    copy: "© 2025 Ivandro Neto. All rights reserved.",
  },

  // ---------- CV DATA ----------
  cv: {
    role: "Backend Software Engineer",
    summary:
      "Backend Software Engineer with over 4 years of experience working mainly with C#/.NET and Node.Js. I build and maintain backend systems focused on performance, scalability, and reliability, especially for APIs and data-driven applications. I've worked with message queues like RabbitMQ, caching with Redis, and both REST and GraphQL APIs. I'm used to collaborating closely with DevOps and product teams to ship stable features and keep production systems running smoothly.",
    interests:
      "Chess, Photography, Reading, Quality Time with Family & Friends, Mortal Kombat",

    // sidebar labels
    labels: {
      contact: "Contact",
      email: "Email",
      phone: "Phone",
      linkedin: "Linked",
      github: "Github",
      blog: "Blog",
      web: "Web",
      education: "Education",
      certifications: "Certifications",
      skills: "Skills",
      interests: "Interests",
      experience: "Experience",
      selectedProjects: "Selected Projects",
      tech: "Tech",
    },
  },
} as const;

// Recursively replace all leaf string literal types with `string`
// so other locales can assign their own strings without type errors.
type DeepString<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ? DeepString<T[K]>
    : string;
};

export type Translations = DeepString<typeof en>;
