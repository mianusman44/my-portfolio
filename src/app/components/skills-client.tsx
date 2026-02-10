"use client";

import type React from "react";

import { motion } from "framer-motion";
import { skills, type Skill } from "../data/skills";
const SkillsClient: React.FC = () => {
  const getProgressPercent = (level: Skill["level"]): string => {
    switch (level) {
      case "Expert":
        return "100%";
      case "Advanced":
        return "80%";
      case "Intermediate":
        return "60%";
      case "Beginner":
        return "40%";
      default:
        return "50%";
    }
  };

  const getLighterColor = (hexColor: string): string => {
    return hexColor + "20";
  };

  const getSkillsByCategory = () => {
    const categories = [
      "Frontend",
      "Backend",
      "Database",
      "DevOps",
      "AI/ML",
    ] as const;
    return categories.map((category) => ({
      category,
      skills: skills.filter((skill) => skill.category === category),
    }));
  };

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-muted/30 dark:bg-muted/10" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 dark:via-teal-700/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 dark:via-teal-700/30 to-transparent" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-teal-400/10 dark:bg-teal-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-teal-300/10 dark:bg-teal-300/5 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="text-sm uppercase tracking-wider text-teal-600 dark:text-teal-400 font-medium"
          >
            What I work with
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold mt-2"
          >
            My Technical Skills
          </motion.h1>
          <motion.div
            initial={{ width: "0px" }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-300 mx-auto mt-4"
            aria-hidden="true"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground max-w-2xl mx-auto mt-4"
          >
            Here are the technologies and tools I specialize in, organized by
            expertise level and category
          </motion.p>
        </header>

        <div>
          {getSkillsByCategory().map((categoryGroup, categoryIndex) => (
            <motion.section
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-semibold mb-6 text-center">
                {categoryGroup.category} Technologies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryGroup.skills.map((skill, index) => (
                  <motion.article
                    key={skill.name}
                    initial={{ opacity: 0, y: "20px", rotate: "0deg" }}
                    whileInView={{ opacity: 1, y: "0px", rotate: "0deg" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay:
                        0.3 +
                        (categoryIndex * categoryGroup.skills.length + index) *
                          0.05,
                    }}
                    whileHover={{
                      y: "-10px",
                      scale: 1.05,
                      rotate: "2deg",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-background/80 backdrop-blur-sm border border-teal-100/20 dark:border-teal-900/20 rounded-xl p-6 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 hover:border-teal-200/50 dark:hover:border-teal-800/50 transition-all group cursor-pointer"
                    itemScope
                    itemType="https://schema.org/Skill"
                  >
                    <div className="flex items-start space-x-4">
                      <motion.div
                        className="p-3 rounded-lg transition-all duration-300"
                        style={{
                          backgroundColor: getLighterColor(skill.color),
                          color: skill.color,
                        }}
                        whileHover={{
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                          transition: { duration: 0.4 },
                        }}
                        aria-hidden="true"
                      >
                        <skill.icon className="h-6 w-6" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="font-medium" itemProp="name">
                            {skill.name}
                          </h3>
                          <span
                            className="text-xs font-medium px-2 py-1 rounded-full"
                            style={{
                              backgroundColor: getLighterColor(skill.color),
                              color: skill.color,
                            }}
                            itemProp="proficiencyLevel"
                          >
                            {skill.level}
                          </span>
                        </div>
                        <div
                          className="h-2 w-full bg-muted/50 rounded-full overflow-hidden"
                          role="progressbar"
                          aria-label={`${skill.name} proficiency level`}
                        >
                          <motion.div
                            initial={{ scaleX: 0, originX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                              duration: 1,
                              delay:
                                0.5 +
                                (categoryIndex * categoryGroup.skills.length +
                                  index) *
                                  0.05,
                            }}
                            className="h-full"
                            style={{
                              width: getProgressPercent(skill.level),
                              background: `linear-gradient(to right, ${skill.color}99, ${skill.color})`,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsClient;
