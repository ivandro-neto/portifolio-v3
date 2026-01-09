import puppeteer from "puppeteer";
import Handlebars from "handlebars";
import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import moment from "moment";
import path from "path";

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

  try {
    // Inicia o Puppeteer com opções para melhorar performance
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
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

    await browser.close();

    // Envia o PDF como resposta
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=IvandroNeto-CV.pdf");
    res.end(pdfBuffer);
  } catch (error) {
    console.error("Erro ao gerar o CV:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    res.status(500).json({ error: "Erro ao gerar o CV", details: errorMessage });
  }
}
