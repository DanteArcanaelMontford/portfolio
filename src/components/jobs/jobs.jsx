import "./jobs.css";

const Jobs = () => {
  return (
    <div id="jobs" className="container jobs-container">
      <h1 className="job-txt">Jobs</h1>
      <div className="job job-1">
        <div className="job-img"></div>
        <div className="job-info">
          <h1 className="name">Meantrix</h1>
          <h3 className="position">Data Scientist</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-job">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="job job-2">
        <div className="job-img"></div>
        <div className="job-info">
          <h1 className="name">EvoCorp</h1>
          <h3 className="position">Information System Programer</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-job">
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className="job job-3">
        <div className="job-img"></div>
        <div className="job-info">
          <h1 className="name">Freelance</h1>
          <h3 className="position">DevOps Analyst</h3>
          <h4 className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className="contact-job">
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
