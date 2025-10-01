"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-slate-950 dark:text-white"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.03}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
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
            <span className="text-red-600 dark:text-red-400 font-bold">
                {word}
            </span>
        </motion.div>
    );
}

export function BackgroundPaths() {
    const changingWords = ["AI", "Digital", "Business"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % changingWords.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-4xl mx-auto"
                >
                    {/* Main Heading with Animated Word */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
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
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80">
                            {" "}Transformation
                        </span>
                    </h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-lg sm:text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed"
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
                            text-black dark:text-white transition-all duration-300 
                            group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10
                            hover:shadow-md dark:hover:shadow-neutral-800/50"
                        >
                            <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                Discover Excellence
                            </span>
                            <span
                                className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                transition-all duration-300"
                            >
                                →
                            </span>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
