/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import "./Home.css";
import Linkedin from "../../assets/Icons/Linkedin";
import Gmail from "../../assets/Icons/Gmail";
import Github from "../../assets/Icons/Github";
import NavUp from "../../assets/Icons/NavUp";
import { Typewriter } from "react-simple-typewriter";
import { myLinks } from "../../helper/links";
import { motion } from "framer-motion";
import { variants1, variants2, variants4 } from "../../animations/variants";
import Lottie from "lottie-react";
import dev from "../../animations/json/dev.json";
export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="home">
      <div className="home-text">
        <motion.h1
          variants={variants1}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={1}
        >
          Hey👋, I'm
        </motion.h1>
        <motion.h1
          variants={variants1}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={2}
          className="name"
        >
          Chris Mbah <div className="bar"></div>
        </motion.h1>
        <motion.h2
          variants={variants1}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={3}
        >
          <span>
            <Typewriter
              words={[
                "Software Engineer.",
                "Web Developer.",
                "Problem Solver.",
              ]}
              loop={4}
              cursor={typing}
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={2000}
              onLoopDone={() => setTyping(false)}
            />
          </span>

          <label className="cursor"> </label>
        </motion.h2>
        <motion.div
          variants={variants1}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={4}
          className="info"
        >
          <p>I transform your concepts into reality.</p>
        </motion.div>
        <div className="home-links">
          <motion.div
            variants={variants2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={7}
            className="btn github"
          >
            <a href={myLinks.github}>
              <Github />
            </a>
          </motion.div>
          <motion.div
            variants={variants2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={7.5}
            className="btn linkedin"
          >
            <a href={myLinks.linkedin}>
              <Linkedin />
            </a>
          </motion.div>
          <motion.div
            variants={variants2}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={8}
            className="btn gmail"
          >
            <a href={myLinks.gmail}>
              <Gmail />
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={variants4}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="home-img"
      >
        <Lottie animationData={dev} className="home-animation" />
      </motion.div>
      <button className={`nav-up ${isVisible ? "nav-visible" : ""}`}>
        <a href="#">
          <NavUp />
        </a>
      </button>
    </section>
  );
}
