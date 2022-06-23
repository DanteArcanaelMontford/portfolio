/* eslint-disable jsx-a11y/anchor-has-content */
import './home.css';
import img from '../props/home-photo.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show active'>
          <a href='#html-card' className='circle'></a>
          <a href='#css-card' className='circle'></a>
          <a href='#javascript-card' className='circle'></a>
          <a href='#bootstrap-card' className='circle'></a>
          <a href='#react-card' className='circle'></a>
          <a href='#nestjs-card' className='circle'></a>
          <a href='#nodejs-card' className='circle'></a>
          <a href='#python-card' className='circle'></a>
        </div>

        <img src={img} alt='profile-img' />
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
