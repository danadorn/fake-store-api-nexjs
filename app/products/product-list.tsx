import { CardImage } from "@/components/fs-card/ProduceCard"
import { ProductResponse } from "@/lib/type/productResponse";
import Link from "next/link";

// create function to gey data from api
const BASE_URL = process.env.NEXT_PUBLIC_API

async function loadProduct() {
    // const Response = await fetch(``)
    const Response = await fetch(`${BASE_URL}/api/v1/products/`) ;
    const products: ProductResponse[] = await Response.json();
    console.log(products)
    return products;

}
export default async function ProductList() {
    const products = await loadProduct();
    return (
        <main className="container mx-auto">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">

                {
                    products.map((products, index) => (
                       <Link href={`/products/${products.id}`} key={index}>      
                           <CardImage 
                            key= {index}
                            images={[products.images[0]]}
                            title={products.title}
                            description={products.description}
                            price={products.price}
                        />
                        </Link>
                    ))
                }
                {/* <CardImage
                
                /> */}
            </section>
        </main>
    )
}