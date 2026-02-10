import { personalSchema } from "@/lib/seo-config";
import { skills } from "../data/skills";

export function PersonStructuredData() {
  const enhancedSchema = {
    ...personalSchema,
    knowsAbout: skills.map((skill) => skill.name),
    hasOccupation: {
      ...personalSchema.hasOccupation,
      skills: skills
        .filter(
          (skill) => skill.level === "Expert" || skill.level === "Advanced"
        )
        .map((skill) => skill.name),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(enhancedSchema),
      }}
    />
  );
}

export function WebsiteStructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Usman Shahzad Portfolio",
    url: "https://usman-portfolio.vercel.app",
    description:
      "Professional portfolio of Usman Shahzad, Full Stack Web Developer",
    author: {
      "@type": "Person",
      name: "Usman Shahzad",
    },
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://usman-portfolio.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema),
      }}
    />
  );
}
