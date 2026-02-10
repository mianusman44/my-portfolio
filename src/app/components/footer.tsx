"use client";

import Link from "next/link";
import { personalInfo } from "../data/personal-info";
import { socialLinks } from "../data/social-links";

import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  // const [email, setEmail] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [isSubscribed, setIsSubscribed] = useState(false);

  // const handleSubscribe = (e: Event) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsSubmitting(false);
  //     setIsSubscribed(true);
  //     setEmail("");
  //   }, 1000);
  // };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden border-t border-border/40">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200/30 dark:via-teal-700/30 to-transparent" />
        <div className="absolute top-40 -left-20 w-72 h-72 bg-teal-400/5 dark:bg-teal-400/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-teal-300/5 dark:bg-teal-300/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* About column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground relative inline-block">
              About Me
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-300"></span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              &quot;I&apos;m a passionate developer focused on creating
              beautiful, functional, and user-friendly websites and
              applications.&quot;
            </p>

            {/* Social links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-muted/50 hover:bg-muted text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 p-2 rounded-full transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-300"></span>
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground relative inline-block">
              Contact
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-300"></span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-sm">
                <Mail className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5" />
                <span className="text-muted-foreground">
                  {personalInfo.email}
                </span>
              </div>
              {personalInfo.phone && (
                <div className="flex items-start space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5" />
                  <span className="text-muted-foreground">
                    {personalInfo.phone}
                  </span>
                </div>
              )}
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-teal-600 dark:text-teal-400 mt-0.5" />
                <span className="text-muted-foreground">
                  {personalInfo.location}
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground relative inline-block">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-300"></span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to receive updates on my latest projects and articles.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
