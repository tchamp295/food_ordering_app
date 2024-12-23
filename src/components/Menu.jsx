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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    prevArrow: <CustomScrollButton type="prev" />,
    nextArrow: <CustomScrollButton type="next" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2
          className="text-4xl lg:text-5xl font-extrabold text-gray-900 
          bg-clip-text text-transparent bg-red-600
          mb-4 tracking-tight"
        >
          Explore Our Menu
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Dive into a culinary journey where each dish tells a story of passion,
          tradition, and unparalleled flavor.
        </p>
      </motion.div>

      <div className="menu-carousel-container overflow-hidden relative">
        <Slider {...settings}>
          {menu_list.map((item, index) => (
            <div key={index} className="px-2">
              <MenuItem image={item.menu_image} name={item.menu_name} />
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  );
};

export default Menu;
