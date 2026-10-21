import "dotenv/config";
import { defineConfig } from "prisma/config";

const databaseUrl = (
  globalThis as { process?: { env?: Record<string, string | undefined> } }
).process?.env?.DATABASE_URL;

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: databaseUrl
    ? { url: databaseUrl }
    : undefined,
});