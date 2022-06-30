import ProjectCard from '../projectCard/projectCard';
import style from './projects.module.css';
import rotate_menu from "../imgs/rotate_menu.png"
import img from "../props/img4.jpg"
import link_tree from "../imgs/link_tree.png"
import barbershop from "../imgs/barbershop.png"
import github_browser from "../imgs/github_browser.png"
import task_list from "../imgs/task_list.png"
import movie_app from "../imgs/movie_app.png"
import acc_verification from "../imgs/acc_verification.png"
import mobile_nav from "../imgs/mobile_nav.png"
import landing_page from "../imgs/landing_page.png"



const Projects = () => {
  return (
    <>
      <h3 className={style.title}>Projects</h3>
      <section className={style.projects}>

        <div className={style.container}>

          <ProjectCard title={'Rotate Menu'} img={rotate_menu} projectLink={"https://rp-rotate-nav.netlify.app/"}
            description={
              `This is a simple academic project to demonstrante a concept learned by design rotate menu.`
            }
          />
          <ProjectCard title={'Personal Linktree'} img={link_tree} projectLink={"https://dantearcanaelmontford.github.io/"}
            description={
              `Simple linktree for general usecase (in this case i am using it for personal stuffs).`
            }
          />
          <ProjectCard title={'Barber Shop'} img={barbershop} projectLink={"https://barbershop-design-demo.netlify.app/"}
            description={
              `
                Academic Webpage Designed for demonstration of a layout(this project it's just a 
                design demonstration without responsivity).
              `
            }
          />
          <ProjectCard title={'Github Profile Browser'} img={github_browser} projectLink={"https://github-browser-profile.netlify.app/"}
            description={
              `A simple browser to search github profiles consuming a free API.`
            }
          />
          <ProjectCard title={'Task List'} img={task_list} projectLink={'https://dante-montford.github.io/'}
            description={
              `A simple but functional web task list.`
            }
          />
          <ProjectCard title={'Movie App (demonstration)'} img={movie_app} projectLink={'https://web-movie-app-demo.netlify.app/'}
            description={
              `A simple academic movie app demonstration.`
            }
          />
          <ProjectCard title={'Account verification'} img={acc_verification} projectLink={'https://acc-verification-ui-demo.netlify.app/'}
            description={
              `A simple demonstrantion of an account UI verification.`
            }
          />
          <ProjectCard title={'Mobile Nav(Demonstrations)'} img={mobile_nav} projectLink={'https://mobile-nav-demo.netlify.app/'}
            description={
              `A mobile navigation UI demonstration (academic project).`
            }
          />
          <ProjectCard title={'Split hover page'} img={landing_page} projectLink={'https://split-hover-landing-page.netlify.app/'}
            description={
              `Split hover landing page demonstration.`
            }
          />
        </div>
      </section>
    </>
  )
}
export default Projects;