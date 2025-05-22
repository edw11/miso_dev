"use client";

import Image from "next/image";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { Menu, X } from "lucide-react"; // optional: or use an image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/* Top Nav */}
      <nav className="flex justify-between items-center py-4 relative z-50 gap-20">
        <div className="flex gap-8 items-center">
          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="lg:hidden">
            {!isMenuOpen ? (
              <Menu className="w-6 h-6 text-black cursor-pointer" />
            ) : (
              <X className="w-6 h-6 text-black cursor-pointer" />
            )}
          </button>
          <h1
            className={`font-integral-medium text-2xl text-black lg:text-3xl ${
              isMenuOpen ? `hidden` : ``
            }`}
          >
            Miso
          </h1>
        </div>

        {/* Desktop Nav Items */}
        <ol className="hidden lg:flex gap-10 text-black text-base font-satoshi">
          <li>Shop</li>
          <li>Onsale</li>
          <li>Brands</li>
        </ol>

        <SearchBar />

        {/* Right Icons */}
        <div
          className={`flex gap-4 items-center ${isMenuOpen ? `hidden` : ``}`}
        >
          <Image
            src="/icons/search.png"
            width={24}
            height={24}
            alt="search"
            className="lg:hidden"
          />
          <Image src="/icons/cart.png" width={24} height={24} alt="cart" />
          <Image
            src="/icons/profile.png"
            width={24}
            height={24}
            alt="profile"
          />
        </div>
      </nav>

      {/* Mobile Slide-In Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Menu Items */}
        <ul className="flex flex-col  text-black text-xl font-satoshi px-6 items-center gap-28 h-full justify-center">
          <li>Shop</li>
          <li>Onsale</li>
          <li>Brands</li>
          {/* Add more items here if needed */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
