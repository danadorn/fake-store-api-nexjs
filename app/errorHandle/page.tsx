'use client'

import { useActionState } from 'react'
import { createPost } from '../action'

export default function TestPage() {
  // state is the object returned from your action
  const [state, formAction, isPending] = useActionState(createPost, {
    message: '',
  })

  return (
    <div style={{ padding: '20px' }}>
      <h1>Test Server Function</h1>
      
      <form action={formAction}>
        <input 
          type="text" 
          name="title" 
          placeholder="Post Title" 
          required 
          style={{ color: 'black', padding: '5px' }}
        />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Sending...' : 'Create Post'}
        </button>
      </form>

      {/* This displays the return value from your 'use server' function */}
      {state?.message && (
        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>
          Server Response: {state.message}
        </p>
      )}
    </div>
  )
}