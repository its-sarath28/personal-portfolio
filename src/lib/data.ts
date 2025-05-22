import foodiorImage from "@/assets/Foodior.png";
import expenseTracker from "@/assets/Expense-tracker.png";
import projectManagement from "@/assets/Project_management.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";

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

export const projectsData = [
  {
    title: "Project Management Web App",
    description:
      "A full-stack project management platform with features for managing workspaces, projects, and tasks. Built with server-side rendering, real-time database integration, and a clean, responsive UI.",
    tags: ["NextJS", "Hono", "AppWrite", "Shadcn UI"],
    imageUrl: projectManagement,
    githubLink: "https://github.com/its-sarath28/project_management_web_app",
  },
  {
    title: "Expense Tracker App",
    description:
      "The Expense Tracker App is a sleek mobile application that helps users seamlessly manage and monitor their daily spending. Built with React Native and Firebase, it offers real-time expense tracking, intuitive charts, and secure cloud data storage.",
    tags: ["React Native", "Firebase", "Cloudinary"],
    imageUrl: expenseTracker,
    githubLink: "https://github.com/its-sarath28/expense-tracker",
  },
  {
    title: "Foodior - Recipe App",
    description:
      "Welcome to Foodior, the ultimate destination for culinary enthusiasts! Dive into a world where flavors converge, experiences unfold seamlessly, and every dish tells a story of innovation and passion.",
    tags: ["React", "Tailwind", "Cloudinary", "MongoDB", "NodeJS", "ExpressJS"],
    imageUrl: foodiorImage,
    githubLink: "https://github.com/its-sarath28/foodior-the-recipe-app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Postman",
  "SocketIO",
  "Redux",
  "Express",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Software Developer",
    location: "My Famto Pvt Ltd",
    description:
      "Started my career as a Software Developer working on full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - present",
    points: [
      "Designed scalable database architecture and built RESTful APIs from scratch.",
      "Built a React Native mobile app from the ground up while learning the framework.",
      "Developed an interactive Admin dashboard using TanStack Query and optimized MongoDB performance.",
    ],
  },
  {
    title: "MERN Stack Developer Intern",
    location: "Mashupstack",
    description:
      "This internship was my first hands-on experience where I learned and applied MERN stack technologies in real projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023 - Apr 2024",
    points: [
      "Built full-stack web applications using React.js, Node.js, and Express.js under mentor guidance.",
      "Learned to implement JWT authentication and manage state using Redux.",
      "Gained practical experience in API development and working with MongoDB.",
    ],
  },
] as const;
