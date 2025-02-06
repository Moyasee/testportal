"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Particles } from "@/components/ui/particles"
import { ArrowRight } from "lucide-react";
import { StarBorder } from "@/components/ui/star-border"


function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    title1 = "Welcome to Portal",
    title2 = "Your gateway to infinite possibilities"
}: {
    title1?: string;
    title2?: string;
}) {
    const [showBlocks, setShowBlocks] = useState(false);
    
    const handleExplore = () => {
        setShowBlocks(true);
    };

    const blocks = [
        {
            title: "FAQ",
            description: "Find answers to commonly asked questions about Portal and its features.",
            image: "faq-image.jpg",
            buttonText: "Learn More"
        },
        {
            title: "Create a Source",
            description: "Start creating your own source and share it with the community.",
            image: "create-source.jpg",
            buttonText: "Get Started"
        },
        {
            title: "Download Hydra",
            description: "Get the latest version of Hydra client for the best experience.",
            image: "hydra.jpg",
            buttonText: "Download"
        },
        {
            title: "Guides",
            description: "Explore comprehensive guides to master Portal features.",
            image: "guides.jpg",
            buttonText: "View Guides"
        },
        {
            title: "Search for Source",
            description: "Find the perfect source for your needs from our vast collection.",
            image: "search.jpg",
            buttonText: "Search Now"
        },
        {
            title: "Leaderboard",
            description: "Check out top-rated sources and contributors.",
            image: "leaderboard.jpg",
            buttonText: "View Rankings"
        }
    ];

    return (
        <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

            {/* Add Particles component */}
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color="#0095ff"
                refresh={false}
            />

            {/* Elegant shapes background */}
            <div className="absolute inset-0 overflow-hidden">
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-indigo-500/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-rose-500/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-violet-500/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-amber-500/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-cyan-500/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            <motion.div 
                className="text-center z-10"
                initial={false}
                animate={showBlocks ? { 
                    opacity: 0,
                    y: -20,
                    display: "none"
                } : {
                    opacity: 1,
                    y: 0,
                    display: "block"
                }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                        {title1}
                    </span>
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-8 tracking-tight">
                    <span className={cn(
                        "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                    )}>
                        {title2}
                    </span>
                </h2>
                <StarBorder 
                    onClick={handleExplore}
                    color="#0095ff"
                    speed="7s"
                    className="font-semibold"
                >
                    Explore
                </StarBorder>
            </motion.div>

            <motion.div 
                className="grid-blocks z-10 w-full max-w-7xl mx-auto"
                initial={{ opacity: 0, display: "none" }}
                animate={showBlocks ? {
                    opacity: 1,
                    display: "block"
                } : {
                    opacity: 0,
                    display: "none"
                }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                    {blocks.map((block, index) => (
                        <motion.div 
                            key={block.title}
                            className="feature-block"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={showBlocks ? { 
                                opacity: 1, 
                                scale: 1, 
                                y: 0 
                            } : {
                                opacity: 0,
                                scale: 0.8,
                                y: 20
                            }}
                            transition={{
                                duration: 0.5,
                                delay: showBlocks ? index * 0.1 : 0,
                                ease: [0.23, 0.86, 0.39, 0.95]
                            }}
                        >
                            <div className="block-content">
                                <h3 className="text-2xl font-bold mb-3">{block.title}</h3>
                                <p className="text-gray-300 mb-4">{block.description}</p>
                                <img src={block.image} alt={block.title} className="block-image mb-4" />
                                <button className="block-btn">{block.buttonText}</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </header>
    );
}

export { HeroGeometric }
