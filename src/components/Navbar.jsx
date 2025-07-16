 import React from "react";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="relative bg-skinbg text-deepgreen px-6 py-4 flex items-center justify-between">
      {/* Left - Logo */}
      <h1 className="text-lg font-bold tracking-wider z-10">SKINCARE</h1>

      {/* Center - Nav Links */}
      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-sm font-medium">
        <li><a href="#">All Products</a></li>
        <li><a href="#">Beauty</a></li>
        <li><a href="#">Skincare</a></li>
      </ul>

      {/* Right - Cart Icon */}
      <div className="z-10">
        <ShoppingCart />
      </div>

      {/* Mobile Menu   Shows below navbar */}
      <ul className="flex flex-col gap-2 text-sm font-medium mt-4 md:hidden w-full text-center">
        <li><a href="#">All Products</a></li>
        <li><a href="#">Beauty</a></li>
        <li><a href="#">Skincare</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
