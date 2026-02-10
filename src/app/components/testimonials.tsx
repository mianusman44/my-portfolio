"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useState } from "react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-50/20 to-transparent dark:via-teal-950/10" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-teal-300/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm uppercase tracking-wider text-teal-600 dark:text-teal-400 font-medium"
          >
            What Clients Say
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            Client Testimonials
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-1 w-20 bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-300 mx-auto mt-4"
            aria-hidden="true"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground max-w-2xl mx-auto mt-4"
          >
            Here&apos;s what my clients have to say about working with me
          </motion.p>
        </header>

        <div className="relative">
          {/* Main testimonial display */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  {/* Quote icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center">
                      <Quote className="h-8 w-8 text-teal-600 dark:text-teal-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
                        &ldquo;{testimonials[currentIndex].content}&rdquo;
                      </p>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center justify-center sm:justify-start gap-4">
                          <Avatar className="h-12 w-12">
                            <AvatarFallback className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 font-semibold">
                              {testimonials[currentIndex].name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-semibold text-foreground">
                              {testimonials[currentIndex].name}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {testimonials[currentIndex].role}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonials[currentIndex].company}
                            </p>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center justify-center sm:justify-end gap-1">
                          {renderStars(testimonials[currentIndex].rating)}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12">
              <motion.button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12">
              <motion.button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Dots indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center space-x-2 mt-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={`testimonial-dot-${testimonial.name}-${index}`}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-teal-600 scale-125"
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-teal-400 dark:hover:bg-teal-500"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
