/* eslint-disable react/no-unescaped-entities */
import "./Contact.css";
import Plane from "../../assets/Icons/Plane";
import { myLinks } from "../../helper/links";
export default function Contact() {
  return (
    <main id="contact">
      <section className="contact-info">
        <div className="text">
          <div className="header">
            <h2>Contact Me</h2>
            <p>
              <div className="header-bar"></div>Get In Touch
            </p>
          </div>
          <div className="sub-text">
            <p>
              If you have any questions, project ideas, or just want to chat
              about anything creative, <br />
              I'm here for it. Feel free to reach out. I'm always up for a
              friendly <br />
              conversation or potential collaborations!
            </p>
          </div>
        </div>
        <button className="contact-btn">
          <a href={myLinks.gmail}>
            Send Message <Plane />
          </a>
        </button>
      </section>
    </main>
  );
}
