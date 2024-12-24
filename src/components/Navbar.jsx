"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import {
  Search,
  ShoppingCart,
  ChevronDown,
  LogOut,
  Pizza,
  Coffee,
  Beef,
  Salad,
  UtensilsCrossed,
  Heart,
  ClipboardList,
  Settings,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session } = useSession();
  const [cartQuantity, setCartQuantity] = useState(10);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      title: "Menu",
      dropdownItems: [
        { title: "Pizza", icon: <Pizza size={18} />, href: "/menu/pizza" },
        {
          title: "Beverages",
          icon: <Coffee size={18} />,
          href: "/menu/beverages",
        },
        {
          title: "Main Course",
          icon: <Beef size={18} />,
          href: "/menu/main-course",
        },
        { title: "Salads", icon: <Salad size={18} />, href: "/menu/salads" },
        {
          title: "All Items",
          icon: <UtensilsCrossed size={18} />,
          href: "/menu/all",
        },
      ],
    },
    {
      title: "My Account",
      dropdownItems: [
        {
          title: "Orders",
          icon: <ClipboardList size={18} />,
          href: "/account/orders",
        },
        {
          title: "Favorites",
          icon: <Heart size={18} />,
          href: "/account/favorites",
        },
        {
          title: "Settings",
          icon: <Settings size={18} />,
          href: "/account/settings",
        },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Updated to match footer */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-lg font-bold">Y</span>
            </div>
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              Yumly
              <span className="text-red-500">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              Home
            </Link>

            {menuItems.map((item) => (
              <div
                key={item.title}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.title)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="nav-link flex items-center space-x-1">
                  <span>{item.title}</span>
                  <ChevronDown size={16} />
                </button>

                {openDropdown === item.title && (
                  <div className="absolute top-full left-0 w-48 py-2 bg-white rounded-lg shadow-lg border border-gray-100">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.title}
                        href={dropdownItem.href}
                        className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
                      >
                        {dropdownItem.icon}
                        <span>{dropdownItem.title}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <Search size={20} />
            </button>

            <div className="relative">
              <button className="text-gray-600 hover:text-gray-800">
                <ShoppingCart size={20} />
              </button>
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartQuantity}
                </span>
              )}
            </div>

            {/* Auth Buttons - Hidden on mobile */}
            <div className="hidden md:flex items-center space-x-4">
              {session ? (
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900"
                >
                  <LogOut size={20} />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm font-medium text-gray-700 hover:text-gray-900"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="text-sm font-medium px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2">
              <Link href="/" className="block py-2 text-gray-700">
                Home
              </Link>

              {menuItems.map((item) => (
                <div key={item.title} className="py-2">
                  <div className="font-medium text-gray-800 mb-2">
                    {item.title}
                  </div>
                  {item.dropdownItems.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.title}
                      href={dropdownItem.href}
                      className="flex items-center space-x-2 py-2 pl-4 text-gray-700"
                    >
                      {dropdownItem.icon}
                      <span>{dropdownItem.title}</span>
                    </Link>
                  ))}
                </div>
              ))}

              <Link href="/contact" className="block py-2 text-gray-700">
                Contact
              </Link>

              {/* Mobile Auth Buttons */}
              <div className="border-t mt-2 pt-2">
                {session ? (
                  <button
                    onClick={() => signOut()}
                    className="flex items-center space-x-2 py-2 text-gray-700"
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                ) : (
                  <div className="space-y-2">
                    <Link href="/login" className="block py-2 text-gray-700">
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="block py-2 px-4 bg-red-500 text-white rounded text-center"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .nav-link {
          @apply text-gray-700 hover:text-gray-900 font-medium;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
