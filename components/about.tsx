"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import aboutImage from "../assets/lj1.png"

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 w-full xl:container mx-auto"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >

<div className="flex items-center  w-full">
  <div className="hidden lg:block mb-4 lg:w-1/2 w-1/2 ml-40 rounded-2xl xxl:mx-auto justify-normal">
  <Image
              src={aboutImage}
              alt="Leander image"
              width="400"
              height="300"
              quality="95"
              priority={true}
              className="xs:w-[220px] dark:opacity-80"
            />
  </div>
  <div className="flex w-full lg:w-1/2 mb-4 justify-normal">
    <div className="mb-3 text-justify">
        <p>
          <span> After graduating with a degree in{" "}
          <span className="font-medium">Computer Science</span></span>, I worked in different
          business process outsourcing companies but  <span className="font-medium">not</span> as a programmer.
          But, since I'm still taking different side projects and my love for coding pulls me in like a vortex, I decided to pursue my
          passion for programming. I enrolled in a <span className="font-medium">free</span> coding bootcamp and learned{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span>My favorite part of programming</span> is the
          problem-solving aspect. I <span className="font-medium">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span> and I am always looking to
          learn new technologies. 
        </p>  
        <p>
          <span>In my leisure time</span>, I enjoy watching movies and spending quality time with my beloved wife and children.
        </p>
      </div>
  </div>
</div>
      {/* <SectionHeading>About Me</SectionHeading> */}

      
      
    </motion.section>
  );
}
