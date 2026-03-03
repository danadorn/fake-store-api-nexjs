import { ProductRespone } from "@/lib/type/productResponse"
import { use } from "react"


async function getProduct(id: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/v1/products/${id}`)
    const product = await res.json()
    return product
}


export default async function ProductDetaiPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const product: ProductRespone = await getProduct(id)
    return (
        <main>
            <h1>Product Detail Page</h1>
            <p>Product ID: {id}</p>
            <p>Product Name: {product.title}</p>
            <p>Product Price: {product.price}</p>
            <p>Product Description: {product.description}</p>
        </main>
    )
}