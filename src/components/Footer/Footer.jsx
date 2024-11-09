import "./Footer.css";
import Linkedin from "../../assets/Icons/Linkedin";
import Gmail from "../../assets/Icons/Gmail";
import Github from "../../assets/Icons/Github";
import Whatsapp from "../../assets/Icons/Whatsapp";
import { myLinks } from "../../helper/links";

export default function Footer() {
  return (
    <div className="footer">
      <main id="footer">
        <section className="footer-info">
          <div className="text">
            <div className="logo">
              <p>
                <a href="#">chris.</a>
              </p>
            </div>
            <div className="links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
            </div>
            <div className="home-links">
              <div className="btn github">
                <a href={myLinks.github}>
                  <Github />
                </a>
              </div>
              <div className="btn linkedin">
                <a href={myLinks.linkedin}>
                  <Linkedin />
                </a>
              </div>
              <div className="btn gmail">
                <a href={myLinks.gmail}>
                  <Gmail />
                </a>
              </div>
              <div className="btn whatsapp">
                <a href={myLinks.whatsapp}>
                  <Whatsapp />
                </a>
              </div>
            </div>
            <p>
              <span>©</span> 2023 Chris Mbah. All Rights Reserved
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
