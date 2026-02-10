"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 1000);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 150);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const text = "Usman Shahzad";
  const letters = Array.from(text);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="loading-screen"
        variants={containerVariants}
        initial={{ opacity: 1 }}
        exit="exit"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030712]"
      >
        {/* Animated Mesh Gradient Background */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-1/4 -left-1/4 w-full h-full bg-teal-500/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -50, 0],
              y: [0, -40, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-blue-600/20 rounded-full blur-[120px]"
          />
        </div>

        {/* Central Premium Graphic */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative w-32 h-32 mb-12">
            {/* Rotating Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border border-teal-500/30 rounded-full"
                animate={{
                  rotate: i % 2 === 0 ? 360 : -360,
                  scale: [1, 1.05 + i * 0.05, 1],
                }}
                transition={{
                  rotate: {
                    duration: 5 + i * 2,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              />
            ))}

            {/* Glowing Core */}
            <motion.div
              className="absolute inset-4 rounded-full bg-gradient-to-tr from-teal-400 to-blue-600 flex items-center justify-center shadow-[0_0_40px_rgba(20,184,166,0.3)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="text-3xl font-bold text-white tracking-tighter">
                US
              </span>

              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-teal-400"
                animate={{
                  scale: [1, 1.4],
                  opacity: [0.4, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            </motion.div>
          </div>

          {/* Staggered Text Reveal */}
          <div className="flex mb-4 overflow-hidden">
            {letters.map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
                className={`text-2xl md:text-3xl font-bold tracking-tight inline-block ${
                  letter === " "
                    ? "w-3"
                    : "bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent"
                }`}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-teal-500/80 text-xs uppercase tracking-[0.3em] font-medium mb-8"
          >
            Full Stack Artisan
          </motion.p>

          {/* Sleek Progress Line */}
          <div className="w-48 h-[2px] bg-white/5 relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-transparent via-teal-400 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            {/* Glooming end of progress */}
            <motion.div
              className="absolute top-0 bottom-0 w-20 bg-teal-400 blur-sm opacity-50"
              animate={{ left: `${progress}%` }}
              style={{ marginLeft: "-10px" }}
            />
          </div>

          <motion.span
            className="mt-4 text-[10px] tabular-nums text-gray-500 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {Math.round(progress)}%
          </motion.span>
        </div>

        {/* Subtly animated background glow (removed unsafe random elements) */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02] select-none">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-teal-500/10"
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
