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
            <p className="whitespace-break-spaces">
              I'm a web developer from the Philippines. I enjoy building
              beautiful and functional websites to rich interactive web
              applications. Fueled with abundant energy and versatility with a
              wide range of interests, I'm always eager to learn new things and
              take on new challenges. I'm also a quick learner and I'm able to
              juggle multiple projects and roles simultaneously. My favorite
              part of programming is the problem-solving aspect and I love the
              feeling of finally figuring out a solution to a problem.
            </p>
            <p className="mt-4">
              For any questions you might have, you can get in touch with me{" "}
              <a href="#contact" className=" font-bold">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      {/* <SectionHeading>About Me</SectionHeading> */}
    </motion.section>
  );
}


// After graduating with a degree in Computer Science, I worked in different business process outsourcing companies but not as a programmer. But, since I'm still taking different side projects and my love for coding pulls me in like a vortex, I decided to pursue my passion for programming. I enrolled in a free coding bootcamp and learned full-stack web development. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. My core stack is React, Next.js, Node.js, and MongoDB and I am always looking to learn new technologies.

// In my leisure time, I enjoy watching movies and spending quality time with my beloved wife and children.