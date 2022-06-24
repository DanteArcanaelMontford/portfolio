import "./button.css";

function Buttons() {
  return (
    <div className="container button-container">
      <a href="#about" className="btn sec">
        Learn more
      </a>
      <a href="/Renato_Pinheiro_CV.pdf" className="btn pri" download>
        Curriculum
      </a>
      <a href="#contact" className="btn sec">
        Get in Touch
      </a>

    </div>
  );
}

export default Buttons;
