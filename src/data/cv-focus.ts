import type { ProjectId } from "./projects";
import { techCategories } from "./experience";

// The generated CV comes in two focuses. The experience is the same in both;
// only the emphasis changes (title, summary, skill order, project order and a
// few experience lines, whose texts live in `cv.focus.node` in the i18n files).
export type CvFocus = "dotnet" | "node";

export const cvFocuses: CvFocus[] = ["dotnet", "node"];

export const techCategoriesByFocus: Record<CvFocus, typeof techCategories> = {
  dotnet: techCategories,
  node: {
    languages: ["TypeScript", "JavaScript", "C#", "SQL"],
    frameworks: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Prisma",
      "React",
      ".NET Core",
    ],
    tools: [
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "MongoDB",
      "MySQL",
      "SQL Server",
      "SQLite",
      "Docker",
      "SFTP",
      "Wasabi (S3)",
    ],
  },
};

export const projectOrderByFocus: Record<CvFocus, ProjectId[]> = {
  dotnet: ["orus", "entitle", "ulock", "imoni"],
  node: ["entitle", "orus", "imoni", "ulock"],
};
