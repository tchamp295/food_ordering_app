"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { food_list } from "../../public/assets";
import { ChevronDown, Sparkles, Minus, Plus, X } from "lucide-react";

const QuantityModal = ({ item, isOpen, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md m-4"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>

              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={
                    typeof item.image === "object" ? item.image.src : item.image
                  }
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-red-500 font-semibold">${item.price}</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Select Quantity:</p>
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={handleDecrement}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                             hover:bg-gray-200 transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={handleIncrement}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center
                             hover:bg-gray-200 transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total:</span>
                <span className="text-xl font-bold text-gray-800">
                  ${(item.price * quantity).toFixed(2)}
                </span>
              </div>

              <button
                onClick={() => {
                  onAddToCart(item, quantity);
                  onClose();
                }}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-lg
                         transition-colors duration-300"
              >
                Add to Cart
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

const FoodDisplayItem = ({ item, onAddToCart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageUrl = typeof item.image === "object" ? item.image.src : item.image;

  return (
    <>
      <motion.div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl || "/api/placeholder/400/300"}
            alt={item.name}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
            <span className="text-red-500 font-semibold">${item.price}</span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-4">
            {item.description}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-red-50 hover:bg-red-100 text-red-500 font-medium py-2 rounded-lg transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </motion.div>

      <QuantityModal
        item={item}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddToCart={onAddToCart}
      />
    </>
  );
};

const FoodDisplay = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAddToCart = (item, quantity) => {
    // Here you would typically dispatch to your cart state management system
    console.log("Adding to cart:", { item, quantity });
    // Example: dispatch(addToCart({ ...item, quantity }));
  };

  const categories = Array.from(
    new Set(["All", ...food_list.map((item) => item.category)])
  ).sort();

  const filteredFood =
    selectedCategory === "All"
      ? food_list
      : food_list.filter((item) => item.category === selectedCategory);

  const displayedFood = filteredFood.slice(0, visibleItems);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="text-red-500" size={24} />
            <span className="text-sm font-medium text-red-500 uppercase tracking-wider">
              Our Menu
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Our <span className="text-red-500">Delicious</span> Dishes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated menu featuring fresh ingredients and
            authentic recipes, crafted to deliver an exceptional dining
            experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
                ${
                  selectedCategory === category
                    ? "bg-red-500 text-white shadow-md"
                    : "bg-white text-gray-600 hover:bg-red-50 hover:text-red-500"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedFood.map((item) => (
              <motion.div key={item._id} variants={itemVariants} layout>
                <FoodDisplayItem item={item} onAddToCart={handleAddToCart} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {visibleItems < filteredFood.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setVisibleItems((prev) => prev + 6)}
              className="group flex items-center justify-center space-x-2 mx-auto 
                       bg-white text-gray-700 px-8 py-3 rounded-full
                       shadow-md hover:shadow-lg transition-all duration-300
                       border border-gray-200 hover:border-red-200"
            >
              <span className="font-medium">Load More</span>
              <ChevronDown
                className="w-5 h-5 text-gray-400 group-hover:text-red-500 
                          transition-transform duration-300 group-hover:translate-y-1"
              />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FoodDisplay;
