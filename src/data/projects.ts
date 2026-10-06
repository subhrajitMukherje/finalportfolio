import productivityImage from "@/assets/project-productivity.jpg";
import sleekImage from "@/assets/project-sleek.jpg";
import chatbotImage from "@/assets/project-chatbot.jpg";
import adsImage from "@/assets/project-ads.jpg";
import testingImage from "@/assets/project-testing.jpg";

export type ProjectCategory = "SaaS" | "Automation" | "E-commerce";

export type Project = {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  stack: string[];
  liveUrl: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "ai-productivity-saas",
    title: "AI Productivity SaaS",
    description:
      "Meeting capture, transcription and collaborative notes in one workspace teams actually keep open.",
    category: "SaaS",
    stack: ["Next.js", "AssemblyAI", "Liveblocks", "Clerk"],
    liveUrl: "https://example.com",
    image: productivityImage,
  },
  {
    slug: "LMS platform",
    title: "LMS platform",
    description:
      "A learning management system (LMS) platform for creating and delivering online courses, tracking student progress, and managing course content.",
    category: "SaaS",
    stack: ["Next.js 16"],
    liveUrl: "https://example.com",
    image: sleekImage,
  },
  {
    slug: "ai-support-chatbot-builder",
    title: "AI Support Chatbot Builder",
    description:
      "No-code builder for support agents that answer from your own docs and escalate cleanly.",
    category: "Automation",
    stack: ["Next.js 16", "Neon", "ScaleKit", "ZenRows"],
    liveUrl: "https://example.com",
    image: chatbotImage,
  },
  {
    slug: "E-commerce Store",
    title: "E-commerce Store",
    description:
      "A fully functional e-commerce store with product listings, shopping cart, and checkout functionality.",
    category: "E-commerce",
    stack: ["Next.js", "Firebase", "TypeScript", "ImageKit.io"],
    liveUrl: "https://example.com",
    image: adsImage,
  },
  {
    slug: "Landing page ",
    title: "Landing page",
    description:
      "A landing page for a product or service, designed to convert visitors into leads or customers.",
    category: "SaaS",
    stack: ["Next.js", "GitHub", "Tailwind CSS", "Vercel"],
    liveUrl: "https://vercel.com/subhrajitmukherjes-projects/excel-aca",
    image: testingImage,
  },
];

export const featuredProjects = projects.slice(0, 3);
