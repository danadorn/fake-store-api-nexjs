"use client";

import { ProductRespone } from "@/lib/type/productResponse";
import { use } from "react";
import Link from "next/link";
import { CardImage } from "./ProduceCard";

export default function ProductListClient({fetchProducts}: {fetchProducts: Promise<ProductRespone[]>}){
    //received data from server to client component
    const products = use(fetchProducts);
    console.log(products)
    return(
        <>
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
        </>
    )
}