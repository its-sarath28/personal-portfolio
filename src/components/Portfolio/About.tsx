"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/hooks/useSectionView";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[90%] lg:max-w-[50%] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="font-rubik lg:text-[18px] dark:text-gray-400">
        Hi, I'm Sarath — a full-stack developer who loves bringing ideas to life
        through clean, scalable code.
      </p>
      <p className="font-rubik lg:text-[18px] dark:text-gray-400">
        I specialize in crafting intuitive web and mobile experiences using
        technologies like{" "}
        <span className="dark:text-white text-gray-700 font-semibold dark:font-medium">
          React
        </span>
        ,{" "}
        <span className="dark:text-white text-gray-700 font-semibold dark:font-medium">
          Node.js
        </span>
        , and{" "}
        <span className="dark:text-white text-gray-700 font-semibold dark:font-medium">
          MongoDB
        </span>
        . From designing user-friendly interfaces to building robust backend
        systems, I enjoy working across the stack to create efficient and
        enjoyable digital solutions.
      </p>
      <p className="font-rubik lg:text-[18px] dark:text-gray-400">
        I'm always curious, constantly learning, and genuinely excited about
        solving real-world problems with tech. Whether it’s diving into a new
        framework or fine-tuning app performance, I approach every challenge
        with energy and a focus on growth.
      </p>
      <p className="font-rubik lg:text-[18px] dark:text-gray-400">
        Outside of code, you'll usually find me exploring new tools, leveling up
        my skills, or sipping coffee while brainstorming the next big idea ☕.
      </p>
    </motion.section>
  );
}
