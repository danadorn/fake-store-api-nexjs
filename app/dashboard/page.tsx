import ProductForm from "@/components/form/product-form"
import { getCategories } from "@/lib/data/categories";
export default async function Page(){
    const categories = await getCategories();
    return (
        <>
            <main>
                <ProductForm categories={categories} />
            </main>
        </>
    )
}
