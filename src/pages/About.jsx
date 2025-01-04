/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
 export default function About ({md,setmd}) {

      const page1Ref = useRef()
  useGSAP(()=>{
  
    // gsap.to(".tap",{
    //     x:-1000,
    //     duration:5,
    //     delay:0.2,
    //   ScrollTrigger:{
    //     trigger:'.tap',
    //     markers:true  
    //   }
    // })

    page1Ref.current.addEventListener("mouseenter",(e)=>{
      gsap.to('.cursor',{
        height:100,
        width:100,
        opacity:1,
        x:e.clientX,
        y:e.clientY,
        duration:0.2,
      })
  })

      page1Ref.current.addEventListener("mousemove",(e)=>{
        gsap.to('.cursor',{
          duration:0.5,
          delay:0.2,
          translateX:e.clientX,
          translateY:e.clientY
        })
        
      })

  page1Ref.current.addEventListener("mouseleave",()=>{
    gsap.to('.cursor',{
      height:0,
      width:0,
      opacity:0,
      duration:0.2,
    })
  })
 
  

 

})
  return (
    <div className={`page  text-${md.color}`} ref={page1Ref} >
      <div className="cursor"></div>
    <Header current={1} md={md} setmd={setmd}/>

        <div className="conten container  d-flex justift-content-center align-items-center flex-columns"> 
        
          <div className="about ">
            
                <h1 className="text-warning" > WHO I AM ? </h1>
                <p className="fs-5"> a web devloper with knowledge of reactJs , mongodb , nodejs and  express js so you can say that i am a mern stack developer </p>
                <p className="fs-5">if you want to contact me here is my detail</p>
                <p className="fs-5"> email : <a href="/" className="btn btn-sm btn-light" > nitinsolanki2506@gmail.com  </a>   whatsapp : <a href="/" className="btn btn-sm btn-light" > 8780060140 </a> </p>
                <p className="fs-5"> if you want to see my project go here : <Link to="/projects" className="btn btn-sm btn-light" > Project </Link> </p>

                <p style={{color : md.color=='light' ? "#292D32" : "#E4EBF1", zIndex:999,position:'absolute'}} className={`fs-5`}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quisquam expedita, blanditiis nesciunt animi necessitatibus architecto nam laboriosam nulla perspiciatis temporibus laborum voluptate exercitationem itaque repellat mollitia vel tempora aspernatur?</p>
            </div>   
            
        </div>
    </div>

   
  )
}

