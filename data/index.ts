import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "Building real-world projects that address practical challenges ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Leading teams and delivering results ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Exploring emerging tech through research",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on Generative AI and intelligent data systems",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;

export const projects = [
  {
    id: 1,
    title: "Nivesh: Financial Literacy and Investment Platform",
    des: "Developed a multilingual, voice-enabled investment platform with OCR, chatbot, and fraud detection.",
    img: "/1.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/Python.png"],
     link: "https://github.com/ishwari2277/VH24-Imperial",
    sourceCode: "https://github.com/ishwari2277/VH24-Imperial",
  },
  {
    id: 2,
    title: "Tarakpath: AI-Based Fast Routing Algorithm for Ships",
    des: "Engineered an adaptive A* routing algorithm with real-time data and a Digital Twin for optimized navigation, maintenance, and fuel efficiency.",
    img: "/Tarakapth.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/ishwari2277/Tarakpath",
    sourceCode: "https://github.com/ishwari2277/Tarakpath",
  },
  {
    id: 3,
    title: "Shop-Ease: Accessible E-Commerce Platform",
    des: "Accessible e-commerce with voice navigation, color blind mode, virtual trials, and AI-driven personalization.",
    img: "/shopease.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/ishwari2277/shopease",
    sourceCode: "https://github.com/ishwari2277/shopease",
  },
  {
    id: 4,
    title: "Chikitsa: Brain Tumor Detection Using MRI Scans",
    des: "Developed an AI system using CNNs to detect and localize brain tumors from MRI scans, enabling accurate, early diagnosis and faster clinical decisions.",
    img: "/chikitsa.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/ishwari2277/chikitsa",
    sourceCode: "https://github.com/ishwari2277/chikitsa",
  },
  {
    id: 5,
    title: "Trimbak Raj: Multilingual Product Showcase Website",
    des: "Multilingual agritech website showcasing organic products with usage guides in English, Hindi, and Marathi for broad farmer accessibility.",
    img: "/trimbakraj.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://trimbakrajagro-tech.netlify.app/",
    sourceCode: "https://github.com/ishwari2277/Trimbakraj",
  },
  {
    id: 6,
    title: "Dream Studio : Interior Designer Website",
    des: "Responsive, modern website for showcasing interior design portfolios, services, and testimonials, enhancing client engagement and digital presence.",
    img: "/Dream_studio.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://prismatic-lolly-58bf88.netlify.app/",
    sourceCode: "https://github.com/ishwari2277/Dreamy-Studio",
  },

] as const;

// In data/index.ts or data.js
export const testimonials = [
  {
   quote: "B.Tech in Information Technology (2022 to 2026)",
    name: "K.K. Wagh Institute of Engineering Education and Research, Nashik",
    title: "Final year with 8.48 CGPA. Focused on Software Engineering, Web Development, DBMS, and System Design.",
  },
  {
    quote: "B.Sc in Data Science and Applications (2024 to 2028)",
    name: "IIT Madras (Online)",
    title: "Pursuing with 7.6 CGPA. Studying Python, ML, Statistics, Data Structures, and Algorithms.",
  },
  {
    quote: "HSC - Maharashtra Board (2022)",
    name: "Shri Pramod Patil Junior College,Nashik",
    title: "Percentage: 80.83%",
  },
  {
    quote: "SSC - Maharashtra Board (2020)",
    name: "Maratha Highschool, Nashik",
    title: "Percentage: 96%",
  },
];



export const companies = [
  {
    id: 1,
    name: "devops",
    img: "/devops.png",
  
  },
  {
    id: 2,
    name: "Machine Learning",
    img: "/machine-learning.png",
  },
  {
    id: 4,
    name: "MongoDB",
    img: "/mongodb.png",
  },
  {
    id: 4,
    name: "react",
    img: "/react.png",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
  },
] as const;

export const workExperience = [
  {
    id: 1,
    title: "Research Internship – IIT Madras",
    desc: "Explored distributed algorithms and blockchain consensus. Improved cloud load balancing and reduced transaction delays in edge computing.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full Stack Developer – Datacrush Analytics",
    desc: "Built real-time, SEO-optimized MERN stack websites with responsive UI and API integrations.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
   {
    id: 3,
    title: "Finalist – Smart India Hackathon 2024",
    desc: "Selected as one of the top teams nationally for solving real-world problems with innovative tech solutions.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Winner – Engineering Exploration Project Contest",
    desc: "Secured 1st place in institute-level project & poster competition organized by IIC and Mechanical Department.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;

export const socialMedia = [
  {
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/ishwari2277",
  },
  {
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/ishwari-sangle/",
  },
] as const;

export const techStack = {
  stack1: ["React.js", "Python", "Machine Learning"],
  stack2: ["Devops", "AWS", "MongoDB"],
} as const;
