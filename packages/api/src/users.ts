"use server";

import { auth } from "@repo/auth";

// import { env } from "~/env";

// const baseUrl =
//   env.VERCEL_ENV === "production"
//     ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
//     : env.VERCEL_ENV === "preview"
//       ? `https://${env.VERCEL_URL}`
//       : "http://localhost:3000";
// const auth = initAuth({
//   baseUrl,
//   productionUrl: `https://${env.VERCEL_PROJECT_PRODUCTION_URL ?? "turbo.t3.gg"}`,
//   secret: env.BETTER_AUTH_SECRET,
//   //   discordClientId: env.AUTH_DISCORD_ID,
//   //   discordClientSecret: env.AUTH_DISCORD_SECRET,
// });

export const signIn = async (email: string, password: string) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return {
      success: true,
      message: "Signed in successfully",
    };
  } catch (error) {
    const e = error as Error;
    return {
      success: false,
      message: e.message || "Failed to sign in",
    };
  }
};

export const signUp = async (
  email: string,
  password: string,
  username: string,
) => {
  try {
    await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: username,
      },
    });
    return {
      success: true,
      message: "Signed up successfully",
    };
  } catch (error) {
    const e = error as Error;

    return {
      success: false,
      message: e.message || "Failed to sign up",
    };
  }
};
