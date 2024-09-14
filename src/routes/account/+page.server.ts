import { handleLoginRedirect } from "$lib/utils";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals, url }) => {
  if (!locals.user || !locals.authToken) {
    throw redirect(302, handleLoginRedirect(url));
  }

  return {
    user: locals.user,
    status: 200,
    message: "User fetched successfully",
  };
};
