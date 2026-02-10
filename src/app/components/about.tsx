import AboutClient from "../components/about-client";
import { personalInfo } from "../data/personal-info";

// Structured data for about page
const aboutStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalInfo.name,
  jobTitle: personalInfo.title,
  description: personalInfo.bio[0],
  email: personalInfo.email,
  telephone: personalInfo.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "Pakistan",
  },
  worksFor: {
    "@type": "Organization",
    name: "Freelance",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Self-taught Developer",
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
        }}
      />
      <section id="about">
        <AboutClient />
      </section>
    </>
  );
}
