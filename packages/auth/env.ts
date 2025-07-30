import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

export function authEnv() {
  return createEnv({
    server: {
      //   AUTH_DISCORD_ID: z.string().min(1),
      //   AUTH_DISCORD_SECRET: z.string().min(1),
      BETTER_AUTH_SECRET:
        process.env.NODE_ENV === "production"
          ? z.string().min(1)
          : z.string().min(1).optional(),
      BETTER_AUTH_URL: z.url(),
      NODE_ENV: z.enum(["development", "production"]).optional(),
    },
    client: {
      NEXT_PUBLIC_BETTER_AUTH_URL: z.string().nonempty(),
    },
    experimental__runtimeEnv: {
      NEXT_PUBLIC_BETTER_AUTH_URL:
        process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    },
    skipValidation:
      !!process.env.CI || process.env.npm_lifecycle_event === "lint",
  });
}
