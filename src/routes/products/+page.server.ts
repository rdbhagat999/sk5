import { productListfn } from "$lib/api/productAPI";
import type { ProductModel } from "$lib/model/product.model";
import { handleLoginRedirect } from "$lib/utils";
import { fail, redirect } from "@sveltejs/kit";

export async function load({ parent, url, locals }) {
  console.log("products LOAD");

  if (!locals.user || !locals.authToken) {
    throw redirect(302, handleLoginRedirect(url));
  }

  let products = [] as ProductModel[];

  const resp = await productListfn(locals.authToken);
  const result = await resp.json();

  if (!resp.ok) {
    if (resp.status == 401) {
      return redirect(302, `/login?error=${result?.message}`);
    } else if (resp.status == 404) {
      return {
        status: 404,
        products,
        message: `Failed to fetch product list`,
      };
    } else if (resp.status == 400) {
      return {
        status: 400,
        products,
        message: `Failed to fetch product list`,
      };
    }
  }

  // console.log(result);

  if (result?.products?.length) {
    products = result?.products;
  }

  return {
    status: 200,
    products,
    message: "product list fetched successfully",
  };
}
