import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import breadsImg from "@/assets/proj3.jpg"
import vicesImg from "@/assets/proj2.jpg"
import patagueImg from "@/assets/proj1.jpg"

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
      "I earned my vocational degree after 2 years of studying at Asian Institute of Science and Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "April 2016",
  },
  {
    title: "Freelancer",
    location: "Cavite, PH",
    description:
      "I started taking different freelance jobs such as Video Editing, Image Manipulations and Web Developing which I still do up until now.",
    icon: React.createElement(FaReact),
    date: "2016 - present",
  },
  {
    title: "Teammate",
    location: "Manila, PH",
    description:
      "I worked at TaskUs —  a BPO company which enhanced my professional and personal growth.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Senior Process Executive",
    location: "Manila, PH",
    description:
      "I worked at Cognizant —  a BPO company where I assisted shareholders for an insurance company.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },

] as const;

export const projectsData = [
  
  {
    title: "Vices",
    description: "An online platform that allows customers to browse and purchase laptops integrated with Stripe.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Sanity", "Stripe"],
    imageUrl: vicesImg,
    url: 'https://vices-sigma.vercel.app',
  },
  {
    title: "Patague Land Surveys",
    description:
      "A comprehensive platform dedicated to providing top-quality land surveying services",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer", "Swiper"],
    imageUrl: patagueImg,
    url: 'https://pataguelandsurveys.vercel.app',

  },
  {
    title: "Breads",
    description:
      "A web app that allows users to engage in public conversations, create profiles, and connect with communities.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "MongoDB", "Clerk", "ShadCDN", "Zod"],
    imageUrl: breadsImg,
    url: 'https://breads-silk.vercel.app',

  },
  {
    title: "Fillaron",
    description:
      "Fillaron is good ",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
    url: 'https://vices-sigma.vercel.app',

  },
  
] as const;

export const skillsData = [
  "HTML 5",               
  "CSS 3",
  "JavaScript",
  "SaaS",
  "TypeScript",
  "PHP",
  "React",
  "NextJS",
  "Express",
  "TailwindCSS",
  "NodeJS",
  "MongoDB",
  "Git",
  "Bootstrap",
  "Prisma",
  "GraphQL",
  "Framer",
  "Clerk",
  "Sanity",
  "Figma",
  "Wordpress",
  "Shopify",
  "Photoshop",                          
  "Premiere Pro",
  "Davinci Resolve",
] as const;
