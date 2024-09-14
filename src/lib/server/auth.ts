import { fetchAuthUserFn } from "$lib/api/authAPI";
import { JWT_TOKEN_NAME } from "$lib/constants";
import type { UserModel } from "$lib/model/user.model";
import type { RequestEvent } from "@sveltejs/kit";

export const authenticateUser = async (userToken: string) => {
  // if the user token is not valid, return null
  // this is where you would check the user token against your database
  // to see if it is valid and return the user object
  const resp = await fetchAuthUserFn(userToken);

  if (!resp.ok) {
    return null;
  }

  const result = (await resp.json()) as UserModel;

  const user: UserModel = {
    email: result.email,
    firstName: result.firstName,
    gender: result.gender,
    id: result.id,
    image: result.image,
    username: result.username,
    lastName: result.lastName,
  };

  return user as UserModel;
};
