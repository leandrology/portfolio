import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import breadsImg from "../assets/proj3.jpg";
import vicesImg from "../assets/proj2.jpg";
import patagueImg from "../assets/proj1.jpg";
import fillaronImg from "../assets/proj4.jpg";
import bookieImg from "../assets/proj5.jpg";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated College",
    location: "Cavite, PH",
    description:
      "Following a 2-year program of study at the Asian Institute of Science and Technology, I successfully earned my vocational degree.",
    icon: React.createElement(LuGraduationCap),
    date: "April 2016",
  },
  {
    title: "Freelancer",
    location: "Cavite, PH",
    description:
      "From video editing and image manipulation to web development, I have taken on a variety of freelance jobs over time, which I continue to pursue to this day.",
    icon: React.createElement(FaReact),
    date: "2016 - present",
  },
  {
    title: "Teammate",
    location: "Manila, PH",
    description:
      "I worked at TaskUs —  a BPO company which contributed immensely to my personal development, with particular emphasis on enhancing my verbal and written communication prowess.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Senior Process Executive",
    location: "Manila, PH",
    description:
      "I worked at Cognizant —  a BPO firm, wherein I extended assistance and addressed the concerns of shareholders connected to an insurance corporation.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "ReactJS Developer | Python Developer",
    location: "Cavite, PH",
    description:
      "Currently working as ReactJS Developer for ServingIntel — a leading provider of transaction management solutions for senior living and family dining that enables you to best serve your guests and increase operating income.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Vices",
    description:
      "An online platform that allows customers to browse and purchase laptops integrated with Stripe.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Sanity", "Stripe"],
    imageUrl: vicesImg,
    url: "https://vices-sigma.vercel.app",
  },
  {
    title: "Bookie",
    description:
      "A web bookstore where you can chat with an AI support regarding the products.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "OpenAI",
      "Chatbot",
      "ShadCDN",
    ],
    imageUrl: bookieImg,
    url: "https://bookie-henna.vercel.app/",
  },
  {
    title: "Breads",
    description:
      "A web app that allows users to engage in public conversations, create profiles, and connect with communities.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "MongoDB",
      "Express",
      "Node",
      "Clerk",
      "ShadCDN",
      "Zod",
    ],
    imageUrl: breadsImg,
    url: "https://breads-silk.vercel.app",
  },
  {
    title: "Patague Land Surveys",
    description:
      "A comprehensive platform dedicated to providing top-quality land surveying services",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer", "Swiper"],
    imageUrl: patagueImg,
    url: "https://pataguelandsurveys.vercel.app",
  },
  {
    title: "Fillaron",
    description:
      "AI web app that generates imaginative and visually stunning images.",
    tags: [
      "React",
      "Next.JS",
      "Express",
      "MongoDB",
      "Node",
      "OpenAI",
      "Tailwind",
      "Typescript",
      "Vite",
      "Cloudinary",
    ],
    imageUrl: fillaronImg,
    url: "https://fillaron.netlify.app",
  },
] as const;

export const skillsData = [
  "HTML 5",
  "CSS 3",
  "JavaScript",
  "React",
  "NextJS",
  "Python",
  "TailwindCSS",
  "TypeScript",
  "Express",
  "MongoDB",
  "SQL",
  "GraphQL",
  "NodeJS",
  "Git",
  "Bootstrap",
  "Prisma",
  "Framer",
  "Clerk",
  "Sanity",
  "Figma",
  "Botpress",
  "Stack AI",
  "OpenAI",
  "Virtual Machines",
  "Web Scraping",
  "Photoshop",
  "Premiere Pro",
] as const;
