import { JWT_TOKEN_NAME } from "$lib/constants";
import { authenticateUser } from "$lib/server/auth";

export const handle = async ({ event, resolve }) => {
  console.log("hooks");
  const { cookies, request } = event;
  const userToken = cookies.get(JWT_TOKEN_NAME);

  event.locals.user = null;
  event.locals.authToken = null;

  if (userToken) {
    event.locals.user = await authenticateUser(userToken);
    event.locals.authToken = userToken;
  }

  console.log("hooks localUser", event.locals.user?.id);

  return resolve(event);
};
