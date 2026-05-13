// Non-translatable project metadata. Translatable fields (title, description,
// liveMask) live in `src/i18n/{en,pt}.ts` under `projects.items.<id>`.

export type ProjectId = "entitle" | "ulock" | "imoni";

export interface ProjectMeta {
  id: ProjectId;
  liveLink: string;
  logo: string;
  repo: string;
  techs: string[];
  imgURL?: string;
}

export const projects: ProjectMeta[] = [
  {
    id: "entitle",
    liveLink: "https://entitle-psi.vercel.app/",
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
    id: "ulock",
    liveLink: "https://github.com/ivandro-neto/ulock-proxy-service",
    logo: "projects/logo/ulock-logo.svg",
    repo: "https://github.com/ivandro-neto/ulock-proxy-service",
    techs: ["C#", ".NET", "Proxy Pattern", "Network Security"],
  },
  {
    id: "imoni",
    liveLink: "https://imoni.it.ao/",
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
