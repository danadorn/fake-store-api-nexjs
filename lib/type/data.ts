// insert product to api

import { ProductResponse } from "@/lib/type/productResponse";
import { BasicEvaluatedExpression } from "next/dist/compiled/webpack/webpack";

export default async function InsertProduct(product: ProductResponse) {
  const data = await fetch(`${BasicEvaluatedExpression}/api/v1/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
  },
    body: JSON.stringify(product)
})
}

// insert image to server