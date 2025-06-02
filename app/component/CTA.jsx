"use client"
import React from 'react'

const CTA = () => {
  return (
    <div className="bg-indigo-700 text-white py-12 px-4 text-center space-y-6">
      <h2 className="text-3xl font-semibold">Save time, save money!</h2>
      <p className="text-lg text-indigo-100">Sign up and we’ll send the best deals to you</p>
      <div className="flex justify-center items-center gap-2 flex-wrap max-w-lg mx-auto">
        <input
          type="email"
          placeholder="Your Email"
          className="px-4 py-3 rounded-md w-64 text-black focus:outline-none"
        />
        <button className="bg-indigo-900 hover:bg-indigo-800 text-white px-5 py-3 rounded-md font-medium transition">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default CTA;
