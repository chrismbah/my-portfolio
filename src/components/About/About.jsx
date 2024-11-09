/* eslint-disable react/no-unescaped-entities */
import aboutImg from "../../assets/img/img1.jpg";
import "./About.css";
import { myLinks } from "../../helper/links";
import { motion } from "framer-motion";
import { variants1, variants3 } from "../../animations/variants";

export default function About() {
  return (
    <main id="about">
      <section className="about-info">
        <div className="header">
          <motion.h2
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={1}
          >
            About <span>Me</span>
          </motion.h2>
          <motion.p
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={2}
          >
            <div className="header-bar"></div>Who I Am And What I Do
          </motion.p>
        </div>
        <div className="about-det">
          <motion.div
            variants={variants1}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={3}
            className="about-img"
          >
            <img src={aboutImg} alt="chris" />
          </motion.div>
          <div className="about-text">
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
              <p>
                I'm a dedicated and experienced self-taught full-stack developer
                based in Owerri, Nigeria, specializing in full-stack web
                development with expertise in modern technologies and
                frameworks. I’m passionate about building scalable and efficient
                applications that enhance user experience and solve problems.
              </p>
              <p>
                I collaborate with cross-functional teams to deliver
                high-quality, scalable software applications that exceed user
                expectations.
              </p>
              <p>
                When I'm not building, you can often find me playing chess,
                reading books, watching anime (One Piece), reading manga or
                simply enjoying a good cup of coffee.
              </p>
              <p className="last">
                <span>
                  <a href={myLinks.gmail}>Get in touch, </a>
                </span>
                and let's create something amazing!
              </p>
            </motion.div>
            <motion.div
              variants={variants3}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={5}
              className="about-contact"
            >
              <button className="contact-btn">
                <a href={myLinks.resume}>View Resume</a>
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
