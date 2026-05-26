import React from 'react'
import { Link } from 'react-router-dom'
import heroImg from "../../assets/rabbit-hero.webp";

function Hero() {
  return (
    <section className="relative">

      <img
        src={heroImg}
        alt="Rabbit"
        className="w-full h-100 md:h-150 lg:h-187.5 object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">

        <div className="text-center text-white p-6">

          <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold tracking-tight uppercase mb-4">
            Vacation <br /> Ready
          </h1>

          <p className="text-sm md:text-lg mb-6">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>

          <Link
            to="#"
            className="bg-white text-black px-6 py-3 rounded-md text-lg hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>

        </div>

      </div>

    </section>
  )
}

export default Hero