 import React from "react";
import { Award } from "lucide-react";
import model2 from "../assets/imagemask.png";
import awardsvgrepo from "../assets/award-svgrepo-com 1 (1).jpg"

const InfoSection = () => {
  const items = [
    {
      title: "Bio Ingredients",
      desc: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
    },
    {
      title: "Everything Natural",
      desc: "Pure ingredients for pure skin. The Perfect solution for your skin care needs.",
    },
    {
      title: "All Handmade",
      desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
    },
  ];

  return (
    <section className="bg-[#FEFFF4] px-6 py-20 text-[#2D3B36] font-[Inter]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <button className="mb-6 flex items-center gap-2 border border-[#2D3B36] px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-3 h-3 bg-[#2D3B36] rounded-full"></span>
            Why Our Products
          </button>

          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            YOUR SKIN DESERVES <br className="hidden md:block" />
            THE BEST CARE.
          </h2>

          <p className="text-base md:text-lg mb-10 max-w-xl text-[#2D3B36]">
            Discover a curated collection of skincare products designed to rejuvenate,
            protect, and pamper your skin. Explore our range crafted with love backed by science, and inspired by nature.
          </p>

          <ul className="space-y-8">
            {items.map((item, i) => (
              <li key={i} className="flex gap-4">
                <div className="text-3xl font-light text-gray-400">{`0${i + 1}`}</div>
                <div>
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="text-sm text-[#2D3B36]">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="relative">
          <img
            src={model2}
            alt="Model"
            className="rounded-2xl w-full object-cover shadow-md"
          />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 bg-[#EFF5E1] text-sm rounded-full shadow-md">
  <div className="w-8 h-8 rounded-full border-2 border-dotted border-[#2D3B36] flex items-center justify-center bg-[#2D3B36]">
    <img
      src={awardsvgrepo}
      alt="award"
      className="w-4 h-4"
    />
  </div>
  <span className="text-[#2D3B36] font-medium leading-tight">
    Best Skin Care Product <br className="hidden md:block" /> Award Wining
  </span>
</div>
          <div className="flex justify-between mt-4 text-xs text-[#2D3B36] font-semibold px-2">
            <span>SINCE 2001</span>
            <span>LEARN MORE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
