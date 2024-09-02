import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const loadMessages = (language) => {
  const filePath = path.join(__dirname, "locales", `${language}.json`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Language file not found: ${filePath}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
};
