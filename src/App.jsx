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

  return (

      <div className='app' style={{backgroundColor :md.background}}>
      <Routes>
        <Route exact path='/' element={<Home md={md} setmd={setmd} />} />
        <Route exact path='/about' element={<About  md={md} setmd={setmd} />} />
        <Route exact path='/contact' element={<Contact md={md} setmd={setmd} />} />
        <Route exact path='/projects' element={<Projects md={md} setmd={setmd} />} />
      </Routes>
    </div>
  )
}

export default App