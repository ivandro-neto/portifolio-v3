// Non-translatable archived-project metadata. Translatable fields (madeAt
// label and description) live in `src/i18n/{en,pt}.ts` under
// `archive.madeAt.<key>` and `archive.descriptions.<key>`.

export type ArchivedProjectId =
  | "orderManagement"
  | "templify"
  | "designPatterns"
  | "timeTower"
  | "xpto";

export type ArchivedMadeAtKey =
  | "personalProject"
  | "personalStudy"
  | "universityProject";

export interface ArchivedProject {
  id: ArchivedProjectId;
  year: string;
  title: string;
  madeAtKey: ArchivedMadeAtKey;
  builtWith: string[];
  link: string;
}

export const archivedProjects: ArchivedProject[] = [
  {
    id: "orderManagement",
    year: "2024",
    title: "OrderManagementSystem",
    madeAtKey: "personalProject",
    builtWith: ["C#", ".NET Core", "Web API"],
    link: "https://github.com/ivandro-neto/OrderManagementSystem",
  },
  {
    id: "templify",
    year: "2024",
    title: "Templify",
    madeAtKey: "personalProject",
    builtWith: ["React", "Vite", "Tailwind CSS", "Node.js"],
    link: "https://github.com/ivandro-neto/Templify-web",
  },
  {
    id: "designPatterns",
    year: "2023",
    title: "Design Patterns C#",
    madeAtKey: "personalStudy",
    builtWith: ["C#", "Design Patterns", "Architecture"],
    link: "https://github.com/ivandro-neto/Design-Patterns-package-projects---C-",
  },
  {
    id: "timeTower",
    year: "2021",
    title: "TimeTower",
    madeAtKey: "universityProject",
    builtWith: ["C#", "MonoGame", "Game Dev"],
    link: "https://github.com/ivandro-neto/TimeTowerGame",
  },
  {
    id: "xpto",
    year: "2020",
    title: "XPTO Condominium",
    madeAtKey: "universityProject",
    builtWith: ["Java", "OOP", "Architecture"],
    link: "https://github.com/ivandro-neto/XPTOCondominiumManagentSystem",
  },
];
