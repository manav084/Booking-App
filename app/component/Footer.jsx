"use client"
import React from 'react'

const Footer = () => {
  const columns = [
    ['Countries', 'Regions', 'Cities', 'Districts', 'Airports', 'Hotels'],
    ['Homes', 'Apartments', 'Resorts', 'Villas', 'Hostels', 'Guest houses'],
    ['Unique places to stay', 'Reviews', 'Unpacked: Travel articles', 'Travel communities', 'Seasonal and holiday deals'],
    ['Car rental', 'Flight Finder', 'Restaurant reservations', 'Travel Agents'],
    ['Customer Service', 'Partner Help', 'Careers', 'Sustainability', 'Press center', 'Safety Resource Center', 'Investor relations', 'Terms & conditions']
  ];

  return (
    <footer className="bg-white text-indigo-700 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        {columns.map((group, idx) => (
          <ul key={idx} className="space-y-2">
            {group.map((item, i) => (
              <li key={i} className="hover:underline cursor-pointer">{item}</li>
            ))}
          </ul>
        ))}
      </div>
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} ManavSoft Booking.
      </div>
    </footer>
  )
}

export default Footer;
