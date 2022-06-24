import './card.css';



const Card = ({icon, title, description, id}) => {
  return (
    <div id={id} className='container'>
      <div className="card">
        <div className="imgBx">
          {icon}
        </div>
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;