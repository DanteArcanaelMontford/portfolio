import './progressBar.css'

const ProgressBar = ({ name, value }) => {
  return (
    <div className="progressBar">
      <span className="progressBar__name">{name}</span>
      <div className="progressBar__percent">
        <div className="progressBar__progress" style={{ "width": value }}></div>
      </div>
      <span className="progressBar__value">{value}</span>
    </div>
  )
}

export default ProgressBar;