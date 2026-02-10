"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  highlight: string;
}

interface ProjectDetailsModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ProjectDetailsModal({
  project,
  open,
  onOpenChange,
}: ProjectDetailsModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-left">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-left">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src={
                project.image ||
                `/placeholder.svg?height=400&width=600&query=project ${
                  project.title || "/placeholder.svg"
                }`
              }
              alt={`${project.title} - Project screenshot`}
              width={800}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-muted/50 hover:bg-muted text-sm font-medium"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Project Highlight */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Achievement</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.highlight}
            </p>
          </div>

          {/* Project Details */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Live Demo Button */}
          {project.liveUrl && (
            <div className="flex justify-center pt-4">
              <Button
                variant="default"
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white"
                asChild
              >
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Live Demo
                </Link>
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
