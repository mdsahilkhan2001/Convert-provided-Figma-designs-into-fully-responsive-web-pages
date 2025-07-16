 import React from "react";
import { ShoppingCart, CircleArrowLeft, CircleArrowRight } from "lucide-react";
import product1 from "../assets/p1.png";
import product2 from "../assets/p2.png";
import product3 from "../assets/p3.png";
import BeautyHeroSection from "./BeautyHeroSection";

const products = [
  {
    id: 1,
    title: "ALYA SKIN CLEANSER.",
    price: "$29.99",
    image: product1,
    bgColor: "bg-[#f5f5f0]",
  },
  {
    id: 2,
    title: "RITUAL OF SAKURA.",
    price: "$27.99",
    image: product2,
    bgColor: "bg-[#f5f5f0]",
  },
  {
    id: 3,
    title: "THE BODY LOTION.",
    price: "$19.99",
    image: product3,
    bgColor: "bg-[#f5f5f0]",
  },
];

const ProductShowcase = () => {
  return (
    <>
      <section className="bg-[#fefef7] py-10 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Row */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            {/* Best Selling Tag */}
            <div className="inline-flex items-center gap-2 text-sm px-6 py-2 bg-[#FEFFF4] rounded-full shadow">
              <span className="w-2 h-2 bg-[#2D3B36] rounded-full"></span>
              <span className="text-gray-800 font-medium">Best Selling Products</span>
            </div>

            {/* Arrows */}
            <div className="flex gap-4">
              {/* Left Arrow */}
              <button className="w-10 h-10 rounded-full bg-[#FEFFF4] flex items-center justify-center shadow-md">
                <CircleArrowLeft className="w-5 h-5 text-black" />
              </button>

              {/* Right Arrow */}
              <button className="w-10 h-10 rounded-full bg-[#2D3B36] flex items-center justify-center shadow-md">
                <CircleArrowRight className="w-5 h-5 text-black" />
              </button>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-10">
            Skincare That Brings Out<br />Your Natural Radiance
          </h2>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className={`rounded-2xl overflow-hidden group shadow-md hover:shadow-lg transition duration-300 ${product.bgColor}`}
              >
                <div className="p-6 h-[320px] flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain max-w-[200px] max-h-[250px]"
                  />
                </div>

                <div className="bg-white p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                      {product.title}
                    </h3>
                    <p className="text-gray-500 text-sm">FROM {product.price}</p>
                  </div>
                  <button className="w-10 h-10 bg-gray-100 hover:bg-green-100 rounded-md flex items-center justify-center transition">
                    <ShoppingCart size={18} className="text-gray-800" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeautyHeroSection />
    </>
  );
};

export default ProductShowcase;
