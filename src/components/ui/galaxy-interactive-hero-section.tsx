"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Spline = lazy(() => import('@splinetool/react-spline'));

function HeroSplineBackground() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      pointerEvents: 'auto',
      overflow: 'hidden',
    }}>
      <Suspense fallback={
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
          <div className="text-white text-lg">Loading 3D Scene...</div>
        </div>
      }>
        <Spline
          style={{
            width: '100%',
            height: '100vh',
            pointerEvents: 'auto',
          }}
          scene="https://prod.spline.design/us3ALejTXl6usHZ7/scene.splinecode"
        />
      </Suspense>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent 30%, transparent 70%, rgba(0, 0, 0, 0.8)),
            linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.9))
          `,
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}

function AnimatedWord({ word, isActive }: { word: string; isActive: boolean }) {
  return (
    <motion.div
      className="inline-block"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 25,
      }}
    >
      <span className="font-bold text-primary">
        {word}
      </span>
    </motion.div>
  );
}

function HeroContent() {
  const changingWords = ["AI", "Digital", "Business"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % changingWords.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-white pt-16 sm:pt-24 md:pt-32 px-4 max-w-4xl mx-auto">
      {/* Main Heading with Animated Word */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
          Accelerate Your{" "}
        </span>
        <div className="inline-block h-[1.2em] overflow-hidden w-[280px] text-center">
          <AnimatePresence mode="wait">
            <AnimatedWord
              key={changingWords[currentWordIndex]}
              word={changingWords[currentWordIndex]}
              isActive={true}
            />
          </AnimatePresence>
        </div>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
          {" "}Transformation
        </span>
      </h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white/90"
      >
        Go beyond theory. Our teams bring domain insight and AI expertise together to discover what matters most. With design thinking at the core, we co-create solutions that unlock value and accelerate change.
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 
        dark:from-white/10 dark:to-black/10 p-px rounded-2xl backdrop-blur-lg 
        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <Button
          variant="ghost"
          className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
          text-white transition-all duration-300 
          group-hover:-translate-y-0.5 border border-white/10
          hover:shadow-md dark:hover:shadow-neutral-800/50"
          asChild
        >
          <Link to="/contact">
            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
              Discover Excellence
            </span>
            <span
              className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
              transition-all duration-300"
            >
              →
            </span>
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}


export const GalaxyInteractiveHeroSection = () => {
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroContentRef.current) {
        requestAnimationFrame(() => {
          const scrollPosition = window.pageYOffset;
          const maxScroll = 400;
          const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
          if (heroContentRef.current) {
            heroContentRef.current.style.opacity = opacity.toString();
          }
        });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <HeroSplineBackground />
      </div>

      <div ref={heroContentRef} style={{
        position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh',
        display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 10, pointerEvents: 'none'
      }}>
        <div className="container mx-auto">
          <HeroContent />
        </div>
      </div>
    </div>
  );
};
