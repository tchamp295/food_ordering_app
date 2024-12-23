// app/ClientLayout.js
"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import NavMobile from "@/components/NavMobile";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }) {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className="min-h-screen flex flex-col">
      <NavMobile showNav={showNav} closeNav={closeNavHandler} />
      <Navbar openNav={showNavHandler} />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
