 import React, { useEffect, useRef } from "react";
import heroImage from "../assets/Image01.png";
import plum from "../assets/plum.png"

const HeroSection = () => {
  const sectionRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-x-auto overflow-y-hidden flex flex-col items-center justify-center px-4 py-12 bg-[#EFF5E1] text-black animate-fadeIn"
    >
      {/* Background SKINCARE  */}
      <h1 className="absolute top-[23%] left-0 right-0 text-[20rem] md:text-[15rem] font-black opacity-4 tracking-widest z-0 text-center pointer-events-none text-[#2D3B36]">
        SKINCARE
      </h1>

    
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 z-10 w-full max-w-6xl">
        {/* Left Description */}
        <div className="md:w-1/3 text-center md:text-left">
          <p className="text-base md:text-lg font-medium leading-relaxed">
            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
          </p>
        </div>

        {/* Center Heading */}
        <div className="md:w-1/3 text-center">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            GLOW<br />NATURALLY
          </h2>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/3 flex justify-center">
          <img
            src={plum}
            alt="Side Glow"
            className="w-[120px] md:w-[150px] rounded-md"
          />
        </div>
      </div>

      {/* Main Model Image with Button */}
      <div className="relative my-6 z-10">
        <img src={heroImage} alt="Hero" className="w-[300px] md:w-[400px] rounded-lg mx-auto" />

         
      <button className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-[350px] bg-[#EFF5E1] text-sm py-3 px-6 rounded-full shadow flex items-center relative text-[#2D3B36]">
  <img
    src={plum}
    alt="Product"
    className="w-10 h-10 rounded-full border-2 border-dotted border-[#2D3B36] absolute left-4 top-1/2 transform -translate-y-1/2"
  />
  <span className="ml-16">While giving you an invigorating cleansing experience.</span>
</button>
          
      </div>

     
      <button className="mt-4 bg-[#2D3B36] text-white px-6 py-3 rounded-full hover:bg-[#1e2824] transition z-10">
        Shop Now
      </button>

      {/* Description */}
      <p className="max-w-5xl mx-auto text-[#2D3B36] font-normal text-[53px] leading-[78px] tracking-[-0.035em] font-['Inter']">
  Experience the ultimate in skincare with our expertly formulated products,
  crafted to nourish, protect, and rejuvenate your skin. Combining the finest
  natural ingredients
  <span className="text-[#FEFFF4]">
    {' '}with advanced science, our collection ensures every skin type can achieve
    a radiant, healthy glow. Embrace your beauty with confidence every day.
    Experience the ultimate in skincare with our expertly formulated products,
    crafted to nourish, protect, and rejuvenate your skin.
  </span>
</p>

    </section>
  );
};

export default HeroSection;
