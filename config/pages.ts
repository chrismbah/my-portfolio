import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Christian Mbah's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description:
        "Christian Mbah's key skills that define his professional identity.",
    },
  },
  experience: {
    title: "Experience",
    description: "Highlighting career journey and impactful projects.",
    metadata: {
      title: "Experience",
      description: "Christian Mbah's experience in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Christian Mbah.",
    },
  },
  blog: {
    title: "Blog",
    description: "My tech write-ups, tutorials, and insights.",
    metadata: {
      title: "Blog",
      description:
        "Christian Mbah's technical articles, tutorials, and development insights.",
    },
  },
  resume: {
    title: "Resume",
    description: "Christian Mbah's resume.",
    metadata: {
      title: "Resume",
      description: "Christian Mbah's resume.",
    },
  },
};
