"use client";

import React, {useState} from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import Image from "next/image";
import callImg from "../assets/lj3.png"

import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookMessenger,
  FaSkype,
} from "react-icons/fa";
export default function Contact() {
  const { ref } = useSectionInView("Contact");

  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here

    // Clear input and textarea values
    setInputValue('');
    setTextareaValue('');
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      {/* <SectionHeading>Contact</SectionHeading> */}
      <div className="flex items-center w-full">
        <div className="hidden lg:block md:p-6 w-1/2 text-black rounded-2xl xxl:mx-auto justify-normal">
          <Image
            src={callImg}
            width="400"
            height="300"
            quality="95"
            priority={true}
            className="xs:w-[220px] dark:opacity-80"
            alt="Character image of me smiling"
          />
        </div>
        <div className="px-6 md:px-6 py-6 md:py-0 lg:p-6">
          <SectionHeading>How to contact me? It's easy</SectionHeading>

          <p className="text-gray-700 -mt-6 dark:text-white/80">
            Kindly fill the form <span className="font-medium">or </span>{" "}
            contact me directly at{" "}
            <a className="underline" href="mailto:hello@leanderjosh.tech">
              hello@leanderjosh.tech
            </a>
          </p>
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col dark:text-black"
            action={async (formData) => {
              const { data, error } = await sendEmail(formData);

              if (error) {
                toast.error(error);
                return;
              }

              toast.success("Email sent successfully!");
            }
          }
          >
            <input
              className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
              onChange={(e) => setInputValue(e.target.value)}
              value={inputValue}
            />
            <textarea
              className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
              onChange={(e) => setTextareaValue(e.target.value)}
              value={textareaValue}
            />
            <SubmitBtn />
          </form>
        </div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="w-[350px] px-6 flex items-center justify-between mb-[-100px]">
          <a href="https://join.skype.com/invite/rAHMeMnjzvwB" target="_blank">
            <div className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10">
              <FaSkype />
              <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 bottom-full -translate-x-1/2 px-4 pointer-events-none">
                Messenger
              </div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/leanderjosh" target="_blank">
            <div className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10">
              <FaLinkedinIn />
              <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 bottom-full -translate-x-1/2 px-4 pointer-events-none">
                LinkedIn
              </div>
            </div>
          </a>
          <a href="https://www.github.com/leandrology" target="_blank">
            <div className="bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10">
              <FaGithub />
              <div className="opacity-0 bg-black text-white text-center text-xs font-raleway rounded-lg py-2 absolute z-40 group-hover:opacity-100 bottom-full -translate-x-1/2 px-4 pointer-events-none">
                GitHub
              </div>
            </div>
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
}
