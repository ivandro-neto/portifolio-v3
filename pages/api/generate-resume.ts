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
  setContent: (html: string, options?: { waitUntil?: "load" | "domcontentloaded" | "networkidle0" | "networkidle2" }) => Promise<void>;
  pdf: (options?: { format?: "A4"; printBackground?: boolean }) => Promise<Buffer | Uint8Array>;
};


const compile = async (data: Record<string, unknown>): Promise<string> => {
  const filePath = path.resolve(process.cwd(), "pages/api/cv-template.hbs");
  const html = await fs.readFile(filePath, "utf-8");
  return Handlebars.compile(html)(data);
};

Handlebars.registerHelper("dataFormat", (value, format) => {
  return moment(value).format(format);
});
Handlebars.registerHelper("lt", (a, b) => a < b);


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const {
    name,
    links,
    summary,
    skills,
    experience,
    educations,
    projects,
    interests,
  } = req.body;

  let browser: BrowserLike | null = null;

  try {
    // Configuração do Puppeteer baseada no ambiente
    if (process.env.NODE_ENV === "production" || process.env.VERCEL_ENV === "production") {
      const chromium = require("@sparticuz/chromium");
      const puppeteerCore = require("puppeteer-core");

      browser = await puppeteerCore.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      }) as BrowserLike;
    } else {
      const puppeteer = require("puppeteer");
      browser = await puppeteer.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      }) as BrowserLike;
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
    });

    // Define o conteúdo da página
    await page.setContent(content, { waitUntil: "load" });

    // Gera o PDF e obtém diretamente o buffer, sem salvar em disco
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    // Envia o PDF como resposta
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=IvandroNeto-CV.pdf");
    // Cast to any to handle Buffer vs Uint8Array mismatch in types, though compatible at runtime
    res.end(pdfBuffer as any);

  } catch (error) {
    console.error("Erro ao gerar o CV:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: "Erro ao gerar o CV", details: errorMessage });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
