import { redirect } from "@sveltejs/kit";

export async function load({ params, cookies, locals }) {
  console.log("Layout LOAD");
  console.log("Layout localUser", locals.user?.id);

  if (!locals.user) {
    redirect(302, "/login");
  }

  return {
    user: locals.user,
  };
}
