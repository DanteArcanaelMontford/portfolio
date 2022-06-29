
import './projectCard.css'

const ProjectCard = ({ img, title, description, projectLink }) => {

  return (
    <div className="project__container">
      <div className="project__card">
        <div className="project__face project__face1">
          <div className="project__content">
            <img src={img} alt="" />
 
          </div>
        </div>
        <div className="project__face project__face2">
          <div className="project__content">
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={projectLink} target='_blank' rel='noreferrer'>Live Exemple</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;