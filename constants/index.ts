import { FaGithub } from "react-icons/fa";
import {
  RxGithubLogo,
  RxLinkedinLogo,
  RxTwitterLogo,
  RxInstagramLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/AFNAN7788",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/muhammad-afnan-986244421",
  },
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/afnan.azfar.7?igsh=MTEwZGxmbGN5NzQ4cA%3D%3D&utm_source=qr",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Flutter",
    image: "flutter.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Java",
    image: "java.svg",
    width: 65,
    height: 65,
  },
  {
    skill_name: "C++",
    image: "cpp.svg",
    width: 65,
    height: 65,
  },
] as const;

export const PROJECTS = [
  {
    title: "Modern Berlin Restaurant",
    description:
      "A responsive restaurant website built with HTML, CSS, JavaScript, React.js, and Node.js featuring an intuitive user interface. Optimized performance and responsiveness across desktop and mobile devices with fast load times. Integrated backend functionality for booking management and dynamic content handling.",
    image: "/projects/project-1.png",
    link: "https://github.com/AFNAN7788",
  },
  {
    title: "One Spot: Smart E-commerce App",
    description:
      "A cross-platform Flutter application with two integrated modules — E-Shop for online shopping and Food for restaurant ordering, using Supabase as the backend. Implemented user authentication, product browsing, search, shopping cart, wishlist, order placement, and order history for a seamless experience.",
    image: "/projects/project-2.png",
    link: "https://github.com/AFNAN7788",
  },
  {
    title: "CAR RENTAL SYSTEM (Java)",
    description:
      "A Car Rental System in Java using OOP concepts. Implemented classes for vehicles, customers, and rental management. Simulated real-world operations with efficient object interactions and robust data handling.",
    image: "/projects/project-3.png",
    link: "https://github.com/AFNAN7788",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Connect",
    data: [
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/AFNAN7788",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/muhammad-afnan-986244421",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/afnan.azfar.7?igsh=MTEwZGxmbGN5NzQ4cA%3D%3D&utm_source=qr",
      },
      {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/AFNAN7788",
      },
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/muhammad-afnan-986244421",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "My GitHub",
        icon: null,
        link: "https://github.com/AFNAN7788",
      },
      {
        name: "My LinkedIn",
        icon: null,
        link: "https://www.linkedin.com/in/muhammad-afnan-986244421",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:afnanazfar15@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const CONTACT_LINK =
  "mailto:afnanazfar15@gmail.com?subject=Portfolio%20Inquiry";

export const LINKS = {
  sourceCode: "https://github.com/AFNAN7788",
  contact: CONTACT_LINK,
};
