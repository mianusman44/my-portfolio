"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  CheckCircle,
  Code,
  Database,
  Globe,
  Smartphone,
  Star,
  Zap,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Brain,
    title: "AI Agents & Agentic AI Systems",
    description:
      "Build intelligent AI agents that autonomously handle complex tasks, make decisions, and interact with your systems to revolutionize your business operations",
    deliverables: [
      "Custom AI agents for specific business tasks",
      "Multi-agent systems with collaborative workflows",
      "Autonomous decision-making systems",
      "Agent orchestration and monitoring",
      "Integration with existing business tools",
    ],
    technologies: [
      "LangChain",
      "AutoGPT",
      "CrewAI",
      "OpenAI Agents",
      "Claude",
      "GPT-4",
      "Vector Databases",
      "RAG",
      "LangGraph",
      "Semantic Kernel",
    ],
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Code,
    title: "AI Integration & LLM Solutions",
    description:
      "Transform your applications with cutting-edge AI capabilities using Large Language Models and custom AI solutions tailored to your business needs",
    deliverables: [
      "ChatGPT & LLM integration",
      "Custom AI chatbots & assistants",
      "Prompt engineering & optimization",
      "RAG (Retrieval-Augmented Generation) systems",
      "AI-powered content generation",
    ],
    technologies: [
      "OpenAI",
      "Claude",
      "Gemini",
      "LangChain",
      "Vector DBs",
      "Pinecone",
      "Weaviate",
      "Hugging Face",
      "LlamaIndex",
      "Embeddings",
    ],
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    description:
      "Transform your business idea into a powerful, scalable web application that drives growth and revenue",
    deliverables: [
      "Custom web application",
      "API development & integration",
      "Database design & optimization",
      "Deployment & hosting setup",
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Python",
      "React",
      "Next.js",
      "Express.js",
      "Flask",
      "FastAPI",
      "PostgreSQL",
    ],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "AI Automation & Workflow Intelligence",
    description:
      "Reduce operational costs and boost efficiency with AI-powered automation that saves up to 95% of manual effort through intelligent workflows",
    deliverables: [
      "AI-powered workflow automation",
      "Intelligent document processing",
      "Smart data extraction & analysis",
      "Automated decision systems",
      "Custom AI model training & deployment",
    ],
    technologies: [
      "n8n",
      "Make.com",
      "Zapier",
      "Python",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "OCR",
      "NLP",
      "Computer Vision",
    ],
    color: "from-orange-500 to-red-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Reach millions of users with high-performance mobile apps for iOS and Android, built for scalability and user engagement",
    deliverables: [
      "iOS & Android apps",
      "Backend API integration",
      "Push notifications",
      "App store deployment",
    ],
    technologies: ["React Native", "Firebase", "Mobile APIs", "Notifications"],
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: Database,
    title: "Web Scraping & Data Extraction",
    description:
      "Eliminate repetitive tasks and scale your operations with custom automation solutions that deliver measurable ROI",
    deliverables: [
      "Workflow automation systems",
      "Data scraping & processing",
      "Task scheduling & monitoring",
      "Integration with existing tools",
    ],
    technologies: [
      "Puppeteer",
      "Playwright",
      "Python",
      "BeautifulSoup",
      "Scrapy",
      "Selenium",
      "Http Requests",
    ],
    color: "from-violet-500 to-purple-600",
  },
];

export default function Services() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 dark:via-teal-700/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 dark:via-teal-700/30 to-transparent" />
        <div className="absolute top-20 -right-40 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
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
            What I Do
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            Services I Offer
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
            I provide comprehensive development services that transform your
            business ideas into powerful, revenue-generating applications. From
            initial concept to deployment and maintenance, I deliver solutions
            that not only meet your requirements but exceed your business goals.
          </motion.p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border border-border/50 hover:border-teal-200/50 dark:hover:border-teal-800/50">
                <CardHeader className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Deliverables */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-500" />
                      Deliverables:
                    </h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((deliverable, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ delay: 0.3 + index * 0.1 + idx * 0.05 }}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0" />
                          {deliverable}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">
                      Key Technologies:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIdx) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{
                            delay: 0.5 + index * 0.1 + techIdx * 0.02,
                            duration: 0.3,
                          }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs font-medium hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950/20 dark:to-blue-950/20 border-teal-200/50 dark:border-teal-800/50">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Let&apos;s Build Something Amazing Together
              </h2>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto">
                With 70+ successful projects delivered and 100% client
                satisfaction rate, I&apos;m ready to help you transform your
                vision into a powerful, revenue-generating application. Fast
                turnaround, clear communication, and quality guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                      Start Your Project Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/20"
                    asChild
                  >
                    <Link href="#contact">Book a Free Consultation</Link>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
