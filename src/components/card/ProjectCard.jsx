/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const ProjectCard = ({md,title,img="../../../public/satoro.jpg ",githubLink="/",viewLink="/",desc}) => {
  return (
    <div className={`card p-2 bg-transparent ${md.mode =="dark" ? "dark_card" : "light_card"} text-light  col-md-5  col-lg-3 col-12 `} >
            {/* <div className="imgholder"> */}

            <img src={img}  alt="project image" className="card-img-top"/>
            {/* </div> */}
            <div className="card-body position-relative">
              <h5 className={`text-${md.color} card-title`}>{title} </h5>

              <p className="card-text text-secondary">
                    {desc}
              </p>


              <a href={viewLink} className="btn px-4 btn-warning ">view</a>
              <a href={githubLink} className="ms-2  px-4  btn btn-warning ">github</a>
            </div>

          
        </div>  
               
)
}

export default ProjectCard