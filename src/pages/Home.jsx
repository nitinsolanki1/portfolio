/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { Header } from "../components/Header/Header"
import ProjectCard from "../components/card/ProjectCard"
import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

export const Home = ({ md, setmd, projectArr }) => {
  const home_titleRef = useRef()
  const cursorRef = useRef()
  const scopeRaf = useRef()

  useGSAP(() => {

    // gsap.to('.tap1',{
    //   x:-300,
    //   duration:3,
    //   repeat:Infinity,
    // })
    scopeRaf.current.addEventListener("mouseenter", (e) => {
      gsap.to('.cursor', {
        height: 100,
        width: 100,
        opacity: 1,
        x: e.clientX,
        y: e.clientY,
        backgroundColor: "white",
        duration: 0.2,
      })
    })

    scopeRaf.current.addEventListener("mousemove", (e) => {
      gsap.to('.cursor', {
        duration: 0.5,
        delay: 0.2,
        translateX: e.clientX,
        translateY: e.clientY
      })

    })

    scopeRaf.current.addEventListener("mouseleave", (e) => {
      gsap.to('.cursor', {
        height: 0,
        width:0,
        y:0,
        x: e.clientX,
        opacity: 0,
        duration: 0.5,
      })
    })


    gsap.from(".circle", {
      rotate: 360,
      duration: 5,
      delay: 0,
      fill: 'ease-in-out',
      repeat: -1,
    })


  })

  return (
    <>

      <div className="cursor" ref={cursorRef}></div>


      <div className="page page1   position-relative "  >
        <div className="back-image position-absolute"></div>
        <Header current={1} md={md} setmd={setmd} />


        <div style={{ height: 88 + "vh" }} ref={scopeRaf} className=" dev overflow-hidden  container-fluid flex-column d-flex justify-content-center gap-2 align-items-center page1"  >
          <div className="overlay "></div>
          {/* <div className="  "> </div> */}
          {/* <div className="circle col-12">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
                <div className="box4"></div>
              </div> */}
          <div className="row justify-content-center   home-content ">
            <span ref={home_titleRef} style={{ lineHeight: 30 + "px", backgroundColo: 'red' }} className={`fs-1  col-8  text-${md.color} line-height-1 home-title`}> <span className="fs-5 mb-0">hello my self nitin solanki </span> <br />web develloper</span>
            <div className="buttons col-8    d-flex mt-4 align-items-start    ">
              <Link to="/contact" className="btn btn-md px-4 me-1   btn-warning "> contact </Link>
              <Link to={"/about"} className="btn btn-md px-4 btn-outline-warning btn-dark "> About me </Link>
            </div>
          </div>
        </div>



      </div>


      {/* projects section start */}
      <section className="page page2 container my-5 " >
        <h1 className={`projects text-center  my-4  text-capitalize text-${md.color}`}>projects</h1>
        <div className="row  mt-5 justify-content-evenly gap-5">

          {
            projectArr.map((e, ind) => {
              return (

                <ProjectCard
                  md={md}
                  githubLink={e.githubLink}
                  viewLink={e.viewLink}
                  title={e.title}
                  desc={e.desc}
                  key={ind}
                  img={e.img}
                />

              )
            })
          }
        </div>
      </section>


      <section className={` border-top border-${md.color} my-5`}>
        <div className={` container text-${md.color} my-5 px-5`}>


          <h1 className={`text-${md.color} mb-3 `} > WHO I AM ? </h1>
          <p className="fs-6 my-0"> a web devloper with knowledge of reactJs , mongodb , nodejs and  express js so you can say that i am a mern stack developer </p>
          <p className="fs-6">if you want to contact me here is my detail</p>


        </div>
      </section>

      {/* contact section start */}
      <section className={`position-relative border-top border-${md.color} border-bottom mb-2 py-2 py-md-4  `}>
        <div className={`container text-${md.color}`}>
          <div className="row gy-3 gy-md-4 gy-lg-0 align-items-md-center">
            <div className="col-12 col-lg-6">
              <div className="row justify-content-xl-center">
                <div className="col-12 col-xl-11">
                  <h2 className="h1 mb-3">Get in touch</h2>
                  <p className="lead fs-4 text-secondary mb-5">if you want to contact me then here is my contact detail</p>
                  <div className="d-flex mb-5
            ">
                    <div className="me-4 text-warning">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-geo" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="mb-3">Address</h4>
                      <address className="mb-0 text-secondary">Junagadh Gujarat,india</address>
                    </div>
                  </div>
                  <div className="row mb-5">
                    <div className="col-12 col-sm-6">
                      <div className="d-flex mb-5 mb-sm-0">
                        <div className="me-4 text-warning">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-telephone-outbound" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-3">Phone</h4>
                          <p className="mb-0">
                            <a className="link-secondary text-decoration-none" href="tel:+15057922430">87800 60140</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div className="d-flex mb-0">
                        <div className="me-4 text-warning">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope-at" viewBox="0 0 16 16">
                            <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                            <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="mb-3">Gmail</h4>
                          <p className="mb-0">
                            <a className="link-secondary text-decoration-none" href="mailto:demo@yourdomain.com">nitinsolanki2506@gmail.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}
