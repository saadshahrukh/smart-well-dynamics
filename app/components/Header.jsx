"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import styles from "../styles/style";

// Header Component
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "Graphs", href: "#graphs" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className={`${styles.boxWidth} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/Logo-01.png"
            alt="logo"
            height={100}
            width={100}
            className="w-14 sm:w-16 md:w-20 lg:w-24 object-contain"
          />
          <span
            className={`${styles.heading2} ml-2 font-sourceSans text-[22px] text-curious-blue  text-base sm:text-lg md:text-xl font-semibold`}
          >
            SMART Well Dynamics
          </span>
        </div>

        {/* Nav Links and Button on the Right */}
        <div className=" items-center space-x-8 hidden  md:flex">
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${styles.paragraph} text-black hover:text-curious-blue   `}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* User Icon and Button */}
          <button
            className={`${styles.button} bg-curious-blue px-5 py-2.5 rounded-md text-white hover:bg-[#0B6FA9] flex-shrink-0 flex items-center justify-center space-x-2`}
          >
            <HiMiniUserCircle size={24} />
            <span>Login</span>
          </button>
        </div>

        {/* Mobile Menu Button with Gap */}
        <button className="md:hidden text-black ml-4" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-black hover:text-curious-blue p-4 absolute z-50 left-[50%] top-16 w-1/2 rounded-l-xl rounded-br-xl">
          <nav className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${styles.paragraph} block`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
