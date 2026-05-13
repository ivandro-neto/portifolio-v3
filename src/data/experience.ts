// Non-translatable experience metadata. Translatable fields (role, seniority,
// company display name, description) live in `src/i18n/{en,pt}.ts` under
// `experience.items.<id>` and `cv.experienceResumed.<id>`.

export type ExperienceId =
  | "spacium"
  | "risingsystems"
  | "freelance"
  | "ucall"
  | "bytebooster";

export interface ExperienceMeta {
  id: ExperienceId;
  period: string;
  skills: string[];
}

export const experiences: ExperienceMeta[] = [
  {
    id: "spacium",
    period: "2023 - 2024",
    skills: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
  },
  {
    id: "risingsystems",
    period: "2023 - 2025",
    skills: ["C#", ".NET Core", "SQL Server", "MongoDB"],
  },
  {
    id: "freelance",
    period: "2020 - 2022",
    skills: ["React", "Node.js", "Express.js", "PostgreSQL"],
  },
  {
    id: "ucall",
    period: "2025 - Present",
    skills: [
      "C#",
      ".NET",
      "GraphQL API",
      "REST API",
      "Redis",
      "RabbitMQ",
      "Distributed Systems",
      "Microservices",
    ],
  },
  {
    id: "bytebooster",
    period: "2023 - Present",
    skills: ["Technical Strategy", "Software Architecture", "Team Leadership"],
  },
];

// Order in which the resumed experience appears in the generated CV.
export const experiencesResumedOrder: ExperienceId[] = [
  "ucall",
  "bytebooster",
  "risingsystems",
  "spacium",
  "freelance",
];

export const experiencesResumedPeriods: Record<ExperienceId, string> = {
  ucall: "2025 - Present",
  bytebooster: "2023 - Present",
  risingsystems: "2023 - 2025",
  spacium: "2023 - 2024",
  freelance: "2020 - 2022",
};

// Tech-skill keys are translated via `cv.techCategories.<key>`. The values
// (concrete tech names) are not translated.
export const techCategories: Record<
  "languages" | "frameworks" | "tools",
  string[]
> = {
  languages: ["C#", "TypeScript", "JavaScript", "SQL"],
  frameworks: [".NET Core", "Node.js", "Express.js", "React"],
  tools: [
    "SQL Server",
    "MongoDB",
    "MySQL",
    "Docker",
    "PostgreSQL",
    "SQLite",
    "Redis",
    "RabbitMQ",
  ],
};
