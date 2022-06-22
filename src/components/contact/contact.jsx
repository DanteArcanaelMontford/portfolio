import "./contact.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://github.com/DanteArcanaelMontford"
          className="contact github"
          target={"blank"}
        >
          <AiFillGithub className="icon" />
          <h2>
            GitHub <span>Reach Me</span>
          </h2>
        </a>

        <a
          href="https://mywhats.net/renatopinheiro"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>Contact Me</span>
          </h2>
        </a>

        <a href="https://www.linkedin.com/in/renato-pinheiro-a75994171/" className="contact linkedin">
          <AiFillLinkedin className="icon" />
          <h2>
            Linkedin <span>Contanct Me</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
