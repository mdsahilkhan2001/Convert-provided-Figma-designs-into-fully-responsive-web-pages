
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import ProductShowcase from './components/ProductShowcase';
// import TestimonialBanner from './components/TestimonialBanner';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeInEls = gsap.utils.toArray(".fade-in");

      fadeInEls.forEach((el, i) => {
        const direction = i % 2 === 0 ? 100 : -100;
        gsap.from(el, {
          opacity: 0,
          x: direction,
          scale: 0.95,
          duration: 1.2,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // Timeline for Hero
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fade-in-hero",
          start: "top center",
        }
      });
      tl.from(".fade-in-hero h1", { y: 50, opacity: 0, duration: 0.8 })
        .from(".fade-in-hero img", { scale: 0.8, opacity: 0, duration: 1 }, "-=0.4")
        .from(".fade-in-hero button", { y: 20, opacity: 0, duration: 0.5 }, "-=0.6");

      //    avoid long scroll
      gsap.from(".fade-in-products", {
        scrollTrigger: {
          trigger: ".fade-in-products",
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 50,
        opacity: 0,
        duration: 1
      });

      // Footer animation
      const ft = gsap.timeline({
        scrollTrigger: {
          trigger: ".animate-footer",
          start: "top 90%",
        },
      });
      ft.from(".animate-footer p", { opacity: 0, y: 20, duration: 0.6 })
        .from(".animate-footer button", { opacity: 0, y: 20, duration: 0.5 }, "-=0.4")
        .from(".animate-footer .w-3", { opacity: 0, scale: 0.8, stagger: 0.2, duration: 0.4 }, "-=0.4");

      // FAQ
      const faq = gsap.timeline({
        scrollTrigger: {
          trigger: ".fade-in:nth-child(6)",
          start: "top 85%",
        },
      });
      faq.from(".fade-in:nth-child(6) h2", { opacity: 0, y: 30, duration: 0.5 })
          .from(".fade-in:nth-child(6) .faq-item", { opacity: 0, y: 30, stagger: 0.2, duration: 0.6 }, "-=0.3");

      // Info
      const info = gsap.timeline({
        scrollTrigger: {
          trigger: ".animate-info",
          start: "top 80%",
        },
      });
      info.from(".animate-info .info-card", { y: 40, opacity: 0, stagger: 0.3, duration: 0.6 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="text-deepgreen font-heading bg-lightgreen">
      <Navbar />
      <div className="fade-in fade-in-hero animate-hero"><HeroSection /></div>
      <div className="fade-in animate-info"><InfoSection /></div>
      <div className="fade-in fade-in-products"><ProductShowcase /></div>
      <div className="fade-in"><FAQSection /></div>
      <div className="fade-in animate-footer"><Footer /></div>
    </div>
  );
};

export default App;
