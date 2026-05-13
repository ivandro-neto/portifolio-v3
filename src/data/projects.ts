export interface Project {
  title: string;
  description: string;
  liveLink: string;
  liveMask: string;
  logo: string;
  repo: string;
  techs: string[];
  imgURL?: string;
}

export const projects: Project[] = [
  {
    title: "Entitle.",
    description: `A real-time access and monetization engine for SaaS products. Built to centralize subscription logic, feature entitlements, rollout rules, and access decisions through a scalable event-driven architecture. Features deterministic subscription state management, feature flags, audit logs, and a developer-focused access control API.`,

    liveLink: "https://entitle-psi.vercel.app/",
    liveMask: "Access & Monetization Engine",
    logo: "projects/logo/entitle-logo.svg",
    repo: "",
    techs: [
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Prisma",
      "React",
      "TanStack Router",
      "TailwindCSS",
      "REST API",
      "Feature Flags",
      "Event-Driven Architecture",
    ],
  },
  {
    title: "Ulock Proxy Service",
    description: `High-performance proxy service engineered in C# to ensure secure and reliable request routing. Focused on low-latency communication and resilience in distributed environments.`,

    liveLink: "https://github.com/ivandro-neto/ulock-proxy-service",
    liveMask: "C# Proxy Service",
    logo: "projects/logo/ulock-logo.svg",
    repo: "https://github.com/ivandro-neto/ulock-proxy-service",
    techs: ["C#", ".NET", "Proxy Pattern", "Network Security"],
  },
  {
    title: "Imoni",
    description: `A comprehensive full-stack personal finance application built as a Progressive Web App (PWA). Features offline-first architecture with robust data synchronization, ensuring 100% functionality without internet access.`,

    liveLink: "https://imoni.it.ao/",
    liveMask: "Offline-first Finance PWA",
    logo: "projects/logo/imoni-logo.svg",
    repo: "",
    techs: [
      "React",
      "TypeScript",
      "PWA",
      "IndexedDB",
      "Workbox",
      "Node.js",
      "TailwindCSS",
    ],
  },
];
