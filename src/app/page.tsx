import type { Metadata } from "next";
import {
  PersonStructuredData,
  WebsiteStructuredData,
} from "../../src/app/components/structured-data";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Services from "./components/services";
import WorkProcess from "./components/work-process";
import Projects from "./components/projects";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";
export const metadata: Metadata = {
  title:
    "Usman Shahzad - Full Stack Web Developer | React, Next.js, Express, AWS Expert",
  description:
    "Experienced Full Stack Web Developer with 4+ years expertise in JavaScript, React, Next.js, Ruby on Rails, Node.js, and AWS. Available for freelance projects in Lahore, Pakistan.",
  alternates: {
    canonical: "https://usman-portfolio.vercel.app",
  },
};

export default function Home() {
  return (
    <>
      <PersonStructuredData />
      <WebsiteStructuredData />
      <main className="min-h-screen w-full">
        <Hero />
        <About />
        <Skills />
        <Services />
        <WorkProcess />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
