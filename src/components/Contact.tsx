import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
return (
  <div className="contact-section section-container" id="contact">
    <div className="contact-container">

      <h3>Contact</h3>

      <div className="contact-flex">

        {/* LEFT BOX */}
        <div className="contact-box">
          <h4>Connect</h4>

<p className="contact-links">
  <a
    href="https://www.linkedin.com/in/adarsh-nadda-a65328276/"
    target="_blank"
    rel="noreferrer"
    data-cursor="disable"
  >
    LinkedIn — Adarsh-Nadda
  </a>

  {" | "}

  <a
    href="https://www.github.com/adarshauspicious-art"
    target="_blank"
    rel="noreferrer"
    data-cursor="disable"
  >
    GitHub — Adarsh-Nadda
  </a>

 <br />

  <a
    href="https://www.instagram.com/adarshnadda45/"
    target="_blank"
    rel="noreferrer"
    data-cursor="disable"
  >
    Instagram — Adarsh-Nadda
  </a>
  {" | "}
  
  <a
    href="https://www.facebook.com/adarshmanu.nadda/"
    target="_blank"
    rel="noreferrer"
    data-cursor="disable"
  >
    Facebook — Adarsh-Nadda
  </a>
  <br />
  <a
    href="tel:7560044001"
    target="_blank"
    rel="noreferrer"
    data-cursor="disable"
  >
    Contact — 7560044001
  </a>
</p>

          <h4>Education</h4>

          <p>
            Senior Secondary Education (Class XII), Government Senior Secondary School,<br />
            Secondary Education (Class X), Government Senior Secondary School,<br />
            B.Tech in Computer Science & Engineering, Punjab Technical University,  Punjab, India.
          </p>
        </div>

        {/* MIDDLE BOX */}
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

        {/* RIGHT BOX */}
        <div className="contact-box">
          <h2>
            Designed and Developed <br />
            by <span>Adarsh Nadda</span>
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
