import { Icons } from "@/components/icons";
import { FileDown } from "lucide-react";


export const DATA = {
  name: "Vaishnavi Sapkale",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer building full-stack applications, and autonomous AI agents.",
  summary: `
Software Developer with 1.3 years of experience building modern web applications. 
Currently, I'm focused on AI engineering, building AI agents, developer tools, and LLM-powered applications while 
exploring Context Engineering, MCP, and autonomous agent systems.`,
  avatarUrl: "/me.png",
  skills: [
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "React" },
    { name: "Redis" },
    { name: "AI Agents" },
    { name: "Context Engineering" },
    { name: "LLM tool calling" },
    { name: "MCP" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    {name: "Web Socket"},
    { name: "Git" },
    { name: "REST APIs" },

  ],
  navbar: [
    { href: "/Vaishnavi_Sapkale_resume.pdf", icon: FileDown, label: "Download Resume" },
  ],
  contact: {
    email: "sapkale.vaishnavi.dev@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vaishnavisapkale",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vaishnavi-sapkale/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/VaishnaviS_dev",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sapkale.vaishnavi.dev@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Harjai Computers Pvt Ltd",
      href: "https://atomic.finance",
      badges: [],
      location: "Pune",
      title: "Software Developer",
      logoUrl: "/harjai.png",
      start: "Feb 2024",
      end: "May 2025",
      description:
        "Worked as a Software Developer on enterprise web applications using Angular, Java, Spring Boot, and REST APIs. Built reusable frontend components, integrated backend services, contributed to the Mystique low-code/no-code platform by developing modules that enabled users to build applications through drag-and-drop workflows.",
    },
  ],
  education: [
    {
      school: "Shri Dadaji Institute Of Technology And Science",
      href: "https://buildspace.so",
      degree: "Bachelor of Technology (Computer Science Engineering)",
      logoUrl: "/RGPVLOGO.jpeg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "HarnessCLI",
      href: "https://vaishnavisapkale.github.io/harness-cli/",
      dates: "June 2026 - Present",
      active: true,
      description:
        "An open-source AI coding assistant that brings autonomous software engineering workflows to the terminal. Supports tool calling, project understanding, file editing, task execution, and conversational development powered by modern LLMs.",
      technologies: [
        "Typescript",
        "Bun",
        "Gemini",
        "Ink",
      ],
      links: [

        {
          type: "Website",
          href: "https://vaishnavisapkale.github.io/harness-cli/",
          icon: <Icons.globe className="size-3" />,
        },
          {
          type: "Source",
          href: "https://github.com/vaishnavisapkale/harness-cli",
          icon: <Icons.github className="size-3" />,
        },
                {
          type: "Package",
          href: "https://www.npmjs.com/package/harness-terminal",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/harness.mp4",
    },
    {
      title: "Centralized Exchange",
      href: "https://cex-ten.vercel.app/",
      dates: "June 2026 ",
      active: true,
      description:
        "Built a Centralized exchange featuring a matching engine,order book, wallet management, WebSocket-based real-time updates, Redis pub/sub, PostgreSQL persistence, and a modern React frontend.",

      technologies: [
        "Express",
        "Typescript",
        "Redis",
        "React",
        "PostgreSQL",
        "Prisma",
        "Web Socket",
      ],
      links: [
        {
          type: "Website",
          href: "https://cex-ten.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/vaishnavisapkale/Centralized-Exchange",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/videos/CEX.mp4",
    },
     {
      title: "Voice Ai Agent",
      href: "https://ai-voice-agent-baseversion.vercel.app/",
      dates: "September 2026 - Present",
      active: true,
      description:
        "A base AI voice agent built to understand the fundamentals of voice AI. Records voice in the browser, converts speech to text using Gemini, generates an AI response, and converts the response back to speech using the browser's SpeechSynthesis API.",
      technologies: [
        "Typescript",
        "Node.js",
        "Express",
        "React",
        "Gemini"
      ],
      links: [

        {
          type: "Website",
          href: "https://ai-voice-agent-baseversion.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
          {
          type: "Source",
          href: "https://github.com/vaishnavisapkale/AI-Voice-Agent",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "/voice-ai.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
