import React from "react";
import { Twitter, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/pizzas",
      label: "Twitter",
    },
    {
      icon: Facebook,
      href: "https://facebook.com/pizzas",
      label: "Facebook",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/pizzas",
      label: "LinkedIn",
    },
  ];

  const companyLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Delivery", href: "/delivery" },
    { name: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-gray-100 text-gray-600">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info with Enhanced Logo */}
          <div>
            <div className="mb-6">
              <a href="/" className="inline-block">
                {/* Option 1: Text-based logo with icon */}
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl font-bold">Y</span>
                  </div>
                  <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                    Yumly
                    <span className="text-red-500">.</span>
                  </span>
                </div>

                {/* Option 2: If you have an image logo, use this instead:
                <img 
                  src="/api/placeholder/120/40" 
                  alt="Yumly Logo" 
                  className="h-10 w-auto"
                /> */}
              </a>
            </div>
            <p className="text-gray-600 mb-6">
              Delivering delicious pizzas and creating memorable dining
              experiences with quality ingredients and passion for great food.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <span>+254 745 238 509</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <span>contact@pizzas.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Yumly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
