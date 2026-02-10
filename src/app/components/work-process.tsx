"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Code,
  FileText,
  MessageSquare,
  Rocket,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    step: "1",
    title: "Discovery",
    description:
      "We'll discuss your project requirements, goals, timeline, and budget to ensure we're a good fit.",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-600",
  },
  {
    step: "2",
    title: "Proposal",
    description:
      "I'll provide a detailed proposal outlining scope, deliverables, timeline, and pricing.",
    icon: FileText,
    color: "from-green-500 to-emerald-600",
  },
  {
    step: "3",
    title: "Development",
    description:
      "Iterative development with regular updates and feedback sessions to ensure we're on track.",
    icon: Code,
    color: "from-purple-500 to-indigo-600",
  },
  {
    step: "4",
    title: "Delivery",
    description:
      "Final delivery includes all source code, documentation, and knowledge transfer.",
    icon: Rocket,
    color: "from-orange-500 to-red-600",
  },
];

const principles = [
  {
    title: "Clear Communication",
    description:
      "Regular updates and transparent communication throughout the project",
    icon: Users,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "On-Time Delivery",
    description:
      "Committed to meeting deadlines and delivering quality work on schedule",
    icon: Clock,
    color: "text-green-600 dark:text-green-400",
  },
  {
    title: "Quality Assurance",
    description:
      "Thorough testing and code review to ensure robust, maintainable solutions",
    icon: Shield,
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Complete Delivery",
    description:
      "Full source code, documentation, and deployment support included",
    icon: CheckCircle,
    color: "text-orange-600 dark:text-orange-400",
  },
];

export default function WorkProcess() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 dark:via-teal-700/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 dark:via-teal-700/30 to-transparent" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm uppercase tracking-wider text-teal-600 dark:text-teal-400 font-medium"
          >
            How I Work
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            My Work Process
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
            className="text-muted-foreground max-w-3xl mx-auto mt-4 text-lg"
          >
            Every project is unique, but my proven process ensures we deliver
            exceptional results. Here&apos;s how I approach each collaboration
            to understand your specific needs and bring your vision to life.
          </motion.p>
        </header>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border border-border/50 hover:border-teal-200/50 dark:hover:border-teal-800/50">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <span className="text-white font-bold text-xl">
                          {step.step}
                        </span>
                      </div>
                      <div
                        className={`w-12 h-12 mx-auto mt-4 rounded-xl bg-gradient-to-r ${step.color} bg-opacity-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="h-6 w-6 text-foreground" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow connector for desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-teal-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Working Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            My Working Principles
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.7 + 0.1 * index }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group border border-border/50 hover:border-teal-200/50 dark:hover:border-teal-800/50">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <principle.icon
                        className={`h-8 w-8 mx-auto ${principle.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20 border-teal-200/50 dark:border-teal-800/50">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Ready to Get Started?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                Let&apos;s discuss your project and see how my proven process
                can bring your vision to life.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white shadow-lg hover:shadow-teal-500/25"
                  asChild
                >
                  <Link href="#contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
