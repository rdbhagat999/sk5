export type UserModel = {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
};

export interface LoginResponse extends UserModel {
  token: string;
  refreshToken: string;
}
