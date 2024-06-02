"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = ({ openNav }) => {
  const [activeItem, setActiveItem] = useState("Home");
  const [cartQuantity, setCartQuantity] = useState(10);
  const [navSticky, setNavSticky] = useState(false);
  const { data: session } = useSession();
  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } else {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const stickyStyle = navSticky
    ? "bg-[#ffffff] shadow-orange-200  shadow-sm "
    : "#ffffff";

  let displayName = session ? session.user.name : "";
  if (displayName.includes(" ")) {
    displayName = displayName.split(" ")[0];
  }
  return (
    <div
      className={` fixed top-0 w-[100%] ${stickyStyle} transition-all duration-300  z-[1000]  `}
    >
      <div className=" flex items-center h-[10vh] justify-between max-w-6xl  mx-auto p-3">
        <div className="font-bold text-3xl text-orange-500 flex items-center">
          <Image src="/pizza.png" alt="logo" width={40} height={40} />
          <span className="ml-2 font-logo text-2xl text-[#092540] lg:text-4xl">
            Pizzas{" "}
          </span>
        </div>
        <ul className="hidden md:flex space-x-10 items-center">
          <li>
            <Link href={"/"} className="nav_link ">
              {" "}
              Home
            </Link>
          </li>
          <li>
            <a className="nav_link" href="#">
              Menu
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              About
            </a>
          </li>
        </ul>
        <div className="flex gap-6 items-center">
          <CiSearch className="text-xl text-[#49557e] cursor-pointer" />
          <div className="relative">
            {/* Cart icon */}
            <BsCart2 className="text-2xl text-[#49557e] cursor-pointer" />
            {/* Cart quantity value */}
            {cartQuantity > 0 && (
              <div className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                {cartQuantity}
              </div>
            )}
          </div>
          <div className="hidden md:flex gap-5 items-center">
            {session ? (
              <>
                <Link
                  href={"/profile"}
                  className="text-sm font-semibold text-gray-700"
                >
                  Welcome, {displayName}
                </Link>
                <button
                  onClick={() => signOut()}
                  className="py-2 px-6 font-semibold bg-transparent border border-orange-500 text-sm text-orange-500 rounded-md shadow-md hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href={"/register"}
                  className="py-2 px-6 font-semibold bg-orange-500 text-sm text-white rounded-md shadow-md hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                >
                  Register
                </Link>
                <Link
                  className="py-2 px-6 font-semibold bg-transparent border border-orange-500 text-sm text-orange-500 rounded-md shadow-md hover:bg-orange-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition duration-300"
                  href={"/login"}
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
        <RxHamburgerMenu
          onClick={openNav}
          className=" h-10 w-10 md:hidden rotate-180"
        />
      </div>
    </div>
  );
};
export default Navbar;
