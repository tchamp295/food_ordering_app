import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white via-orange-50 to-orange-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Feel
              </span>{" "}
              The Extra Ordinary Taste of Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                Pizzas
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Embark on a culinary journey with our artisan pizzas crafted from
              premium, locally-sourced ingredients. Each slice tells a story of
              passion, tradition, and unparalleled flavor.
            </p>
            <div className="flex space-x-4">
              <button
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full 
                hover:from-orange-600 hover:to-red-700 transition-all duration-300 
                shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none 
                focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Contact Us
              </button>
              <button
                className="px-8 py-3 border-2 border-orange-500 text-orange-600 
                font-semibold rounded-full hover:bg-orange-500 hover:text-white 
                transition-all duration-300 transform hover:-translate-y-1 
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                View Menu
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative group">
            <div
              className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-500 
              rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300"
            ></div>
            <Image
              src="/pizza4.webp"
              height={600}
              width={800}
              alt="Delicious Pizza"
              className="relative z-10 rounded-2xl shadow-2xl transform transition-transform 
              duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
