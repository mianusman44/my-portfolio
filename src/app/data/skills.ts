import { IconType } from "react-icons";
import { FaAws, FaBrain, FaNetworkWired, FaRobot } from "react-icons/fa";
import {
  SiBootstrap,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLangchain,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: IconType;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "AI/ML" | "Other";
  color: string;
}

export const skills: Skill[] = [
  // Frontend Technologies
  {
    name: "JavaScript",
    icon: SiJavascript,
    level: "Expert",
    category: "Frontend",
    color: "#F7DF1E",
  },
  {
    name: "React",
    icon: SiReact,
    level: "Expert",
    category: "Frontend",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    level: "Advanced",
    category: "Frontend",
    color: "#0070F3",
  },
  {
    name: "HTML/CSS",
    icon: SiHtml5,
    level: "Expert",
    category: "Frontend",
    color: "#E34F26",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    level: "Expert",
    category: "Frontend",
    color: "#06B6D4",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    level: "Expert",
    category: "Frontend",
    color: "#7952B3",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    level: "Expert",
    category: "Frontend",
    color: "#3178C6",
  },

  // Backend Technologies
  {
    name: "Node.js",
    icon: SiNodedotjs,
    level: "Expert",
    category: "Backend",
    color: "#339933",
  },
  {
    name: "Express",
    icon: SiExpress,
    level: "Expert",
    category: "Backend",
    color: "#68A063",
  },
  {
    name: "RESTful APIs",
    icon: SiPostman,
    level: "Advanced",
    category: "Backend",
    color: "#FF6C37",
  },
  {
    name: "Supabase",
    icon: SiSupabase,
    level: "Expert",
    category: "Backend",
    color: "#F05032",
  },

  // Database Technologies
  {
    name: "MongoDB",
    icon: SiMongodb,
    level: "Advanced",
    category: "Database",
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    level: "Expert",
    category: "Database",
    color: "#4169E1",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    level: "Advanced",
    category: "Database",
    color: "#4479A1",
  },

  // DevOps & Tools
  {
    name: "Git",
    icon: SiGit,
    level: "Expert",
    category: "DevOps",
    color: "#F05032",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    level: "Expert",
    category: "DevOps",
    color: "#6B7280",
  },
  {
    name: "Docker",
    icon: SiDocker,
    level: "Advanced",
    category: "DevOps",
    color: "#2496ED",
  },
  {
    name: "AWS",
    icon: FaAws,
    level: "Advanced",
    category: "DevOps",
    color: "#FF9900",
  },

  // AI/ML Technologies
  {
    name: "LangChain",
    icon: SiLangchain,
    level: "Expert",
    category: "AI/ML",
    color: "#10B981",
  },
  {
    name: "LangGraph",
    icon: FaNetworkWired,
    level: "Expert",
    category: "AI/ML",
    color: "#2E8B57",
  },
  {
    name: "AI Chat Bot Development",
    icon: FaRobot,
    level: "Expert",
    category: "AI/ML",
    color: "#4169E1",
  },
  {
    name: "MCP Servers",
    icon: FaNetworkWired,
    level: "Expert",
    category: "AI/ML",
    color: "#8A2BE2",
  },
  {
    name: "Agentic AI",
    icon: FaBrain,
    level: "Advanced",
    category: "AI/ML",
    color: "#FF6347",
  },
];

export default skills;
