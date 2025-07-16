 import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#2D3B36] text-white py-16 px-4 sm:px-8 overflow-hidden">
      {/* SKINCARE background  */}
      <div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center font-extrabold leading-none tracking-tight z-0 pointer-events-none select-none whitespace-nowrap"
        style={{
          fontSize: '18rem', 
          color: '#3D4B4680',
          lineHeight: 1,
          width: '2000px',
          overflow: 'hidden',
        }}
      >
        SKINCARE
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          {/* Left */}
          <div className="mb-10 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-semibold leading-snug">
              Join The Skincare<br />Community Now.
            </h2>
          </div>

          {/* Right */}
          <div className="text-left md:text-right">
            <p className="text-sm text-gray-300 mb-1">Get in Touch</p>
            <a href="mailto:contact.skincare.com" className="text-xl sm:text-2xl font-medium hover:underline">
              contact.skincare.com
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white">
          {/* Socials */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="hover:underline">Facebook</a>
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">YouTube</a>
          </div>

          {/* Policies */}
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
