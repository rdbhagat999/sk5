export async function load({ params, cookies, locals }) {
  console.log("Layout LOAD");
  console.log("Layout localUser", locals.user?.id);

  return {
    user: locals.user,
    authToken: locals.authToken,
  };
}
