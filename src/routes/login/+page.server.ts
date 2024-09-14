import { loginFn } from "$lib/api/authAPI";
import { JWT_TOKEN_NAME } from "$lib/constants";
import type { LoginResponse, UserModel } from "$lib/model/user.model";
import { authStore } from "$lib/stores/authStore.svelte";
import { fail, redirect } from "@sveltejs/kit";

export function load({ locals }) {
  console.log("Login LOAD");
  console.log("Login localUser", locals.user);

  return {
    user: locals.user,
  };
}

export const actions = {
  login: async ({ cookies, request, locals, url }) => {
    const redirectTo = url.searchParams.get("redirectTo");

    const data = await request.formData();
    const username = data.get("username");
    const password = data.get("password");

    // console.log(username, password);

    if (!username) {
      return fail(400, { username, missing: true });
    }

    if (!password) {
      return fail(400, { password, missing: true });
    }

    if (username && password) {
      const resp = await loginFn(username.toString(), password.toString(), 30);
      //   console.log(resp.ok);

      if (!resp.ok) {
        return fail(400, { username, incorrect: true });
      }

      if (resp.ok) {
        const result = (await resp.json()) as LoginResponse;

        // console.log(result);

        const authUser: UserModel = {
          email: result.email,
          firstName: result.email,
          gender: result.gender,
          id: result.id,
          image: result.image,
          lastName: result.lastName,
          username: result.username,
        };

        // const { updateAuthUser, updateAuthToken } = authStore();

        // updateAuthUser(authUser);
        // updateAuthToken(result.token);

        cookies.set(JWT_TOKEN_NAME, result.token, { path: "/" });

        if (redirectTo) {
          return redirect(302, `/${redirectTo?.slice(1)}`);
        }

        return redirect(302, "/products");
      }
    }
  },
  register: async ({ cookies, request }) => {},
};
