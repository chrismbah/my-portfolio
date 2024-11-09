/* eslint-disable react/prop-types */
import "./Skills.css";
import { motion } from "framer-motion";
import { variants1, variants3 } from "../../animations/variants";
import {
  html,
  css,
  js,
  ts,
  react,
  tailwind,
  git,
  github,
  vercel,
  vite,
  python,
  vscode,
  pycharm,
  firebase,
  express,
  nextjs,
  nodejs,
  mysql,
  mongodb,
} from "../../helper/icons";

const skillsData = [
  { name: "HTML", icon: html, category: "Languages" },
  { name: "CSS", icon: css, category: "Languages" },
  { name: "JavaScript", icon: js, category: "Languages" },
  { name: "TypeScript", icon: ts, category: "Languages" },
  { name: "Node JS", icon: nodejs, category: "Languages" },
  { name: "Python", icon: python, category: "Languages" },
  { name: "React", icon: react, category: "Frameworks" },
  { name: "Tailwind", icon: tailwind, category: "Frameworks" },
  { name: "Firebase", icon: firebase, category: "Frameworks" },
  { name: "Express", icon: express, category: "Frameworks" },
  { name: "Next JS", icon: nextjs, category: "Frameworks" },
  { name: "MySQL", icon: mysql, category: "Databases" },
  { name: "MongoDB", icon: mongodb, category: "Databases" },
  { name: "Git", icon: git, category: "Tools" },
  { name: "GitHub", icon: github, category: "Tools" },
  { name: "Vercel", icon: vercel, category: "Tools" },
  { name: "Vite", icon: vite, category: "Tools" },
  { name: "VS Code", icon: vscode, category: "Tools" },
  { name: "PyCharm", icon: pycharm, category: "Tools" },
];

const SkillSection = ({ title, skills }) => (
  <div className="skills-section">
    <motion.h3
      variants={variants1}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="section-title"
    >
      <div className="bar"></div>
      {title}
    </motion.h3>
    <div className="icons">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          variants={variants3}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index + 3}
          className={`icon ${skill.name.toLowerCase()}`}
        >
          <img src={skill.icon} alt={skill.name} />
          <p>{skill.name}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  const languages = skillsData.filter(
    (skill) => skill.category === "Languages"
  );
  const frameworks = skillsData.filter(
    (skill) => skill.category === "Frameworks"
  );
  const databases = skillsData.filter(
    (skill) => skill.category === "Databases"
  );
  const tools = skillsData.filter((skill) => skill.category === "Tools");

  return (
    <main id="skills">
      <section className="skills-info">
        <div className="header">
          <motion.h2
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={1}
          >
            My Skills
          </motion.h2>
        </div>
        <SkillSection title="Languages" skills={languages} />
        <SkillSection title="Frameworks" skills={frameworks} />
        <SkillSection title="Databases" skills={databases} />
        <SkillSection title="Tools" skills={tools} />
      </section>
    </main>
  );
}
