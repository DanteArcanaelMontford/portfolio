import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Thanks for visit me{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">

        <a href="https://github.com/DanteArcanaelMontford" target='_blank' rel="noreferrer">
          <FaGithub className="social" />
        </a>

        <a href="https://mywhats.net/renatopinheiro" target='_blank' rel="noreferrer">
          <FaWhatsapp className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
