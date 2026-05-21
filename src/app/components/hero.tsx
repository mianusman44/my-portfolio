"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";
import { personalInfo } from "../data/personal-info";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = useMemo(
    () => [
      "Full Stack Developer",
      "MERN Stack Specialist",
      "React Specialist",
      "Node.js Expert",
      "AI Enthusiast",
      "Voice AI Automation Expert",
      "",
    ],
    []
  );

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index <= currentRole.length) {
        setTypedText(currentRole.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypedText("");
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex, roles]);

  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-transparent via-teal-50/30 to-background dark:from-transparent dark:via-teal-950/20 dark:to-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-50/30 to-background dark:from-transparent dark:via-teal-950/20 dark:to-background" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
        {/* Teal accent elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-300/10 dark:bg-teal-300/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: "20px" }}
        animate={{ opacity: 1, y: "0px" }}
        transition={{ duration: 0.5 }}
        className="space-y-4 relative z-10"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-xl text-teal-700 dark:text-teal-300"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9, rotate: "0deg" }}
          animate={{ opacity: 1, scale: 1, rotate: "0deg" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-300 mx-auto my-6"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-2xl md:text-3xl text-muted-foreground max-w-2xl mx-auto min-h-[2em] flex items-center justify-center"
        >
          <span className="text-teal-600 dark:text-teal-400 font-semibold">
            {typedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="ml-1"
            >
              |
            </motion.span>
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: "0px" }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-teal-500/25 transition-all duration-300"
              asChild
            >
              <Link href="#projects">
                <span>View My Work</span>
              </Link>
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              className="text-teal-600 border-teal-600 hover:bg-teal-50 dark:text-teal-300 dark:border-teal-400 dark:hover:bg-teal-900/20 transition-all duration-300 shadow-lg hover:shadow-teal-500/25"
              asChild
            >
              <Link href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                <span>Contact Me</span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex justify-center space-x-6 mt-8"
        >
          <motion.a
            href="https://github.com/mianusman44"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://pk.linkedin.com/in/muhammad-usman44"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://www.upwork.com/freelancers/~01b5c0e1e7d6adebdf?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <SiUpwork size={24} />
          </motion.a>
          <motion.a
            href="mailto:usmanshahzad904@gmail.com"
            className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10"
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-200 transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
