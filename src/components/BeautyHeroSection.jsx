import React from "react";
import { ShoppingCart } from "lucide-react";
import BeautyHeroImage from "../assets/BeautyHero.webp"
import productImage1 from "../assets/p1.png"
import productImage2 from "../assets/p2.png"
import productImage3 from "../assets/p3.png"
const BeautyHeroSection = () => {
  const products = [
    {
      id: 1,
      title: "ALYA SKIN CLEANSER",
      price: "$29.99",
      image: productImage1,
      bgColor: "bg-lightgreen"
    },
    {
      id: 2,
      title: "RITUAL OF SAKURA",
      price: "$39.99",
      image: productImage2,
      bgColor: "bg-deepgreen"
    },
    {
      id: 3,
      title: "THE BODY LOTION",
      price: "$24.99",
      image: productImage3,
      bgColor: "bg-graybg"
    }
  ];

  return (
    <div className="w-full bg-skinbg">
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden rounded-3xl mx-4 mb-16"
        style={{
          backgroundImage: `url(${BeautyHeroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light mb-4 max-w-4xl leading-tight">
            Feel Beautiful Inside and Out
            <br />
            <span className="font-normal">with Every Product.</span>
          </h1>

          <button className="mt-8 bg-white text-deepgreen px-8 py-3 rounded-full font-medium font-heading hover:bg-graybg transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Text & Categories */}
      <div className="text-center mb-16 px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-light text-deepgreen mb-8">
          Feel Beautiful Inside and Out
          <br />
          <span className="font-normal">with Every Product.</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button className="bg-deepgreen text-white px-6 py-2 rounded-full text-sm font-medium font-heading hover:bg-midgreen transition-colors">
            NEW ARRIVALS
          </button>
          <button className="bg-graybg text-deepgreen px-6 py-2 rounded-full text-sm font-medium font-heading hover:bg-lightgreen transition-colors">
            CLEANSING
          </button>
          <button className="bg-graybg text-deepgreen px-6 py-2 rounded-full text-sm font-medium font-heading hover:bg-lightgreen transition-colors">
            ACNE FIGHTER
          </button>
          <button className="bg-graybg text-deepgreen px-6 py-2 rounded-full text-sm font-medium font-heading hover:bg-lightgreen transition-colors">
            ANTI AGING
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6 pb-16">
        {products.map((product) => (
          <div
            key={product.id}
            className={`${product.bgColor} rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300`}
          >
            <div className="p-8 h-[400px] flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain max-w-[200px] max-h-[300px]"
              />
            </div>

            <div className="bg-white p-6 flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold font-heading text-deepgreen mb-1">
                  {product.title}
                </h3>
                <p className="text-midgreen text-sm font-heading">
                  FROM {product.price}
                </p>
              </div>

              <div className="ml-4">
                <div className="w-10 h-10 bg-graybg rounded-lg flex items-center justify-center cursor-pointer hover:bg-lightgreen transition-colors">
                  <ShoppingCart className="w-5 h-5 text-deepgreen" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeautyHeroSection;
