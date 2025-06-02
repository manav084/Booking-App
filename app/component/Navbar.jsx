"use client"
import React from 'react'


const Navbar = () => {
  return (
    <div className='bg-indigo-600 text-white px-8 py-6 space-y-8 shadow-md'>

      {/* Top Navbar Section */}
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl font-bold tracking-wide'>ManavSoft Booking</h2>
        <div className='flex gap-4'>
          <button className='bg-white text-indigo-600 font-medium px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition'>
            Register
          </button>
          <button className='bg-white text-indigo-600 font-medium px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 transition'>
            Login
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className='max-w-4xl mx-auto'>
        <ul className='flex justify-between text-sm font-medium text-indigo-100'>
          <li className='hover:text-white cursor-pointer transition'>Stays</li>
          <li className='hover:text-white cursor-pointer transition'>Flights</li>
          <li className='hover:text-white cursor-pointer transition'>Car Rentals</li>
          <li className='hover:text-white cursor-pointer transition'>Attractions</li>
          <li className='hover:text-white cursor-pointer transition'>Air Taxi</li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className='text-center space-y-4 max-w-2xl mx-auto'>
        <h1 className='text-3xl md:text-4xl font-semibold leading-snug'>
          Travel smarter with exclusive member discounts
        </h1>
        <p className='text-base text-indigo-100'>
          Become a part of ManavSoft Booking and unlock up to 10% extra savings on hotels, flights, and more — absolutely free.
        </p>
        <button className='bg-indigo-900 px-6 py-3 rounded-md font-semibold hover:bg-indigo-800 transition'>
          Sign In / Register
        </button>
      </div>

    </div>
  )
}

export default Navbar;
