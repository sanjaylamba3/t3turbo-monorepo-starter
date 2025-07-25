import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: "../../.env" }); // Point to root .env file

if (!process.env.POSTGRES_URL) {
    throw new Error("Missing POSTGRES_URL");
  }

export default defineConfig({
  schema: "./src/schema.ts",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
  },
  casing: "snake_case",
//   tablesFilter: ["acme_*"], // Adjust table prefix as needed
});