import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn  neon">
        Learn more
      </a>
      <a href="/Renato_Pinheiro_CV.pdf" className="btn neon" download>
        Curriculum
      </a>
      <a href="#contact" className="btn neon">
        Get in Touch
      </a>
    </div>
  );
}

export default Buttons;
