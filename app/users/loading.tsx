import { SkeletonCard } from "@/components/scalaton/ProductCardScalaton";

export default function ProduceLoading(){
    return (
        <main className="container mx-auto">
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3">
                {
                    // Array.from({ length: 15 }).map((_, index) => (
                    //     <SkeletonCard key={index} />
                    // ))

                    //difference way
                    [...Array(15)].map((_, index) => (
                        <SkeletonCard key={index} />
                    ))
                    
                }
            </section>
        </main>
    )
}