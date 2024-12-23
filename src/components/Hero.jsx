import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-white pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Reordered grid for mobile-first design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12">
          {/* Image Section - Now first in the DOM order */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gray-100 transform rotate-3 rounded-lg"></div>
            <div className="relative">
              <Image
                src="/pizza4.webp"
                height={500}
                width={600}
                alt="Fresh Italian Pizza"
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
              <div className="absolute -bottom-6 right-0 lg:-right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-red-600">20% OFF</div>
                <div className="text-sm text-gray-600">On First Order</div>
              </div>
            </div>
          </div>

          {/* Text Content - Now second in the DOM order */}
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Discover the Authentic
              <span className="text-red-600 block mt-2">
                Italian Pizza Experience
              </span>
            </h1>

            <div className="w-20 h-1 bg-red-600"></div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Experience the perfect blend of traditional recipes and premium
              ingredients. Our handcrafted pizzas are made with love, featuring
              fresh locally-sourced toppings and our signature homemade sauce.
            </p>

            {/* Buttons in a row with proper spacing */}
            <div className="flex flex-row space-x-4 w-full">
              <a
                href="/menu"
                className="flex-1 text-center px-4 sm:px-8 py-3 bg-red-600 text-white 
                font-semibold rounded hover:bg-red-700 transition-colors"
              >
                View Our Menu
              </a>

              <a
                href="/contact"
                className="flex-1 text-center px-4 sm:px-8 py-3 border-2 border-red-600 
                text-red-600 font-semibold rounded hover:bg-red-600 hover:text-white 
                transition-colors"
              >
                Contact Us
              </a>
            </div>

            {/* Features with improved responsive layout */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-600">
                  30min
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Fast Delivery
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-600">
                  Fresh
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Ingredients
                </div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-600">
                  5 Star
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Rated Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
