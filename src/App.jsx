/* eslint-disable react/prop-types */
import About from './pages/About';
import { Contact } from './pages/Contact';
import Projects from './pages/Projects';
import { Home } from './pages/Home';
import { useState  } from 'react';
import "./App.css"


import { Route, Routes } from 'react-router-dom';
function App() {

  
  const [md,setmd] = useState({
    mode:"dark",
    color: "light",
    background: "#292D32",
    border:1+'px solid white'
  })

const projectArr = [
  {
    githubLink : "/",
    viewLink : "/",
    img  : "../public/desifood.png",
     title : "Desifood" ,
     desc : `Desifood is an online food ordering website build on a mern stack which has a features like Authentication
             login, register, cart and much more. you can order food,add it into cart , see all your orders`

  },
  {

    githubLink : "/",
    viewLink : "/",
    title : "Portfolio website" ,
    img:"../public/portfolio.png",
    desc : `this portfolio website is built by using reactJS with a animation library called gsap with features like 
    dark mode and also have a little bit animation that i know`
    },
    {
      githubLink : "/",
      viewLink : "/",
     title : "employee management system" ,
     desc : `this is an fully frontend react base employee management system in which you can login as admin 
       or as employee and get task or give task to employee and also can check status of your task`
      
    }


]
  return (

      <div className='app' style={{backgroundColor :md.background}}>
      <Routes>
        <Route exact path='/' element={<Home md={md} projectArr={projectArr} setmd={setmd} />} />
        <Route exact path='/about' element={<About  md={md} />} />
        <Route exact path='/contact' element={<Contact md={md} setmd={setmd} />} />
        <Route exact path='/projects' element={<Projects md={md} projectArr={projectArr} setmd={setmd} />} />
      </Routes>
    </div>
  )
}

export default App