import { skills } from "../data/skills";
import SkillsClient from "./skills-client";

// Structured data for skills
const skillsStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Usman Shahzad",
  jobTitle: "Full Stack Web Developer",
  knowsAbout: skills.map((skill) => skill.name),
  hasOccupation: {
    "@type": "Occupation",
    name: "Full Stack Web Developer",
    skills: skills
      .filter((skill) => skill.level === "Expert" || skill.level === "Advanced")
      .map((skill) => skill.name),
  },
};

export default function Skills() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(skillsStructuredData),
        }}
      />
      <section id="skills">
        <SkillsClient />
      </section>
    </>
  );
}
