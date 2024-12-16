"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { food_list } from "../../public/assets";
import FoodDisplayItem from "./FoodDisplayItem";

const FoodDisplay = () => {
  const [visibleItems, setVisibleItems] = useState(3);

  // Function to load more items
  const handleLoadMore = () => {
    setVisibleItems((prevVisible) =>
      Math.min(prevVisible + 3, food_list.length)
    );
  };

  // Slice the food_list based on visible items
  const displayedFood = food_list.slice(0, visibleItems);

  // Variants for container and item animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 text-center tracking-tight leading-tight"
        >
          Discover Delicious Dishes Near You
        </motion.h1>

        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {displayedFood.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20 }}
              >
                <FoodDisplayItem
                  name={item.name}
                  desc={item.description}
                  price={item.price}
                  image={item.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {visibleItems < food_list.length && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-10"
          >
            <button
              onClick={handleLoadMore}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white 
                         px-6 py-3 rounded-full 
                         hover:from-orange-600 hover:to-red-700 
                         transition-all duration-300 
                         shadow-md hover:shadow-lg 
                         focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50
                         transform hover:scale-105 active:scale-95"
            >
              Load More Dishes
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default FoodDisplay;
