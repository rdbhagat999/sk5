export const productListfn = async (authToken: string) => {
  const resp = await fetch("https://dummyjson.com/auth/products", {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return resp;
};

export const fetchProductByIdfn = async (authToken: string, id: number) => {
  const resp = await fetch("https://dummyjson.com/auth/products/" + id, {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });
  return resp;
};
