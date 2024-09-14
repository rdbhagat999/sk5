import { fetchProductByIdfn } from "$lib/api/productAPI";
import type { ProductModel } from "$lib/model/product.model";
import { handleLoginRedirect } from "$lib/utils";
import { fail, redirect } from "@sveltejs/kit";

export async function load({ params, locals, url }) {
  console.log("Single product LOAD");

  if (!locals.user || !locals.authToken) {
    throw redirect(302, handleLoginRedirect(url));
  }

  const pid = params.pid;

  if (!pid) {
    fail(400, {
      message: "pid is required",
    });
  }

  let product: ProductModel | null = null;

  const resp = await fetchProductByIdfn(locals.authToken, +pid);
  const result = await resp.json();

  // console.log("resp.ok", resp.ok);

  if (!resp.ok) {
    if (resp.status == 401) {
      return redirect(302, `/login?error=${result?.message}`);
    } else if (resp.status == 404) {
      return {
        product: null,
        status: 404,
        message: `Failed to fetch product with id: ${pid}`,
      };
    }
  }

  if (result) {
    product = result as ProductModel;
  }

  return {
    product: result,
  };
}
