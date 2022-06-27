import Work from "./work";
import "./works.css";
import work1 from "../props/big-data-icon-banking-and-data-analytics.png"
import work2 from "../props/devops.png"
import work3 from "../props/cybersecurity.jpg"

const Works = () => {
  return (
    <div id="works" className="container works-container">
      <h1 className="work-txt">Works</h1>
      <Work company={'Meantrix (Current)'} position={'Data Scientist/Fullstack Developer'} img={work1}
        description={`FullStack development of a Web Application involving geospatial animations and mathematical 
        interactions with Artificial Intelligence on demand using HTML5, 
        (rendered by Shiny) Javascript, CSS, SASS, R, Python3.`}
      />
      <Work company={'EvoCorp'} position={'Information System Programer/DevOps'} img={work2}
        description={`Development of a Chatbot Manager using React.Js, Node.Js (with Nest.Js Framework), RabbitMQ and Postgres. 
        Also, development of Application Monitoring using Prometheus, Grafana and Go Lang.`}
      />
      <Work company={'Freelance'} position={'DevOps/Pentester'} img={work3}
        description={`Development of a Server Monitoring Automation Toolkit with Web App Risk Analysis 
        developed using OWASP principles with Shell Script, C and Python3.`}
      />
    </div>
  );
};

export default Works;
