import { projects } from "../data/projects";
import ProjectsClient from "./projects-client";

// Structured data for projects
const projectsStructuredData = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "Usman Shahzad - Web Development Projects",
  description:
    "Portfolio of web development projects showcasing expertise in modern technologies",
  author: {
    "@type": "Person",
    name: "Usman Shahzad",
    jobTitle: "Full Stack Web Developer",
  },
  workExample: projects.map((project) => ({
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web Browser",
    programmingLanguage: project.technologies,
    url: project.liveUrl,
  })),
};

export default function Projects() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsStructuredData),
        }}
      />
      <section id="projects">
        <ProjectsClient />
      </section>
    </>
  );
}
