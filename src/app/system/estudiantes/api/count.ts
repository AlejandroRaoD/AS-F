import { NextApiRequest, NextApiResponse } from "next";
import { getStudentCount } from "../lib/student"; // Ajustar la ruta según la estructura de tu proyecto

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const count = await getStudentCount();
    res.status(200).json({ count });
  } catch (error) {
    res.status(500).json({ error: "Error fetching student count" });
  }
}