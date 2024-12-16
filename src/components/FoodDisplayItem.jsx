import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";

const FoodDisplayItem = ({ name, price, desc, image, rating = 4 }) => {
  return (
    <motion.div
      className="group relative w-full bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {/* Image Section */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={image}
          alt={`Image of ${name}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />

        {/* Rating Overlay */}
        <div className="absolute top-3 right-3 bg-white/70 rounded-full p-2 backdrop-blur-sm">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className={`w-4 h-4 transition-colors ${
                  index < rating
                    ? "text-yellow-500 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-start">
          <div className="flex-grow">
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300 line-clamp-1">
              {name}
            </h3>
            <p className="text-sm text-gray-500 mt-1 line-clamp-2">{desc}</p>
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
          <span className="text-lg font-bold text-orange-600">
            Ksh {price.toLocaleString()}
          </span>

          <motion.button
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 
              bg-gradient-to-r from-orange-500 to-red-600 
              text-white rounded-full 
              hover:from-orange-600 hover:to-red-700
              focus:outline-none focus:ring-2 focus:ring-orange-400 
              transition-all duration-300 group"
          >
            <ShoppingCart className="w-4 h-4 group-hover:animate-bounce" />
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodDisplayItem;
