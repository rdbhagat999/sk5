import type { UserModel } from "$lib/model/user.model";

export const authStore = () => {
  let user = $state<UserModel | null>(null);
  let token = $state<string | null>(null);

  const updateAuthUser = (userData: UserModel | null) => {
    user = userData;
  };

  const updateAuthToken = (authToken: string | null) => {
    token = authToken;
  };

  return {
    get authUser() {
      return user;
    },
    get token() {
      return token;
    },
    updateAuthToken,
    updateAuthUser,
  };
};
