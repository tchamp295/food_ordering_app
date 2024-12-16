"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, User, LogOut } from "lucide-react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = ({ openNav }) => {
  const [navSticky, setNavSticky] = useState(false);
  const { data: session } = useSession();
  const [cartQuantity, setCartQuantity] = useState(10);

  useEffect(() => {
    const handler = () => {
      setNavSticky(window.scrollY >= 90);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Helper function to truncate name
  const getTruncatedName = (name) => {
    if (!name) return "";
    return name.split(" ")[0];
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed top-0 w-full z-[1000] transition-all duration-300
        ${navSticky ? "bg-white/70 backdrop-blur-md shadow-lg" : "bg-white"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo Section */}
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center cursor-pointer"
          >
            <Image
              src="/pizza.png"
              alt="Yumly Logo"
              width={50}
              height={50}
              className="transition-transform duration-300"
            />
            <span className="ml-3 text-2xl lg:text-3xl font-bold text-[#092540] tracking-tight">
              Yumly
            </span>
          </motion.div>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {["Home", "Menu", "Contact", "About"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-orange-500 transition-colors 
                  text-base lg:text-lg font-medium"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4 lg:space-x-6">
            {/* Search and Cart Icons */}
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Search
                  className="text-xl text-gray-600 cursor-pointer 
                  hover:text-orange-500 transition-colors"
                />
              </motion.div>

              <motion.div
                className="relative"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <ShoppingCart
                  className="text-xl text-gray-600 cursor-pointer 
                  hover:text-orange-500 transition-colors"
                />
                {cartQuantity > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 
                    bg-orange-500 text-white rounded-full 
                    w-5 h-5 flex items-center justify-center 
                    text-xs font-bold"
                  >
                    {cartQuantity}
                  </motion.span>
                )}
              </motion.div>
            </div>

            {/* Authentication Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {session ? (
                <>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/profile"
                      className="flex items-center space-x-2 text-sm text-gray-700 hover:text-orange-500 
                      font-medium transition-colors"
                    >
                      <User size={18} />
                      <span>Hi, {getTruncatedName(session.user.name)}</span>
                    </Link>
                  </motion.div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => signOut()}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-semibold 
                    border border-orange-500 text-orange-500 
                    rounded-full hover:bg-orange-500 hover:text-white 
                    transition-all duration-300"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </motion.button>
                </>
              ) : (
                <>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/register"
                      className="px-4 py-2 text-sm font-semibold 
                      bg-orange-500 text-white rounded-full 
                      hover:bg-orange-600 transition-all duration-300"
                    >
                      Register
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/login"
                      className="px-4 py-2 text-sm font-semibold 
                      border border-orange-500 text-orange-500 
                      rounded-full hover:bg-orange-500 hover:text-white 
                      transition-all duration-300"
                    >
                      Login
                    </Link>
                  </motion.div>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Menu
                onClick={openNav}
                className="md:hidden text-2xl text-gray-600 
                hover:text-orange-500 transition-colors cursor-pointer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
