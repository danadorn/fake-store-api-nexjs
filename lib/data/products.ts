import { ProductRequest } from "../type/productResponse";


const baseAPI = process.env.NEXT_PUBLIC_API; 

export default async function getProducts() {
  const res = await fetch(`${baseAPI}/api/v1/products`, {
    method: "GET",
    headers: {
        "content-type": "application/json",
    }
  });
  const data = await res.json();
  return data;
}

export async function InsertProduct(product: ProductRequest) {
  const res = await fetch(`${baseAPI}/api/v1/products`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  const data = await res.json();
  return data;
}