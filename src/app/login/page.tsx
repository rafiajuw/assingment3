import React from 'react'

    

export default function LoginForm() {
  return (

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="********"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-400 text-white p-2 rounded hover:bg-red-300"
        >
          Login
        </button>
      </form>
      
    </div>
  )
  