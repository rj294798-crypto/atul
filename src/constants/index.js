import { BCS } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  sql,
  mui,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  jest,
  linux,
  docker,
  kubernetese,
  cicd,
} from "../assets/icons";

export const techStack = [
  // Frontend
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },

  // Backend
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: jest,
    name: "Jest",
    type: "Backend",
  },

  // Version Control
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  // Database
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Database",
  },

  // DevOps
  {
    imageUrl: cicd,
    name: "CI/CD",
    type: "DevOps",
  },
  {
    imageUrl: docker,
    name: "Docker",
    type: "DevOps",
  },
  {
    imageUrl: kubernetese,
    name: "Kubernetese",
    type: "DevOps",
  },
  {
    imageUrl: linux,
    name: "Linux",
    type: "DevOps",
  },
];

export const experiences = [
  {
    title: "Full-stack Developer",
    company_name: "BCSolutions",
    icon: BCS,
    iconBg: "#FFF",
    date: "April 2023 - Present",
    points: [
      "As a key member of the R&D team, I specialize in developing and maintaining eas'Invoice, a cutting-edge e-invoicing solution.",
      "My expertise lies in crafting seamless functionalities, ensuring eas'Invoice efficiently handles formats like Factur-X.",
      "I leverage JavaScript, React, and Node.js to engineer robust solutions.",
      "My solutions streamline processes, reduce costs, and secure invoice delivery.",
    ],
  },
  {
    title: "Freelance Full-stack Developer",
    company_name: "MIRAL | KONFIGEAR | LEWINNERSCLUB | TM-CONSULTING | ...",
    iconBg: "#BBB",
    date: "May 2020 - April 2023",
    points: [
      "I've developed interactive web solutions for clients across Morocco, France, and UAE, collaborating with MIRAL, KONFIGEAR, and WINNERS CLUB.",
      "My experience spans technologies like React.js, Node.js, and database integration with MongoDB and Firebase.",
      "Additionally, I have experience in WordPress CMS for content management, alongside Shopify theme development.",
      "I have implemented payment solutions using Stripe for subscriptions and other payment methods.",
      "With experience in Azure and GitLab for CI/CD pipelines and repository management, I deliver scalable, customized solutions tailored to client needs.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Hermes-fire",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/aminesadali",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  /* 
  TO DO: Generate data the think about improvement to the component to hold images

  object:
  image array
  link array
  description array

  project list:
  eas'Invoice '(needs screen)
  BRAVASHOTEL Calendar ok
  KONFIGEAR ok
  MIRAL ok
  LEWINNERSCLUB ok
  */
];
