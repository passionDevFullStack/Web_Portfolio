import { GitHubIcon, LinkedInIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Daniel Martin",
  location: "Colombia",

  about: "I'm Daniel Martin, a Senior Full Stack Engineer with 10 years of experience building scalable web, mobile, and XR/AR solutions. Skilled in React, Next.js, Node.js, Laravel, Unity, AWS, and Azure, I excel at modernizing systems, integrating AI, and delivering high-performance, user-focused applications in fast-paced, remote environments.",
  summary:
    "Software Developer with 10 years of experience delivering scalable, high-performance solutions across mobile, web, and enterprise platforms. Proven expertise in full-stack development, frontend engineering, and mobile app creation, with additional strengths in AI-driven features, cloud-native development, DevOps automation. Skilled at architecting robust systems on AWS and Azure, integrating machine learning APIs, and deploying applications through CI/ CD pipelines.Adept at translating business requirements into maintainable code while collaborating effectively with cross - functional teams to deliver impactful user experiences and meet aggressive deadlines.",
  avatarUrl: "./avatar.png",

  contact: {
    email: "danielmartindevfullstack@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/passiondevfullstack",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/daniel-dream-archiever",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "The Hong Kong University of Science and Technology",
      degree: "Bachelor's Degree, Information Technology Project Management"
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Vue.js",
    "Angular",
    "HTML5",
    "CSS3",
    "SCSS",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "REST APIs",
    "GraphQL",
    "SQL",
    "MongoDB",
    "Firebase",
    "AWS",
    "Azure",
    "GCP",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitHub Actions",
    "Web3 Integration",
    "AI API Integration",
    "Responsive Design",
    "Mobile App Development",
    "Unit Testing",
    "CI/CD",
    "FastAPI",
    "Python"
  ],

  projects: [
    {
      title: "Pongy",
      techStack: ["Next.js", "React", "TypeScript"],
      description:
        "Pong contest website with real-time multiplayer games, chat, and security",
      link: {
        label: "github.com",
        href: "https://github.com/Fernando-threejs/PingPong",
      },
    },
    {
      title: "Wordle-Game clone",
      techStack: ["Html", "Css", "JavaScript"],
      description: "a simple clone of the famous wordle game",

      link: {
        label: "github.com",
        href: "https://github.com/Fernando-threejs/blog",
      },
    },
    {
      title: "Inception",
      techStack: ["Docker", "Nginx", "mariaDb", "Wordpress"],
      description:
        "Created a Docker-based multi-container infrastructure with Nginx, WordPress, and MariaDB for a web application.",
      link: {
        label: "github.com",
        href: "https://github.com/Fernando-threejs/inception",
      },
    },
    {
      title: "IRC",
      techStack: ["C++", "Socket Programming"],
      description:
        "Internet Relay Chat server (Communication protocol on the Internet)",
      link: {
        label: "github.com",
        href: "https://github.com/Fernando-threejs/IRC",
      },
    },
    {
      title: "cub3D",
      techStack: ["C", "Graphics"],
      description:
        "My first RayCaster with miniLibX. This project is inspired by the world-famous Wolfenstein 3D game.",
      link: {
        label: "github.com",
        href: "https://github.com/Fernando-threejs/cub3D",
      },
    },
    {
      title: "sash",
      techStack: ["C", "Software Design and Architecture"],
      description: "simple implementation of Unix Shell with C",
      link: {
        label: "github.com",
        href: "https://github.com/Fernando-threejs/Sash",
      },
    },
  ],

  experience: [
    {
      "company": "Hack/House",
      "position": "Software Engineer",
      "startDate": "Nov 2022",
      "endDate": "July 2025",
      "description": "Built high-performance cross-platform apps and web solutions, integrating AI features and ensuring maintainable, test-driven code.",
      "skills": ["React Native", "Nuxt.js", "Firebase", "REST APIs", "GraphQL", "SQLite", "IndexedDB", "OpenAI API", "Jest", "React Testing Library"],
      "achievements": [
        "Developed mobile and web apps with optimized performance",
        "Integrated REST/GraphQL APIs with offline storage",
        "Added AI-powered content tools using OpenAI API",
        "Created reusable UI components for faster delivery",
        "Established testing workflows for reliable releases"
      ]
    },
    {
      "company": "Keller Williams Realty, LLC",
      "position": "Software Developer",
      "startDate": "Dec 2020",
      "endDate": "Sep 2022",
      "description": "Delivered enterprise platform features with scalable design, intuitive UX, and automated DevOps pipelines.",
      "skills": ["Vue.js", "Nuxt.js", "Node.js", "TailwindCSS", "SCSS", "AWS", "Docker", "GitHub Actions", "Kubernetes", "FastAPI", "Python"],
      "achievements": [
        "Built marketing and automation tools for real estate agents",
        "Improved accessibility with TailwindCSS/SCSS UI components",
        "Implemented AWS/Docker/Kubernetes CI/CD pipelines",
        "Integrated REST APIs with FastAPI services",
        "Delivered clean, maintainable TypeScript code"
      ]
    },
    {
      "company": "SARCHITECH LTD",
      "position": "Software Developer",
      "startDate": "Jun 2017",
      "endDate": "Aug 2020",
      "description": "Developed full-stack enterprise solutions with robust APIs, scalable architectures, and automated deployments.",
      "skills": ["React.js", "Angular", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "FastAPI", "Python", "GitHub Actions", "Jenkins"],
      "achievements": [
        "Built enterprise apps with React.js, Angular, and Node.js",
        "Designed scalable backend services (MongoDB, PostgreSQL)",
        "Developed REST/FastAPI endpoints",
        "Managed CI/CD with GitHub Actions/Jenkins",
        "Implemented secure auth with JWT/OAuth 2.0"
      ]
    },
    {
      "company": "Altoros",
      "position": "Frontend Developer",
      "startDate": "Apr 2015",
      "endDate": "Apr 2017",
      "description": "Created responsive, high-performance frontend solutions for Web3 platforms with blockchain API integration.",
      "skills": ["React.js", "JavaScript", "Web3", "Responsive Design", "UI Components", "Blockchain API Integration"],
      "achievements": [
        "Built responsive Web3 applications in React.js",
        "Developed reusable UI components",
        "Optimized API data flow with backend teams",
        "Implemented design systems for dApp interfaces"
      ]
    }
  ],
} as const;
