import { JWT_TOKEN_NAME } from "$lib/constants/index.js";
import { redirect } from "@sveltejs/kit";

export const actions = {
  default: async ({ cookies }) => {
    cookies.delete(JWT_TOKEN_NAME, { path: "/", maxAge: 0 });
    cookies.set(JWT_TOKEN_NAME, "", { path: "/", maxAge: 0 });
    throw redirect(302, "/login");
  },
};
