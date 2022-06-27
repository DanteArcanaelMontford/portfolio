const Work = ({company, position, description, img}) => {
  return (
    <div className="work work-1">
    <div className="work-img">
      <img src={img} alt="" />
    </div>
    <div className="work-info">
      <h1 className="name">{company}</h1>
      <h3 className="position">{position}</h3>
      <h4 className="about">
        {description}
      </h4>
      {/* <a href="#contact" className="contact-work">
        <span>contact</span>
      </a> */}
    </div>
  </div>
  )
}

export default Work;