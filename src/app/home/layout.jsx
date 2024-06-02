"use client";
import Footer from "@/components/Footer";
import NavMobile from "@/components/NavMobile";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Layout = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="">
      
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Navbar openNav={showNavHandler} />
      <div className="pt-[10vh]">{children}</div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
