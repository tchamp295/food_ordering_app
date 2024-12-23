"use client";

import React from "react";
import { menu_list } from "../../public/assets";
import MenuItem from "./MenuItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import CustomScrollButton from "@/utils/CustomScrollButton";

const Menu = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    prevArrow: <CustomScrollButton type="prev" />,
    nextArrow: <CustomScrollButton type="next" />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <motion.section
      className="relative py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-200"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
          Discover Our Exquisite Menu
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Experience the finest flavors crafted with passion and care, just for
          you.
        </p>
      </motion.div>

      {/* Slider Section */}
      <div className="overflow-hidden">
        <Slider {...sliderSettings}>
          {menu_list.map((item, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <MenuItem
                image={item.menu_image}
                name={item.menu_name}
                className="shadow-lg rounded-lg overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </Slider>
      </div>

  
   
    </motion.section>
  );
};

export default Menu;
