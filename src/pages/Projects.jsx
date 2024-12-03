/* eslint-disable react/prop-types */
import { Header } from "../components/Header/Header"
import ProjectCard from "../components/card/ProjectCard"

const Projects = ({md,setmd}) => {
  return (
    <div className="page">
        <Header current={4} md={md} setmd={setmd}/>
       
        <div className="container">
          <div className="title text-center" style={{textShadow:"none"}}>
             <h1 className={`text-${md.color}`} >Projects</h1>
              <p className="text-warning">here are my some recently made projects</p>
          </div>

          <div className="row gap-4 justify-content-evenly">
          <ProjectCard
         md={md}
         githubLink="/"
         viewLink="/"
          title="Desifood" 
          desc={`Desifood is an online food ordering website build on a mern stack which has a features like Authentication,
                  login, register, cart and much more. you can order food,add it into cart , see all your orders`}
            />
   
          <ProjectCard
             md={md}
             githubLink="/"
             viewLink="/"
            title="Portfolio website" 
            desc={`this portfolio website is built by using reactJS with a animation library called gsap with features like 
                dark mode and also have a little bit animation that i know`} 
              />
       
    <ProjectCard
       md={md}
       githubLink="/"
       viewLink="/"
      title="employee management system" 
      desc={`this is an fully frontend react base employee management system in which you can login as admin 
        or as employee and get task or give task to employee and also can check status of your task`} 
        /> 
      </div>
         </div>
  
  
    </div>  
  )
}

export default Projects