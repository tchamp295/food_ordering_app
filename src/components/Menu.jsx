"use client";
import { menu_list } from "../../public/assets";
import MenuItem from "./MenuItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col border-b-2 border-[#e2e2e2] p-3">
      <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
        Explore Our Menu
      </h1>
      <p className="text-gray-400 mb-3">
        Dive into a world of flavors and experience gastronomic bliss like never
        before.
      </p>

     <div className="mb-3 px-3">
        <Slider {...settings} >
          {menu_list.map((item, index) => (
            <MenuItem key={index} image={item.menu_image} name={item.menu_name} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Menu;
