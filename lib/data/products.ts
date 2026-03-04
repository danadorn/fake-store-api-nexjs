import { ProductRequest } from "../type/productResponse";
import axios from "axios";

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
  const res = await axios(`https://api.escuelajs.co/api/v1/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(product),
  });
  // const data = await res.json();
  return res;
}

export type CreateProduct = {
  title: string;
  price: number;
  description: string;
  categoryId: number;
  images: string[];
};

export async function uploadProduct(product: CreateProduct) {
  const res = await fetch(`${baseAPI}/api/v1/products/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Create product failed (${res.status}): ${text}`);
  }
  const data = await res.json();
  return data;
}
