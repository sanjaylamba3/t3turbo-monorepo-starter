import { Pool } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";

import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  pool: Pool | undefined;
};

// Option 1: Simple neon connection (supports transactions)
// const sql = neon(process.env.POSTGRES_URL!);
// export const db = drizzle(sql, { schema });

// Option 2: Pool connection (better for production and development)
const pool =
  globalForDb.pool ?? new Pool({ connectionString: process.env.POSTGRES_URL });

if (process.env.NODE_ENV !== "production") globalForDb.pool = pool;

export const db = drizzle(pool, {
  schema,
  casing: "snake_case", // Optional: converts camelCase to snake_case
});
