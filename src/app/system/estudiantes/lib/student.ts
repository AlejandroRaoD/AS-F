import db from "./db"; // Asegúrate de que la ruta es correcta

export const getStudentCount = async () => {
  const client = await db;
  const count = await client.db().collection("students").countDocuments();
  return count;
};