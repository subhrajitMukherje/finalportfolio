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
    slug: "sleek-ai",
    title: "Sleek.ai",
    description:
      "An AI web design agent that turns a single prompt into a shippable, on-brand site.",
    category: "SaaS",
    stack: ["Next.js 16", "Gemini", "Claude", "Instforge"],
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
    slug: "ai-product-ads-generator",
    title: "AI Product Ads Generator",
    description:
      "Upload a product, get a batch of on-brand ad creatives ready for paid channels.",
    category: "E-commerce",
    stack: ["Next.js", "Firebase", "TypeScript", "ImageKit.io"],
    liveUrl: "https://example.com",
    image: adsImage,
  },
  {
    slug: "ai-testing-automation-agent",
    title: "AI Testing Automation Agent",
    description:
      "An agent that reads a repo, writes browser tests and reports regressions before release.",
    category: "Automation",
    stack: ["Next.js", "GitHub", "Browserbase", "Neon", "Drizzle ORM"],
    liveUrl: "https://example.com",
    image: testingImage,
  },
];

export const featuredProjects = projects.slice(0, 3);
