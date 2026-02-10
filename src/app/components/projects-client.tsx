"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects } from "../data/projects";
import ProjectDetailsModal from "./project-details-modal";

export default function ProjectsClient() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 dark:via-teal-700/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 dark:via-teal-700/30 to-transparent" />
        <div className="absolute top-40 -right-20 w-72 h-72 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-teal-300/10 dark:bg-teal-300/5 rounded-full blur-3xl" />
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
            My Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            Featured Projects
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
            Check out some of my recent work showcasing modern web development
            technologies and best practices
          </motion.p>
        </header>

        <div className="grid lg:grid-cols-1 gap-12">
          {(showAllProjects ? projects : projects.slice(0, 6)).map(
            (project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group"
                itemScope
                itemType="https://schema.org/SoftwareApplication"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Project Image */}
                  <motion.div
                    className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? "lg:order-2" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3] lg:aspect-video">
                      <Image
                        src={
                          project.image ||
                          `/placeholder.svg?height=400&width=600&query=${project.title}`
                        }
                        alt={`${project.title} - Web development project screenshot`}
                        width={800}
                        height={600}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        itemProp="image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                      {/* Floating action button */}
                      {project.liveUrl && (
                        <motion.div
                          className="absolute top-6 right-6"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
                            aria-label={`View ${project.title} live demo`}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </Link>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Project Content */}
                  <div
                    className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <div>
                      <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.2 + 0.1 * index }}
                        className="text-sm font-medium text-teal-600 dark:text-teal-400 uppercase tracking-wider"
                      >
                        Case Study
                      </motion.span>
                      <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.3 + 0.1 * index }}
                        className="text-2xl lg:text-3xl font-bold mt-2 mb-4"
                        itemProp="name"
                      >
                        {project.title}
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.4 + 0.1 * index }}
                        className="text-muted-foreground leading-relaxed"
                        itemProp="description"
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Key Highlight */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.5 + 0.1 * index }}
                      className="bg-teal-50/50 dark:bg-teal-950/20 rounded-xl p-4 border-l-4 border-teal-400"
                    >
                      <h3 className="text-sm font-semibold text-teal-800 dark:text-teal-300 mb-2">
                        🎯 Key Achievement
                      </h3>
                      <p className="text-sm text-teal-700 dark:text-teal-200">
                        {project.highlight}
                      </p>
                    </motion.div>

                    {/* Technologies */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.6 + 0.1 * index }}
                    >
                      <h3 className="text-sm font-semibold mb-3 text-foreground">
                        Technologies Used:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.div
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                              delay: 0.7 + 0.1 * index + 0.05 * techIndex,
                              duration: 0.3,
                            }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 text-xs font-medium hover:bg-teal-50 dark:hover:bg-teal-950/30 transition-colors"
                              itemProp="programmingLanguage"
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: 0.8 + 0.1 * index }}
                      className="flex gap-4 pt-2"
                    >
                      {project.liveUrl && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            className="bg-teal-600 hover:bg-teal-700 text-white"
                            asChild
                          >
                            <Link
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              View Live Site
                            </Link>
                          </Button>
                        </motion.div>
                      )}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          variant="outline"
                          className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-950/20"
                          onClick={() => handleProjectClick(project)}
                        >
                          Case Study Details
                          <ArrowUpRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            )
          )}
        </div>

        {!showAllProjects && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-900/20"
              onClick={() => setShowAllProjects(true)}
            >
              View All Projects ({projects.length - 6} more)
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </motion.div>
        )}
      </div>

      <ProjectDetailsModal
        project={selectedProject}
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
      />
    </section>
  );
}
