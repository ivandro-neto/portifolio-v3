import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";
import path from "path";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const filePath = path.resolve(process.cwd(), "temp/IvandroNeto-CV.pdf");
  fs.rm(filePath, { force: true });
}
