export default async function Photopage({params }: {params : Promise<{id : string}>}) {
    const { id } = await params
    return (
        <>
            <h1 className="w-2/4 h-50 bg-gray-500 flex justify-center items-center">Photo Page {id}</h1>
        </>
    )
}