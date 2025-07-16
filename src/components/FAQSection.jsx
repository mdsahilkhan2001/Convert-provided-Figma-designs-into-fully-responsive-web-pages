
import React, { useState } from 'react';
import { Plus, Minus, Headphones } from 'lucide-react';
import Faqsectionimg from "../assets/Faqsectionimg.webp";

const FAQSection = () => {
  const [expandedItems, setExpandedItems] = useState(new Set());

  const toggleItem = (index) => {
    const newExpanded = new Set(expandedItems);
    newExpanded.has(index) ? newExpanded.delete(index) : newExpanded.add(index);
    setExpandedItems(newExpanded);
  };

  const faqData = [
    {
      question: "Are your products safe for sensitive skin?",
      answer: "Yes, our products are formulated with gentle ingredients that are suitable for sensitive skin. We conduct extensive testing to ensure compatibility with all skin types."
    },
    {
      question: "Are your products cruelty-free?",
      answer: "Absolutely! We are committed to cruelty-free practices and never test our products on animals. All our products are certified cruelty-free."
    },
    {
      question: "What's your return policy?",
      answer: "We offer a 30-day return policy for all unopened products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location. Please check our shipping page for more details."
    },
    {
      question: "How do I choose the right products?",
      answer: "We recommend starting with our skin quiz to determine your skin type and concerns. Our customer service team is also available to provide personalized recommendations."
    }
  ];

  return (
    <section className="w-full bg-skinbg py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Left Image */}
        <div className="flex-1 relative">
          <div className="relative bg-graybg rounded-xl p-10 flex items-center justify-center">
            <img 
              src={Faqsectionimg}
              alt="Skincare product"
              className="w-62 h-80 object-cover rounded-xl"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-3 flex items-center gap-3 shadow-lg">
              <div className="w-8 h-8 bg-deepgreen text-white rounded-full flex items-center justify-center">
                <Headphones />
              </div>
              <div className="leading-snug">
                <div className="font-semibold text-deepgreen text-sm">24/7 We're Here</div>
                <div className="text-midgreen text-xs">To Help You</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right FAQ */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-4 text-midgreen text-sm mb-6 font-heading bg-lightgreen px-6 py-3 rounded-full">
            <span className="text-xl leading-4">•</span>
            Frequently Asked Question
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-deepgreen mb-8 font-heading">
            Answers to Your Skincare Questions, All in One Place.
          </h2>

          <div className="flex flex-col gap-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-7 py-6 text-left flex justify-between items-center text-base font-medium text-deepgreen hover:bg-gray-50 transition"
                >
                  {item.question}
                  {expandedItems.has(index) ? <Minus size={16} /> : <Plus size={16} />}
                </button>
                {expandedItems.has(index) && (
                  <div className="px-7 pb-6 text-midgreen border-t border-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
