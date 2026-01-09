export interface ArchivedProject {
  year: string;
  title: string;
  madeAt: string;
  builtWith: string[];
  link: string;
  description?: string; // Keeping for potential tooltip or detailed view
}

export const archivedProjects: ArchivedProject[] = [
  {
    year: "2024",
    title: "OrderManagementSystem",
    madeAt: "Personal Project",
    builtWith: ["C#", ".NET Core", "Web API"],
    link: "https://github.com/ivandro-neto/OrderManagementSystem",
    description: "Web API built with C# and .NET Core for managing orders and products.",
  },
  {
    year: "2024",
    title: "Templify",
    madeAt: "Personal Project",
    builtWith: ["React", "Vite", "Tailwind CSS", "Node.js"],
    link: "https://github.com/ivandro-neto/Templify-web",
    description: "Full-stack templating platform. Web version is functional (demo mode), backend in TypeScript/Node.js.",
  },
  {
    year: "2023",
    title: "Design Patterns C#",
    madeAt: "Personal Study",
    builtWith: ["C#", "Design Patterns", "Architecture"],
    link: "https://github.com/ivandro-neto/Design-Patterns-package-projects---C-",
    description: "Implementation of various software design patterns demonstrating architectural best practices.",
  },
  {
    year: "2021",
    title: "TimeTower",
    madeAt: "University Project",
    builtWith: ["C#", "MonoGame", "Game Dev"],
    link: "https://github.com/ivandro-neto/TimeTowerGame",
    description: "Match-3 puzzle game developed using the MonoGame framework.",
  },
  {
    year: "2020",
    title: "XPTO Condominium",
    madeAt: "University Project",
    builtWith: ["Java", "OOP", "Architecture"],
    link: "https://github.com/ivandro-neto/XPTOCondominiumManagentSystem",
    description: "Condominium management system modeling focusing on OOP principles and data persistence.",
  },
];
