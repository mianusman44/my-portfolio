"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, User } from "lucide-react";
import Image from "next/image";
import { personalInfo } from "../data/personal-info";

export default function AboutClient() {
  const renderBoldText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/);
    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={index} className="text-foreground font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute top-40 -left-20 w-72 h-72 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-teal-300/10 dark:bg-teal-300/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-teal-200/20 dark:via-teal-700/20 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm uppercase tracking-wider text-teal-600 dark:text-teal-400 font-medium"
          >
            Get to know me
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mt-2"
            itemProp="name"
          >
            About {personalInfo.name}
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-300 mx-auto mt-4"
            aria-hidden="true"
          />
        </header>

        <motion.div className="w-full mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="order-2 md:order-1 flex justify-center"
          >
            <div className="relative">
              <div
                className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800"
                role="img"
                aria-label={`Professional photo of ${personalInfo.name}`}
              >
                <Image
                  src="/my-image.jpg"
                  alt={`Professional photo of ${personalInfo.name}`}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-300 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                <div className="text-center">
                  <span className="block text-2xl" itemProp="yearsOfExperience">
                    {personalInfo.experience}
                  </span>
                  <span className="text-xs uppercase tracking-wider">
                    Years Exp.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 order-1 md:order-2"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="space-y-4 text-muted-foreground"
            >
              {personalInfo.bio.map((paragraph, index) => (
                <p
                  key={index}
                  className="leading-relaxed"
                  itemProp="description"
                >
                  {renderBoldText(paragraph)}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
            >
              <div className="p-4 bg-background/80 backdrop-blur-sm border border-teal-100/20 dark:border-teal-900/20 rounded-lg shadow-sm flex items-center gap-3 transition-all hover:shadow-md hover:border-teal-200/30 dark:hover:border-teal-800/30">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-300">
                  <User size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Name
                  </h3>
                  <p className="font-medium" itemProp="name">
                    {personalInfo.name}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-background/80 backdrop-blur-sm border border-teal-100/20 dark:border-teal-900/20 rounded-lg shadow-sm flex items-center gap-3 transition-all hover:shadow-md hover:border-teal-200/30 dark:hover:border-teal-800/30">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-300">
                  <Mail size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Email
                  </h3>
                  <p className="font-medium text-sm break-all" itemProp="email">
                    {personalInfo.email}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-background/80 backdrop-blur-sm border border-teal-100/20 dark:border-teal-900/20 rounded-lg shadow-sm flex items-center gap-3 transition-all hover:shadow-md hover:border-teal-200/30 dark:hover:border-teal-800/30">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-300">
                  <MapPin size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Location
                  </h3>
                  <p className="font-medium" itemProp="address">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-background/80 backdrop-blur-sm border border-teal-100/20 dark:border-teal-900/20 rounded-lg shadow-sm flex items-center gap-3 transition-all hover:shadow-md hover:border-teal-200/30 dark:hover:border-teal-800/30">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center text-teal-600 dark:text-teal-300">
                  <Clock size={18} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">
                    Availability
                  </h3>
                  <p className="font-medium">{personalInfo.availability}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
