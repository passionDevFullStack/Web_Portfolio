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
        url: "https://www.linkedin.com/in/daniel-martin-59a7a5170",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "The Hong Kong University of Science and Technology",
      degree: "Bachelor's Degree, Information Technology Project Management",
      start: "2010",
      end: "2014",
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
      company: "Hack/House",
      position: "Senior Frontend Developer",
      logo: "https://media.licdn.com/dms/image/v2/C560BAQHsTZmsr2IYgA/company-logo_200_200/company-logo_200_200/0/1631747740800?e=1755734400&v=beta&t=GHN4SNWE3ZLR0Xy_WrqOFm9V-KTjbPER9hpog0yJZM4",
      location: "Toronto, Canada, Remote",
      startDate: "Nov 2022",
      endDate: "Present",
      description: "As a Senior Frontend Developer, I played a key role in migrating a legacy e-commerce platform to BigCommerce and maintaining the supporting infrastructure. I refactored backend systems, automated deployment processes, and ensured top-tier performance and uptime.",
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "Laravel",
        "GraphQL",
        "AWS",
        "CI/CD",
        "Sentry",
        "Git",
      ],
      achievements: [
        "Led migration to BigCommerce, improving load time by 40% and reducing bounce rate by 25%",
        "Refactored backend code to improve system performance and maintainability",
        "Maintained high uptime (99.99%) and incident response efficiency"
      ],
    },
    {
      company: "Keller Williams Realtys",
      position: "Senior Software Developer",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQEHFwO5u-11ag/company-logo_100_100/B4DZU4xn65G8AQ-/0/1740414288405?e=1750896000&v=beta&t=jMnJkMmxluTFTV7wejegwQGFhPmY0UHgio_wOzeyqwY",
      location: "Austin, Texas, United States, Remote",
      startDate: "Aug 2020",
      endDate: "Aug 2022",
      description:
        "As a Senior Full Stack Developer, I contributed to the development of enterprise-level real estate platforms. I worked closely with design and UX teams, improved backend service performance, and implemented thorough testing practices within a CI/CD environment.",
      skills: [
        "React",
        "JavaScript",
        "Modular UI architecture",
        "Node.js",
        ".Net",
        "MySQL",
        "Oracle",
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "Unit & Integration Testing"
      ],
      achievements: [
        "Delivered key front-end features for enterprise-scale real estate platforms",
        "Built robust testing pipelines, significantly improving release stability",
        "Enhanced system performance across full stack while supporting remote Agile teams"
      ],
    },
    {
      company: "SARCHITECH LTD",
      position: "Full Stack Developer",
      logo: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
      location: "London, UK Remote",
      startDate: "Aug 2020",
      endDate: "Jun 2017",
      description:
        "As a Unity Developer, I led the development of interactive XR/AR experiences tailored to industrial needs. I worked in close collaboration with remote cross-functional teams to bring high-performance Unity applications to life, with robust real-time data handling and UI components.",
      skills: [
        "Unity",
        "C#",
        "XR/AR",
        "Mobile",
        "iOS",
        "Git/Github",
        "Agile Development",
        "corss-functional collaboration",
      ],
      achievements: [
        "Led development of XR/AR apps for industrial clients",
        "Created modular Unity components to support scalable 3D user interfaces",
        "Integrated cloud-based real-time control systems for field operations"
      ],
    },
    {
      company: "Altoros",
      position: "Full Stack Developer",
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQG87FvfiA9dgQ/company-logo_100_100/company-logo_100_100/0/1686067368517/altoros_systems_logo?e=1755734400&v=beta&t=RV5qrL6GTatzFU46PnVfJVzg8UslXWvrvCPkVLrfVsk",
      location: "Pleasanton, CA, USA Remote",
      startDate: "Aug 2020",
      endDate: "Jun 2017",
      description:
        "At Altoros, I worked as a Software Developer on Unity-based applications, enhancing the engine’s capabilities through native Android integrations. My work focused on XR/AI solutions, cross-platform deployment, and creating modular UI systems for complex applications.",
      skills: [
        "Java",
        "C#",
        "C++",
        "JavaScript",
        "Unity",
        "Android",
        "Agile",
        "Modular in Unity"
      ],
      achievements: [
        "Built Android-native plugins via JNI for deep Unity hardware integration",
        "Created high-performance, AI-enhanced XR apps across multiple platforms",
        "Delivered reusable UI components to improve user interaction and productivity"
      ],
    },
  ],
} as const;
