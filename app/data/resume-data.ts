import { GitHubIcon, LinkedInIcon } from "../components/icons";

export const RESUME_DATA = {
  name: "Daniel Martin",
  location: "Colombia",

  about:
    "I'm Daniel Martin, a Senior Full Stack Engineer with over 10 years of experience building scalable web applications and immersive XR/AR solutions. I specialize in technologies like React, Next.js, Node.js, Laravel, and Unity, and have a strong track record of leading remote teams, modernizing legacy systems, and optimizing performance for enterprise and e-commerce platforms.\nWith a passion for clean code, robust architecture, and user-focused design, I bring both technical depth and a collaborative mindset to every project. I'm fully remote-ready and comfortable working across global time zones to deliver high-quality solutions—fast.",
  summary:
    "Senior Full Stack Web Developer with 10+ years of experience designing scalable, high-performance web applications. Proven leader in full-cycle project delivery, legacy modernization, and e-commerce development using React, Next.js, Node.js, Laravel, AWS, and BigCommerce. Skilled in mentoring junior engineers, leading cross-functional teams, and driving solutions in Agile environments. Fully remote-ready and flexible across global time zones.",
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
    "C",
    "C++",
    "Html",
    "Three.js",
    "Tailwind Css",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Node.js/Next.js",
    "Docker",
    "Git",
    "Jira",
    "Agile/Scrum",
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
      "description": "Led the design and development of cross-platform mobile and responsive web applications with a focus on performance, maintainability, and AI integration.",
      "skills": [
        "React Native",
        "Nuxt.js",
        "Firebase",
        "REST APIs",
        "GraphQL",
        "SQLite",
        "IndexedDB",
        "OpenAI API",
        "Jest",
        "React Testing Library"
      ],
      "achievements": [
        "Designed and developed cross-platform mobile apps (iOS, Android) and responsive web apps with optimized load times and smooth UX",
        "Integrated REST APIs and GraphQL with offline storage via SQLite and IndexedDB for robust functionality in low-connectivity scenarios",
        "Integrated AI-powered content generation via OpenAI API, reducing manual editing time for social media content",
        "Architected reusable UI components to accelerate delivery cycles and ensure design consistency",
        "Established unit and integration testing workflows, ensuring stable, high-quality releases"
      ]
    },
    {
      "company": "Keller Williams Realty, LLC",
      "position": "Software Developer",
      "startDate": "Dec 2020",
      "endDate": "Sep 2022",
      "description": "Developed enterprise-level real estate platform features with a focus on intuitive design, scalability, and robust deployment pipelines.",
      "skills": [
        "Vue.js",
        "Nuxt.js",
        "Node.js",
        "TailwindCSS",
        "SCSS",
        "AWS",
        "Docker",
        "GitHub Actions",
        "Kubernetes",
        "FastAPI",
        "Python"
      ],
      "achievements": [
        "Built and optimized marketing features such as landing page tools, social media post generators, and print material templates",
        "Developed user-friendly UI components with TailwindCSS and SCSS to improve accessibility for non-technical users",
        "Implemented DevOps pipelines with AWS, Docker, Kubernetes, and GitHub Actions for automated deployment and scaling",
        "Integrated REST APIs with backend services built on FastAPI (Python)",
        "Delivered maintainable, well-documented code adhering to SOLID principles and modern JavaScript/TypeScript practices",
        "Worked with product teams to align features with business priorities"
      ]
    },
    {
      "company": "SARCHITECH LTD",
      "position": "Software Developer",
      "startDate": "Jun 2017",
      "endDate": "Aug 2020",
      "description": "Contributed to full-stack development projects for enterprise clients, focusing on scalable architecture, API integration, and deployment automation.",
      "skills": [
        "React.js",
        "Angular",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "FastAPI",
        "Python",
        "GitHub Actions",
        "Jenkins"
      ],
      "achievements": [
        "Developed full-stack solutions using React.js, Angular, Node.js, and Express.js for enterprise-scale projects",
        "Designed scalable backend services with MongoDB and PostgreSQL",
        "Built REST APIs and FastAPI endpoints for frontend integration",
        "Managed CI/CD pipelines in GitHub Actions and Jenkins for automated deployment",
        "Implemented secure authentication and authorization flows with JWT and OAuth 2.0"
      ]
    },
    {
      "company": "Altoros",
      "position": "Frontend Developer",
      "startDate": "Apr 2015",
      "endDate": "Apr 2017",
      "description": "Specialized in building responsive, high-performance frontend solutions for Web3 products with seamless blockchain API integration.",
      "skills": [
        "React.js",
        "JavaScript",
        "Web3",
        "Responsive Design",
        "UI Components",
        "Blockchain API Integration"
      ],
      "achievements": [
        "Developed and maintained responsive frontend applications optimized for Web3 use cases",
        "Built scalable, reusable UI components in React.js",
        "Collaborated with backend teams to optimize API communication and data flow",
        "Implemented design systems for consistent branding across decentralized application interfaces"
      ]
    }
  ],
} as const;
