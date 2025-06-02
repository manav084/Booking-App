"use client"
import React from 'react'

// Featured Cities in India
const featuredCities = [
  {
    name: "Jaipur",
    count: "215 properties",
    img: "https://images.unsplash.com/photo-1585241936937-d23a65e4c110?auto=format&fit=crop&w=800&q=80", // Hawa Mahal
  },
  {
    name: "Goa",
    count: "689 properties",
    img: "https://images.unsplash.com/photo-1608889175118-93499ec1d161?auto=format&fit=crop&w=800&q=80", // Goa beach
  },
  {
    name: "Manali",
    count: "413 properties",
    img: "https://images.unsplash.com/photo-1579446234798-855c4cc89f4c?auto=format&fit=crop&w=800&q=80", // Himachal hills
  },
];

// Property Types
const propertyTypes = [
  {
    name: "Hotels",
    count: "2331 hotels",
    img: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Apartments",
    count: "1720 apartments",
    img: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Resorts",
    count: "1450 resorts",
    img: "https://images.pexels.com/photos/210604/pexels-photo-210604.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Villas",
    count: "780 villas",
    img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Cabins",
    count: "210 cabins",
    img: "https://images.pexels.com/photos/271795/pexels-photo-271795.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Hero = () => {
  return (
    <section className="px-6 py-10 space-y-10">
      
      {/* Featured Cities */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredCities.map((city, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={city.img}
              alt={city.name}
              className="h-52 w-full object-cover hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold drop-shadow-lg">{city.name}</h3>
              <p className="text-sm drop-shadow-md">{city.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Property Types */}
      <div>
        <h2 className="text-xl font-semibold mb-4 text-indigo-700">Browse by property type</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {propertyTypes.map((item, idx) => (
            <div key={idx} className="text-center space-y-2">
              <img
                src={item.img}
                alt={item.name}
                className="h-28 w-full object-cover rounded-md"
              />
              <h4 className="font-medium text-gray-800">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.count}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
