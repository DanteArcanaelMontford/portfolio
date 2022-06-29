import ProjectCard from '../projectCard/projectCard';
import style from './projects.module.css';
import rotate_menu from "../imgs/rotate_menu.png"
import link_tree from "../imgs/link_tree.png"
import barbershop from "../imgs/barbershop.png"
import github_browser from "../imgs/github_browser.png"

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
              `Simple linktree for general usecase (in this case i am using it for personal things).`
            }
          />
          <ProjectCard title={'Barber Shop'} img={barbershop} projectLink={"https://barbershop-design-demo.netlify.app/"}
            description={
              `Academic Webpage Designed for demonstration of a layout.`
            }
          />
          <ProjectCard title={'Github Profile Browser'} img={github_browser} projectLink={"https://github-browser-profile.netlify.app/"}
            description={
              `A simple browser to search github profiles consuming a free API.`
            }
          />
        </div>
      </section>
    </>
  )
}
export default Projects;