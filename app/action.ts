// app/action.ts
'use server'

export async function createPost(prevState: any, formData: FormData) {
  const title = formData.get('title')

  try {
    const res = await fetch('https://api.vercel.app', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ title }),
    })

    // 1. Check if the response is okay first
    if (!res.ok) {
      // Optional: Log the text to see the actual error (like a 404 page)
      const errorText = await res.text();
      console.error("Server Error Response:", errorText);
      
      return { message: 'Failed to create post (Server returned error)' }
    }

    // 2. Only parse JSON if the response was successful
    const json = await res.json()
    return { message: `Success! Created post ID: ${json.id}` }

  } catch (error) {
    // 3. Catch network-level errors
    return { message: 'Network error occurred' }
  }
}
