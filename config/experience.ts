import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ExperienceInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  companyLogoImg2?: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr?: PagesInfoInterface[];
}

export const Experiences: ExperienceInterface[] = [
  {
    id: "pte-futo",
    companyName: "PTE-FUTO",
    type: "Personal Project",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Built an E-learning platform serving 500+ students with centralized study resources, GPA calculator, and educational blog.",
    websiteLink: "https://pte-futo.vercel.app/",
    githubLink: "https://github.com/chrismbah/pte-futo",
    techStack: ["React", "Typescript", "Firebase", "Tailwind CSS"],
    startDate: new Date("2023-01-05"),
    endDate: new Date("2024-03-18"),
    companyLogoImg: "/experience/pte-futo/landing-0.png",
    companyLogoImg2: "/experience/pte-futo/landing-1.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "Visually engaging and responsive landing page that introduces the platform’s features to new users.",
        imgArr: [
          "/experience/pte-futo/landing-1.png",
          "/experience/pte-futo/landing-2.png",
          "/experience/pte-futo/landing-4.png",
        ],
      },
      {
        title: "Study Materials Dashboard",
        description:
          "Central hub offering 100+ course materials, 30+ textbooks, and 50+ past questions for streamlined academic access.",
        imgArr: ["/experience/pte-futo/landing-3.png"],
      },
      {
        title: "GPA Calculator & Blog",
        description:
          "Interactive GPA calculator and an educational blog aimed at improving student learning and engagement.",
        imgArr: [
          "/experience/pte-futo/gpa.png",
          "/experience/pte-futo/blog.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "PTE-FUTO is a department-specific learning platform I built to centralize all academic resources for students in Polymer and Textile Engineering. It serves over 500 active users and includes study materials, textbooks, past questions, a GPA calculator, and an educational blog.",
        "The platform was developed using React, TypeScript, and Firebase, ensuring real-time updates, efficient data handling, and seamless user experience across devices.",
        "This project significantly improved study habits and academic engagement in the department by making learning materials easily accessible.",
      ],
      bullets: [
        "Built an E-learning web app with React, TypeScript, and Firebase, supporting 500+ active users.",
        "Centralized 100+ course materials, 50+ past questions, and 30+ textbooks into one platform.",
        "Created a GPA calculator tool to help students track academic performance.",
        "Established a department-specific blog to enhance learning and community engagement.",
        "Optimized the app for fast load times and seamless cross-device compatibility.",
      ],
    },
  },
  {
    id: "chronoscribe",
    companyName: "ChronoScribe",
    type: "Personal Project",
    category: ["Web Dev", "Full Stack"],
    shortDescription:
      "Built a full-featured blog platform with secure authentication and role-based post management.",
    techStack: ["React", "Node.js", "express.js", "MySQL"],
    githubLink: "https://github.com/chrismbah/chronoscribe",
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-06-14"),
    companyLogoImg: "/experience/chronoscribe/logo.png",
    pagesInfoArr: [
      {
        title: "Home & Blog Feed",
        description:
          "Dynamic landing page showing latest posts and categories. Fully responsive across devices.",
        imgArr: ["/experience/chronoscribe/home.png"],
      },
      {
        title: "Authentication & User Roles",
        description:
          "JWT-secured login, registration, and role-based access to create, edit, and delete posts.",
        imgArr: ["/experience/chronoscribe/auth.png"],
      },
      {
        title: "Post Editor",
        description:
          "Rich text editor for users to publish and manage their blog posts.",
        imgArr: ["/experience/chronoscribe/editor.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "ChronoScribe is a full-featured blog platform built using the MERN stack (React, Node.js, Express, MySQL). It supports authenticated users to create, edit, and manage blog posts securely.",
        "The app uses JWT-based authentication to restrict access, ensuring only authorized users can perform critical actions. It features a responsive UI and a MySQL-backed API to handle content management robustly.",
      ],
      bullets: [
        "Designed and implemented a full-stack blogging platform using React.js and Express.",
        "Used MySQL for relational data storage and implemented secure JWT-based authentication.",
        "Built RESTful APIs to support post creation, editing, and deletion with role-based access control.",
        "Focused on responsiveness and clean UI/UX to ensure seamless experience across devices.",
      ],
    },
  },
  {
    id: "mida-ai",
    companyName: "Mida Digitals",
    type: "Professional",
    category: ["Web Dev", "UI/UX", "Frontend"],
    shortDescription:
      "Designed and developed the landing page for Mida Digitals' upcoming AI Agents service, enhancing user engagement and providing a comprehensive overview of AI-driven business solutions.",
    websiteLink: "https://www.midadigitals.com/ai-agents",
    techStack: ["React", "Typescript", "Next.js", "ShadCN UI"],
    startDate: new Date("2025-02-10"),
    endDate: new Date("2025-02-12"),
    companyLogoImg: "/experience/mida/logo.png",
    pagesInfoArr: [
      {
        title: "AI Agents Landing Page",
        description:
          "A visually engaging and informative landing page introducing Mida Digitals' AI Agents services, designed to captivate and inform potential clients.",
        imgArr: [
          "/experience/mida/landing_1.png",
          "/experience/mida/landing_2.png",
          "/experience/mida/landing_3.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Collaborated with Mida Digitals to create a dedicated landing page for their forthcoming AI Agents service, aiming to showcase the transformative potential of AI in business operations.",
        "The project involved close coordination with Mida's team to understand their vision and translate it into a user-friendly and aesthetically pleasing web interface, utilizing Next JS and ShadCN UI for responsive design and optimal performance.",
        "This landing page serves as a strategic tool to generate interest and inform potential clients about the capabilities and benefits of integrating AI Agents into their business processes.",
      ],
      bullets: [
        "Developed a responsive and dynamic landing page to promote Mida Digitals' AI Agents service.",
        "Employed React and Tailwind CSS to ensure a modern and seamless user experience across devices.",
        "Worked closely with Mida's team to align the design and content with their branding and strategic objectives.",
        "Integrated interactive elements to enhance user engagement and effectively communicate the value proposition of AI Agents.",
      ],
    },
  },
  {
    id: "butterfliex-trading-platform",
    companyName: "ButterFliex",
    type: "Professional",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Developed the client side of a cryptocurrency trading platform for seamless conversion between crypto and multiple fiat currencies.",
    websiteLink: "https://butterfliex-web-app.vercel.app/",
    techStack: ["React", "Material UI", "Typescript"],
    startDate: new Date("2024-04-08"),
    endDate: new Date("2024-07-08"),
    companyLogoImg: "/experience/butterfliex/logo.png",
    pagesInfoArr: [
      {
        title: "User Registration Page",
        description:
          "Secure and user-friendly registration interface enabling users to create accounts effortlessly.",
        imgArr: ["/experience/butterfliex/register.png"],
      },
      {
        title: "User Login Page",
        description:
          "Streamlined login page with robust authentication mechanisms for user security.",
        imgArr: ["/experience/butterfliex/login.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Worked with the ButterFliex team to build a scalable and intuitive cryptocurrency trading platform that allows users to buy, sell, and convert crypto assets into multiple fiat currencies.",
        "The platform was architected with React on the frontend and Node.js with Express.js on the backend, integrated with a secure MongoDB database for handling user and transaction data.",
        "The goal was to provide a frictionless, real-time trading experience with security, speed, and scalability at the core.",
      ],
      bullets: [
        "Designed the frontend of a trading web platform supporting crypto-to-flat conversions across multiple currencies.",
        "Designed and implemented user registration, login, and authentication flows.",
        "Integrated real-time crypto pricing and streamlined trading functionality.",
        "Built a sleek, mobile-friendly UI using React and Material UI.",
      ],
    },
  },
  {
    id: "henry-navigator",
    companyName: "Henry Navigator",
    type: "Professional",
    category: ["Web Dev", "Frontend", "CMS"],
    shortDescription:
      "Designed and developed a real-estate web platform where users can explore real estate and construction projects, view project details, and get real-time pricing information.",
    websiteLink: "https://henrynavigator.com",
    techStack: ["Sanity CMS", "Next.js", "Typescript"],
    startDate: new Date("2025-08-08"),
    endDate: new Date("2025-08-22"),
    companyLogoImg: "/experience/henry-navigator/logo.png",
    pagesInfoArr: [
      {
        title: "Landing Page",
        description:
          "A clean and modern landing page showcasing the available projects and pricing.",
        imgArr: [
          "/experience/henry-navigator/landing_1.png",
          "/experience/henry-navigator/landing_2.png",
          "/experience/henry-navigator/landing_3.png",
        ],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Henry Navigator is a platform that allows users to explore various real estate and construction projects, providing comprehensive pricing information to help in decision-making. The platform aims to streamline the process of exploring available projects and getting real-time pricing data.",
        "The website is designed to offer a user-friendly experience, ensuring visitors can easily access the information they need.",
      ],
      bullets: [
        "Developed a real estate platform that showcases available projects and their pricing.",
        "Integrated real-time pricing information for better user decision-making.",
        "Created a responsive and modern landing page for project displays.",
      ],
    },
  },
  {
    id: "collabo-server",
    companyName: "Collabo Server",
    type: "Personal Project",
    category: ["Web Dev", "Backend"],
    shortDescription:
      "Developed a chat platform server with real-time messaging, and mutual chat request system.",
    githubLink: "https://github.com/chrismbah/chatflow-server",
    techStack: [
      "Node.js",
      "express.js",
      "MongoDB",
      "Typescript",
      "Socket.io",
      "OAuth",
      "Redis",
    ],
    startDate: new Date("2025-04-01"),
    endDate: new Date(),
    companyLogoImg: "/experience/collabo/logo.png",
    descriptionDetails: {
      paragraphs: [
        "Collabo is a  chat platform designed to foster meaningful collaboration between users and developers. This backend powers all the real-time communication, user authentication, and matching logic.",
        "The architecture is built with scalability and modularity in mind—leveraging Node.js and Express for APIs, MongoDB for data persistence, Redis for caching sessions, and Socket.io for real-time features.",
        "Authentication is handled through Google OAuth, and chat requests are only allowed between mutually consenting users, adding a layer of privacy and intent to conversations.",
      ],
      bullets: [
        "Built RESTful API endpoints for user, chat, and message management using Express and TypeScript.",
        "Integrated Google OAuth for secure and exclusive developer access.",
        "Implemented real-time messaging using WebSockets with custom events and room management.",
        "Designed a mutual chat request system to ensure meaningful developer connections.",
        "Structured the project using clean architecture principles for maintainability and scalability.",
      ],
    },
  },
  {
    id: "reely",
    companyName: "Reely!",
    type: "Personal Project",
    category: ["Web Dev", "Frontend"],
    shortDescription:
      "Designed an Instagram Reels-inspired interface featuring smooth vertical scrolling and immersive video playback experience.",
    websiteLink: "https://reely-eight.vercel.app/",
    githubLink: "https://github.com/chrismbah/reely",
    techStack: ["React", "Next.js", "Typescript", "Tailwind CSS"],
    startDate: new Date("2025-02-10"),
    endDate: new Date("2025-02-12"),
    companyLogoImg: "/experience/reely/logo.png",
    pagesInfoArr: [
      {
        title: "Reel Viewer",
        description:
          "An Instagram Reels-style video feed with smooth vertical scrolling, auto-play, and responsive layout optimized for both desktop and mobile.",
        imgArr: ["/experience/reely/reel-1.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Reely! is a client-side project inspired by Instagram Reels, developed during a coding interview to demonstrate smooth UI interactions and responsive design. The interface provides a scrollable vertical video feed that mimics the Reels experience.",
        "Though the project was part of an interview process, it was built with clean architecture, performance in mind, and a focus on smooth transitions and full-device responsiveness.",
      ],
      bullets: [
        "Designed and built a Reels-style video feed with smooth vertical scrolling transitions.",
        "Implemented responsive UI that adapts seamlessly to different device sizes and orientations.",
        "Focused on immersive user experience with auto-playing and snapping scroll behavior.",
        "Built using React, Next.js, TypeScript, and Tailwind CSS for speed and consistency.",
      ],
    },
  },
];

export const featuredExperiences = Experiences.slice(0, 6);
