import React from "react";
import { HeroSection as NewHero } from "@/components/ui/hero-section";

const HeroSection = () => {
  return (
    <NewHero
      title={
        <>
          <span>Accelerate Your </span>
          <span className="relative inline-flex h-[1.05em] overflow-hidden align-baseline leading-none">
            <span className="animate-scroll-words flex flex-col will-change-transform text-3xl sm:text-5xl md:text-6xl leading-none">
              <span className="block text-sky-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">AI</span>
              <span className="block text-sky-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">Business</span>
              <span className="block text-sky-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">Digital</span>
            </span>
          </span>
          <span> Transformation</span>
        </>
      }
      description="Go beyond theory. Our teams bring domain insight and AI expertise together to discover what matters most. With design thinking at the core, we co-create solutions that unlock value and accelerate change."
      actions={[
        { text: "Contact Us", href: "/contact", variant: "default" },
        { text: "Explore Services", href: "/resources", variant: "glow" },
      ]}
      image={{
        light: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
        dark: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop",
        alt: "UI Components Preview",
      }}
    />
  );
};

export default HeroSection