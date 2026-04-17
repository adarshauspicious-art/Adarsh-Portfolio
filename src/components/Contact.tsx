import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/adarsh-nadda-a65328276/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — Adarsh-Nadda
              </a>
            </p>
            <h4>Education</h4>
            
            <p>
              Senior Secondary Education (Class XII), Government Senior Secondary School,<br />
              Secondary Education (Class X), Government Senior Secondary School,<br />
              B.Tech Computer Science, Doaba Institute of Engineering and Technology Mohali, Punjab, India.
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/adarshauspicious-art"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/adarsh-nadda-a65328276/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            
            <a
              href="https://www.instagram.com/adarshnadda45/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Adarsh Nadda</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
