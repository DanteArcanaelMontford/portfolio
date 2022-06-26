/* eslint-disable jsx-a11y/anchor-has-content */
import './home.css';
import img from '../props/home-photo.jpg';
import Buttons from '../button/button';
import { BsMouse } from 'react-icons/bs';

import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { DiJavascript } from "react-icons/di";

const color_pri = "rgb(82, 188, 250)";


function Home() {
  return (
    <div id='home' className='container home-container'>
      <div className='logo'>
        <div className='hover-show active'>
          <a href='#skills' className='circle'><AiFillHtml5 fill={color_pri} size={52} /></a>
          <a href='#skills' className='circle'><SiCss3 fill={color_pri} size={52} /></a>
          <a href='#skills' className='circle'><DiJavascript fill={color_pri} size={52} /></a>
          <a href='#skills' className='circle'><FaBootstrap fill={color_pri} size={52} /></a>
          <a href='#skills' className='circle'><FaReact fill={color_pri} size={52} /></a>
          <a href='#skills' className='circle'><SiNestjs fill={color_pri} size={52} /></a>
          <a href='#skills' className='circle'><FaNodeJs fill={color_pri} size={52} /></a>
          <a href='#skills' className='circle'><FaPython fill={color_pri} size={52} /></a>
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
