import ProductListClient from "@/components/fs-card/product-list-client";
import { Metadata } from "next";
import fetchAllProducts from "@/lib/data/products";
export const metadata: Metadata = {
  title: "Homepage",
  description: "Welcome to our homepage! Explore our latest products, services, and updates. Stay connected with us for the best experience.",
};
export default function Home() {
  const products = fetchAllProducts();
  return (
    <ProductListClient fetchProducts={products} />
    
  );
}

