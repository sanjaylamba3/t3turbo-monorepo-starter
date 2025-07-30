// import type { BetterAuthOptions } from "better-auth";
// import { expo } from "@better-auth/expo";
// import { betterAuth } from "better-auth";
// import { drizzleAdapter } from "better-auth/adapters/drizzle";
// import { nextCookies } from "better-auth/next-js";
// import { oAuthProxy } from "better-auth/plugins";

// import { db } from "@repo/db/client";

// export function initAuth(options: {
//   baseUrl: string;
//   productionUrl: string;
//   secret: string | undefined;
//   //   discordClientId: string;
//   //   discordClientSecret: string;
//   //   googleClientId: string;
//   //   googleClientSecret: string;
// }) {
//   const config = {
//     database: drizzleAdapter(db, {
//       provider: "pg",
//     }),
//     // ✅ Enable Email & Password Authentication
//     emailAndPassword: {
//       enabled: true,
//       // Optional: Require email verification
//       // requireEmailVerification: true,
//       // sendVerificationEmail: async ({ user, url, token }, request) => {
//       //   // Implement your email sending logic here
//       //   console.log(`Send verification email to ${user.email}: ${url}`);
//       // },
//       //   requireEmailVerification: true,
//     },
//     baseURL: options.baseUrl,
//     secret: options.secret,
//     plugins: [
//       oAuthProxy({
//         /**
//          * Auto-inference blocked by https://github.com/better-auth/better-auth/pull/2891
//          */
//         currentURL: options.baseUrl,
//         productionURL: options.productionUrl,
//       }),
//       expo(),
//       nextCookies(),
//     ],
//     // ✅ Replace Discord with Google
//     // socialProviders: {
//     //   google: {
//     //     clientId: options.googleClientId,
//     //     clientSecret: options.googleClientSecret,
//     //     redirectURI: `${options.productionUrl}/api/auth/callback/google`,
//     //     // Optional: Request additional scopes
//     //     scope: ["email", "profile"],
//     //     // Optional: Always ask to select account
//     //     // prompt: "select_account",
//     //   },
//     // },
//     trustedOrigins: ["expo://"],
//   } satisfies BetterAuthOptions;

//   return betterAuth(config);
// }

// export type Auth = ReturnType<typeof initAuth>;
// export type Session = Auth["$Infer"]["Session"];

export * from "./auth";
export type { Session } from "./auth";

// export * from "./constant";
