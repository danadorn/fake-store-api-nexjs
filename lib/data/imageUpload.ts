const baseAPI = process.env.NEXT_PUBLIC_API;

export async function ImageUpload(images: FormData) {
    const res = await fetch(`${baseAPI}/api/v1/files/upload`, {
        method: "POST",
        body: images
    });
    return await res.json();
}