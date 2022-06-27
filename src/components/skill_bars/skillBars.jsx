import ProgressBar from "../progress_bar/progressBar";
import './skillBars.css'

const SkillBars = () => {
  return (
    <div className="skill__bars">
      <ProgressBar name={'html5'} value={'90%'} />
      <ProgressBar name={'CSS3'} value={'90%'} />
      <ProgressBar name={'Javascript'} value={'90%'} />
      <ProgressBar name={'React'} value={'77%'} />
      <ProgressBar name={'Nest.Js'} value={'74%'} />
      <ProgressBar name={'Node.Js'} value={'82%'} />
    </div>
  )
}

export default SkillBars;