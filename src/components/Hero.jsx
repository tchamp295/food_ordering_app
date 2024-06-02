import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto   p-3   ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        <div>
          <div className="font-text">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-orange-500 mr-1">Feel</span>
              The extra ordinary taste of our
              <span className="text-orange-500 ml-1">Pizzas</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-500">
              Indulge in a world of flavors with our handcrafted pizzas made
              from the finest ingredients. From classic Margherita to gourmet
              specialties, we have something for every craving.
            </p>
          </div>
          <div className="flex gap-5 mt-5 ">
            <button className="bg-gradient-to-r from-orange-500 to-orange-400 font-semibold  hover:from-orange-600 hover:to-orange-500 text-white py-2 px-6 rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300">
              Contact Us
            </button>
            <button className="py-2 px-6 bg-transparent font-semibold border border-orange-500 text-sm text-orange-500 rounded-md  hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300">
              View Menu
            </button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/pizza4.webp"
            height={500}
            width={700}
            alt="hero image"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
