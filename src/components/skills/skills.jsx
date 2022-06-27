import Card from "../card/card";
import "./skills.css";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { DiJavascript } from "react-icons/di";


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


import { EffectCoverflow, Pagination } from "swiper";

const Skills = () => {
  return (
    <div>
      <h4 className="quali-text">My skills</h4>
      <div className="skills-container" id="skills">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          keyboard={{
            enabled: true,
          }}
          loop={true}
          modules={[EffectCoverflow, Pagination]}
          className="cardSwiper"
        >
          <SwiperSlide>
            <Card title={"HTML"} icon={<AiFillHtml5 className="icon" />} id='html-card'
              description={`Skills developed with experience in HTML to creating responsives and well-structured full pages and ability to 
              create unitary components (in conjunction with CSS) to be integrated as a whole in any project. 
              Such components can be in pure HTML, CSS and Javascript or using frameworks like React.Js, VUE etc.`}
            ></Card>

          </SwiperSlide>

          <SwiperSlide>
            <Card title={"CSS"} icon={<SiCss3 className="icon" />} id='css-card'
              description={`Various skills for component style development, full page responsiveness, good visual user experience, animations, user interactions using CSS3. 
              Also, I have experience with proprocessors like SASS.Furthermore styling with CSS in JS using Styled Components.`}
            />
          </SwiperSlide>
          
          <SwiperSlide>
            <Card title={"Javascript"} icon={<DiJavascript className="icon" />} id='javascript-card'
            description={`Javascript skills for Frontend and Backend development, whether in animations, interactions and style of web pages. 
            In addition development and integration of APIs, Security and Monitoring (DevOps). 
            Furthermore, backend development with practices of SOLID, Clean Architecture and TDD concepts 
            (as Jest with Node and developing skills with Cypress for react). 
            Also evolving more and more in the concepts of Clean Code and experience using Typescript either.`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card title={"React"} icon={<FaReact className="icon" />} id='react-card'
              description={`Skills in React for the development of interactive, well-structured and responsive pages, 
              using the most diverse types of available tools, such as Material UI, 
              CSS In JS for Styled Components, React Hooks, Web Packs and API integration. 
              Also, developing skills for automated testing in Cypress for frontend.`}
            />
          </SwiperSlide>


          <SwiperSlide>
            <Card title={"NestJs"} icon={<SiNestjs className="icon" />} id='nestjs-card'
              description={`
              Experience and skills developed in Nest.Js for API development, integrations with new APIs, backend development in general, 
              database communication, custom routes and security.`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card title={"NodeJs"} icon={<FaNodeJs className="icon" />} id='nodejs-card'
              description={`
              Skill in Nodejs for backend development in general such as API development, integrations, security and database communication, 
              including using frameworks such as Express and Nest.Js. In addition, skills development being learned to use SOLID, 
              Clean Architecture and TDD concepts with Jest.`}
            />

          </SwiperSlide>
          
          <SwiperSlide>
            <Card title={"Python"} icon={<FaPython className="icon" />} id='python-card'
              description={`
              Python skills for backend development, security and automation tools and Computer Networks. If necessary, either for fronted development. 
              Also, some skills developed for Web Scraping and Data Science.`}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Card title={"Bootstrap"} icon={<FaBootstrap className="icon" />} id='bootstrap-card'
              description={`
              Skills in Boostrap framework to accelerate and facilitate the development of frontend pages and web tools, 
              increasing productivity and product delivery speed, 
              especially in Agile Methodologies, with Scrum, among others.`}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
