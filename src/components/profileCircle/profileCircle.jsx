import './profileCircle.css'

const ProfileCircle = ({img, name, description}) => {
  return(
    <div className="profile__circle">
      <div className="profile__circle_content">
        <img src={img} alt="" />
        <h1>{name} <br/><span>{description}</span></h1>
        <a href="#contact">Hire me</a>
      </div>
    </div>
  )
}

export default ProfileCircle;