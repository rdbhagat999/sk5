export const loginFn = async (
  username: string,
  password: string,
  expiresInMins: number = 30
) => {
  const resp = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
      expiresInMins,
    }),
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });

  return resp;
};

export const fetchAuthUserFn = async (accessToken: string) => {
  const resp = await fetch("https://dummyjson.com/auth/me", {
    method: "GET",
    headers: { Authorization: `Bearer ${accessToken}` },
    credentials: "include", // Include cookies (e.g., accessToken) in the request
  });

  return resp;
};
