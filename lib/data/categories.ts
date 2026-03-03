const baseApi = process.env.NEXT_PUBLIC_API_URL;

export async  function getCategories(){
    const res = await fetch(`${baseApi}/api/v1/categories`);
    return await res.json()
}

export async function insertCategory(data: { name: string; image: string }) {
  const res = await fetch(`${baseApi}/api/v1/categories`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}