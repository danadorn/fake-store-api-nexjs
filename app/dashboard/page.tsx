import ProductForm from "@/components/form/product-form"
import Link from "next/link"
export default function Page() {
    return (
        <>
            <main>
                <h1>Dashboard</h1>
                <Link href={"/photos/1"}>View Photos</Link>
                <ProductForm />
            </main>
        </>
    )
}
