import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import Handlebars from "handlebars";
import moment from "moment";
import path from "path";

// Define a type for the browser/page interfaces to satisfy TS in both branches
type BrowserLike = {
  newPage: () => Promise<PageLike>;
  close: () => Promise<void>;
};

type PageLike = {
  setContent: (
    html: string,
    options?: {
      waitUntil?:
        | "load"
        | "domcontentloaded"
        | "networkidle0"
        | "networkidle2";
    },
  ) => Promise<void>;
  pdf: (options?: {
    format?: "A4";
    printBackground?: boolean;
  }) => Promise<Buffer | Uint8Array>;
};

// ─── i18n labels for the CV template ─────────────────────────────────────────
type Locale = "en" | "pt";

const cvLabels: Record<Locale, Record<string, string>> = {
  en: {
    role: "Backend Software Engineer",
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
  pt: {
    role: "Engenheiro de Software Backend",
    contact: "Contacto",
    email: "Email",
    phone: "Telefone",
    linkedin: "LinkedIn",
    github: "Github",
    blog: "Blog",
    web: "Web",
    education: "Formação",
    certifications: "Certificações",
    skills: "Competências",
    interests: "Interesses",
    experience: "Experiência",
    selectedProjects: "Projetos em Destaque",
    tech: "Tecnologias",
  },
};

// ─── Handlebars helpers ───────────────────────────────────────────────────────
Handlebars.registerHelper("dataFormat", (value, format) => {
  return moment(value).format(format);
});
Handlebars.registerHelper("lt", (a, b) => a < b);

// ─── Template compiler ────────────────────────────────────────────────────────
const compile = async (data: Record<string, unknown>): Promise<string> => {
  const filePath = path.resolve(process.cwd(), "pages/api/cv-template.hbs");
  const html = await fs.readFile(filePath, "utf-8");
  return Handlebars.compile(html)(data);
};

// ─── Handler ─────────────────────────────────────────────────────────────────
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const {
    lang = "en",
    name,
    links,
    summary,
    skills,
    experience,
    educations,
    projects,
    interests,
    certifications,
  } = req.body;

  const locale: Locale = lang === "pt" ? "pt" : "en";
  const labels = cvLabels[locale];

  let browser: BrowserLike | null = null;

  try {
    // Puppeteer setup based on environment
    if (
      process.env.NODE_ENV === "production" ||
      process.env.VERCEL_ENV === "production"
    ) {
      const chromium = require("@sparticuz/chromium");
      const puppeteerCore = require("puppeteer-core");

      browser = (await puppeteerCore.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      })) as BrowserLike;
    } else {
      const puppeteer = require("puppeteer");
      browser = (await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      })) as BrowserLike;
    }

    const page = await browser.newPage();

    const content = await compile({
      name,
      links,
      summary,
      skills,
      experience,
      educations,
      projects,
      interests,
      certifications,
      labels,
    });

    await page.setContent(content, { waitUntil: "load" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    const filename = `IvandroNeto-CV-${locale.toUpperCase()}.pdf`;

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", `attachment; filename=${filename}`);
    res.end(pdfBuffer as any);
  } catch (error) {
    console.error("Erro ao gerar o CV:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: "Erro ao gerar o CV", details: errorMessage });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
