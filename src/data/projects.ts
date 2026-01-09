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
    title: "EventHub",
    description: `A scalable event management platform built with ASP.NET Core. Designed with a microservices-oriented mindset, featuring robust API endpoints, Docker containerization for easy deployment, and efficient data handling.`,

    liveLink: "https://github.com/ivandro-neto/EventHub",
    liveMask: "ASP.NET Core Event Platform",
    logo: "projects/logo/eventhub-logo.svg", // Placeholder
    repo: "https://github.com/ivandro-neto/EventHub",
    techs: ["C#", "ASP.NET Core", "Docker", "SQL Server", "REST API"],
  },
  {
    title: "Ulock Proxy Service",
    description: `High-performance proxy service engineered in C# to ensure secure and reliable request routing. Focused on low-latency communication and resilience in distributed environments.`,

    liveLink: "https://github.com/ivandro-neto/ulock-proxy-service",
    liveMask: "C# Proxy Service",
    logo: "projects/logo/ulock-logo.svg", // Placeholder
    repo: "https://github.com/ivandro-neto/ulock-proxy-service",
    techs: ["C#", ".NET", "Proxy Pattern", "Network Security"],
  },
  {
    title: "Imoni",
    description: `A comprehensive full-stack personal finance application built as a Progressive Web App (PWA). Features offline-first architecture with robust data synchronization, ensuring 100% functionality without internet access.`,

    liveLink: "https://imoni-app.vercel.app/",
    liveMask: "Offline-first Finance PWA",
    logo: "projects/logo/imoni-logo.svg", // Placeholder
    repo: "https://github.com/ivandro-neto/imoni-app",
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
