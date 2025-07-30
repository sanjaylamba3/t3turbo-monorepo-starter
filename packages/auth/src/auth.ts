// import { schema } from "@/db/schema";
import { cache } from "react";
import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { bearer } from "better-auth/plugins";

import { db } from "@acme/db/client";

import { authEnv } from "../env";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  baseURL: authEnv().NEXT_PUBLIC_BETTER_AUTH_URL,
  secret: authEnv().BETTER_AUTH_SECRET,
  // ✅ Enable Email & Password Authentication
  emailAndPassword: {
    enabled: true,
    // Optional: Require email verification
    // requireEmailVerification: true,
    // sendVerificationEmail: async ({ user, url, token }, request) => {
    //   // Implement your email sending logic here
    //   console.log(`Send verification email to ${user.email}: ${url}`);
    // },
    //   requireEmailVerification: true,
  },
  plugins: [
    bearer(),
    // oAuthProxy({
    //   /**
    //    * Auto-inference blocked by https://github.com/better-auth/better-auth/pull/2891
    //    */
    //   currentURL: options.baseUrl,
    //   productionURL: options.productionUrl,
    // }),
    expo(),
    nextCookies(),
  ],
  trustedOrigins: ["expo://", "https://*.expo.dev", "localhost", "127.0.0.1"],
});

export type Auth = typeof auth;

export const getSession = cache(
  async (headers?: Record<string, string> | Headers) => {
    return auth.api.getSession({
      headers:
        headers instanceof Headers ? headers : new Headers(headers ?? {}),
    });
  },
);
export type Session = typeof auth.$Infer.Session;
