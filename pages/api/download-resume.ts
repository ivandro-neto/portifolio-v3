import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Método não permitido" });
    return;
  }

  // Defina o caminho do seu arquivo PDF
  const filePath = path.resolve(process.cwd(), "public/resume.pdf");

  try {
    // Lê o arquivo em buffer
    const fileBuffer = await fs.readFile(filePath);
    // Define os cabeçalhos para download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=resume.pdf");
    // Envia o arquivo como resposta
    res.status(200).end(fileBuffer);
  } catch (err) {
    console.error("Erro ao ler o arquivo:", err);
    res.status(500).json({ error: "Erro ao ler o arquivo" });
  }
}
