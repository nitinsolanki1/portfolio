/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import "./Header.css"

export const Header = ({current,setmd,md}) => {

const  handelMode = ()=>{
      setmd({
        ...md,
        color:md.mode=="dark" ? "light" : "dark",
        background : md.mode=="dark" ?  "#292D32" : "#E4EBF1", 
        border:md.mode=="dark" ? 1+'px solid white' : 1+'px solid black',
        mode:md.mode=="dark" ? "light" : "dark",
      })

  }
  return (
  
  <nav className={`navbar mb-4 navbar-expand-lg  bg-ternary`} style={{borderBottom :  md.border}}>
  <div className="container-fluid">
    <Link className="navbar-brand text-warning fs-3" to="/">NITIN SOLANKI</Link>
    <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggmler-icon">o</span>
    </button>
    <div className="collapse  navbar-collapse" id="navbarSupportedContent">
      <ul className={`navbar-nav   ms-auto me-5 mb-2 mb-lg-0`}>
      <li className="nav-item ">
          <Link className={`nav-link  text-${current===1 ? "warning" : md.color} `} aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link   text-${current===2 ? "warning" :  md.color} `}  to="/about" >About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link   text-${current===3 ? "warning" :  md.color} `} aria-current="page" to="/contact" >Contact</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link  text-${current===4 ? "warning" :  md.color} `} aria-current="page" to="/projects" >Projects</Link>
        </li>
        <div style={{alignContent:"center"}} className="ms-5 text-light  nav-item form-check form-switch"> 
                  <input onClick={handelMode} className={` bg-warning  form-check-input `} type="checkbox" />
                  <label  className={` form-check-label text-${md.color}`} htmlFor="darkMode"> {md.mode} mode</label>
        </div>
      </ul>
      
    </div>
  </div>
</nav>
  )
}
