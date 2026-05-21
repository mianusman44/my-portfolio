"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

import { ExternalLink, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { SiUpwork } from "react-icons/si";
import { personalInfo } from "../data/personal-info";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log("Sending email with data:", {
      name: formState.name,
      email: formState.email,
      subject: formState.subject,
    });

    try {
      const emailjs = (await import("@emailjs/browser")).default;
      const response = await emailjs.send(
        "service_ylsrdse",
        "template_umi4azd",
        {
          name: formState.name,
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        "umPv0MUfDMIXINpcx"
      );

      console.log("Email sent successfully:", response);

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-muted/30 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: "20px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Get In Touch
          </h2>
          <motion.div
            initial={{ scaleX: 0, originX: 0.5 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 w-16 sm:w-20 bg-primary mx-auto my-4 sm:my-6"
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Feel free to reach out if you have any questions or want to work
            together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: "-20px" }}
            whileInView={{ opacity: 1, x: "0px" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-full"
          >
            <Card className="h-full">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Here are the ways you can reach me
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-muted-foreground text-sm sm:text-base break-all hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <SiUpwork className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Upwork Profile</h3>
                    <a
                      href="https://www.upwork.com/freelancers/~01b5c0e1e7d6adebdf?mp_source=share"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm sm:text-base hover:text-primary transition-colors flex items-center gap-1"
                    >
                      View My Upwork Profile
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* Additional social links or map could go here */}
                <div className="hidden sm:block mt-6 pt-6 border-t">
                  <p className="text-muted-foreground text-sm">
                    I typically respond to inquiries within 24-48 hours. Looking
                    forward to connecting!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "20px" }}
            whileInView={{ opacity: 1, x: "0px" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl">
                  Send Me a Message
                </CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="h-10"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="h-10"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="h-10"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-24 sm:min-h-32"
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-11"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
