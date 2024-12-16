"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const MenuItem = ({ image, name }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-4 group cursor-pointer space-y-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className="w-28 h-28 lg:w-36 lg:h-36 mb-3 rounded-full 
        overflow-hidden shadow-lg relative group-hover:shadow-xl 
        transition-shadow duration-300"
      >
        <Image
          src={image}
          alt={`${name} menu item`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <p
        className="text-sm lg:text-base font-medium text-gray-800 
        group-hover:text-orange-500 transition-colors duration-300 
        text-center"
      >
        {name}
      </p>
    </motion.div>
  );
};

export default MenuItem;
