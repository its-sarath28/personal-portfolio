"use client";

import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useSectionInView } from "@/hooks/useSectionView";
import SectionHeading from "./SectionHeading";
import SubmitBtn from "./SubmitBtn";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
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
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 font-rubik -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a
          className="underline font-medium"
          href="mailto:iamsarathrs@gmail.com"
        >
          iamsarathrs@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { success, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          if (success) {
            toast.success("Email sent successfully!");
          }
        }}
      >
        <input
          className="h-14 px-4 rounded-lg bg-gray-300 dark:bg-gray-700 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none outline-none focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-offset-1 placeholder:text-gray-500 dark:placeholder:text-gray-400 font-rubik text-black dark:text-white"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 bg-gray-300 dark:bg-gray-700 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none outline-none focus:outline-none focus:ring-4 focus:ring-gray-400 focus:ring-offset-1 resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400 font-rubik text-black dark:text-white"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
