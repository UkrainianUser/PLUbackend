import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allPluPath = path.join(__dirname, "AllPLU.json");

export const getAllPlu = async () => {
  const data = await fs.readFile(allPluPath, "utf-8");
  return JSON.parse(data);
};

export const getByIdPlu = async (id) => {
  const allPlu = await getAllPlu();
  const result = allPlu.find((item) => item.id === id);
  return result || null;
};
