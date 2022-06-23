import "./qualifications.css";

const Qualifications = () => {
  return (
    <div>
      <span className="quali-text">My Qualifications</span>
      <div className="qualifications-container">
        <div className="qualification">
          <div  id="html" className="content">Experience with html5 in...</div>
          <h1>html</h1>
        </div>
        <div className="qualification">
          <div id="css" className="content">Experienced with css in and SASS...</div>
          <h1>css</h1>
        </div>
        <div className="qualification">
          <div id="javascript" className="content javascript"></div>
          <h1>javascript</h1>
        </div>
        <div className="qualification">
          <div id="boostrap" className="content bootstrap"></div>
          <h1>bootstrap</h1>
        </div>
        <div className="qualification">
          <div id="react" className="content react"></div>
          <h1>react</h1>
        </div>
        <div className="qualification">
          <div id="c++" className="content c-plus-plus"></div>
          <h1>c++</h1>
        </div>
        <div className="qualification">
          <div id="node" className="content nodejs"></div>
          <h1>Node</h1>
        </div>
        <div className="qualification">
          <div id="python3" className="content python">I am a especialist in python focused on Security</div>
          <h1>Python3</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
