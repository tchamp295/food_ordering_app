import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#092540] text-gray-200 px-8 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Pizzas</h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ibero
            quisquam suscipit, velit ipsa cupiditate iusto consequatur sed.
          </p>
          <div className="flex mt-4 space-x-4">
            <Image
              src="/twitter_icon.png"
              height={30}
              width={30}
              alt="Twitter Icon"
            />
            <Image
              src="/facebook_icon.png"
              height={30}
              width={30}
              alt="Facebook Icon"
            />
            <Image
              src="/linkedin_icon.png"
              height={30}
              width={30}
              alt="LinkedIn Icon"
            />
          </div>
        </div>
        <div className="">
          <h2 className="text-xl font-bold mb-4 up">Company</h2>
          <ul className="text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
          <ul className="text-sm">
            <li>+254 745 238 509</li>
            <li>contact@pizzas.com</li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-8 text-sm text-gray-400">
        &copy; 2024 Pizzas. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
