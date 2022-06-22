import './home.css';
import img from '../props/home-photo.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show'>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
          <span className='circle'></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className='scroll-down'>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className='scroll' />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          I am a Full Stack Developer with knowledge in HTML5, Javascript, Typescript, CSS3, SASS,
          React, Node, Express, NestJs, NextJS. Also have knowledge in Security Analisys, Linux,
          Shell Script, Docker, Networking, and a bit of R and Python3. Learn is my hobby and be better day by day is my pleasure.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
