import { Suspense } from "react";
import ProductList from "./product-list";
import ProduceLoading from "../users/loading";

export default function ProductPage() { 
    return (
        <Suspense fallback={<ProduceLoading/>}>
            <ProductList/>
        </Suspense>
    )
}










