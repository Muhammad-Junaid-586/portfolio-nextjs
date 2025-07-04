"use client";

import React, { useState, useEffect } from "react";
import { FaAlignJustify } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 0) {
        header?.classList.add("shadow-md");
      } else {
        header?.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["home", "about", "portfolio", "services", "contact"];

  return (
    <header className="fixed top-0 left-0 w-full py-3 bg-white z-10 transition-shadow duration-300">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-pacifico">
          JUN<span className="text-blue-600">AID</span>
        </Link>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-3xl text-gray-800 cursor-pointer"
          onClick={handleToggle}
        >
          <FaAlignJustify />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {sections.map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="text-lg text-gray-800 hover:text-blue-500"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        {toggle && (
          <div className="fixed inset-0 bg-white shadow-lg z-20 flex flex-col p-4 space-y-4 md:hidden">
            {sections.map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="text-lg text-gray-800 hover:text-blue-500"
                onClick={handleToggle}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
