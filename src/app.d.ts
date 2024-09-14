// See https://kit.svelte.dev/docs/types#app

import type { UserModel } from "$lib/model/user.model";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user: UserModel | null;
      authToken: string | null;
    }
    interface PageData {}
    interface PageState {}
    // interface Platform {}
  }
}

export {};
