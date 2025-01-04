/* eslint-disable react/prop-types */
import { Header } from "../components/Header/Header"
import ProjectCard from "../components/card/ProjectCard"

const Projects = ({md,setmd,projectArr}) => {
  return (
    <div className="page">
        <Header current={4} md={md} setmd={setmd}/>
       
        <div className="container">
          <div className="title text-center" style={{textShadow:"none"}}>
             <h1 className={`text-${md.color}`} >Projects</h1>
              <p className="text-warning">here are my some recently made projects</p>
          </div>

          <div className="row gap-4 justify-content-evenly">
         {
          projectArr.map((e,ind)=>{
            return (
              <ProjectCard md={md}
                 title={e.title} 
                 githubLink={e.githubLink}
                 viewLink={e.viewLink}
                 desc={e.desc}
                 key={ind}
                 img={e.img}
                 /> 

            )
          })
         }
       
      </div>
         </div>
  
  
    </div>  
  )
}

export default Projects