import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Twitter, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/pizzas",
      color: "#1DA1F2",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/pizzas",
      color: "#4267B2",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/pizzas",
      color: "#0077B5",
    },
  ];

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Delivery", href: "/delivery" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-[#092540] to-[#0d3566] text-gray-200 px-4 py-12"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-extrabold text-orange-500 mb-4 flex items-center">
            <span>Yumly</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Delivering delicious pizzas and creating memorable dining
            experiences with quality ingredients and passion for great food.
          </p>

          <div className="flex space-x-4 pt-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/10 rounded-full"
              >
                <social.icon
                  color={social.color}
                  size={24}
                  className="hover:text-opacity-80 transition-all"
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4 text-orange-400">Company</h2>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <motion.li
                key={index}
                whileHover={{
                  x: 10,
                  color: "#f97316",
                  transition: { duration: 0.2 },
                }}
                className="text-sm text-gray-300 cursor-pointer"
              >
                {link.name}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4 text-orange-400">
            Get in Touch
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-3 text-sm text-gray-300">
              <Phone size={18} className="text-orange-500" />
              <span>+254 745 238 509</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-gray-300">
              <Mail size={18} className="text-orange-500" />
              <span>contact@pizzas.com</span>
            </li>
            <li className="flex items-center space-x-3 text-sm text-gray-300">
              <MapPin size={18} className="text-orange-500" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-center mt-8 text-sm text-gray-400 border-t border-gray-700 pt-4"
      >
        &copy; {new Date().getFullYear()} Pizzas. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;
