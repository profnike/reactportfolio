import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import home from '../../Asset/homeiconn.png'
import about from '../../Asset/abouticonn.png'
import skill from '../../Asset/skillsiconn.png'
import project from '../../Asset/projecticonn.png'
import ham from '../../Asset/hamburgericonn.png'
import cancel from '../../Asset/canceliconn.png'
import logo from '../../Asset/logo-three.png'
import '../Navbar/Navbar.css'



function Navbar({aboutpage,homepage,skillpage,projectpage,contactpage}){
    const navigate=useNavigate()
    const [openbar,setOpenbar]=useState({display:"inline"})
    const [closebar,setClosebar]=useState({display:"none"})
    const [dropdownUl,setDropdownUl]=useState({display:"none"})
    
   
        
   
    function open(){
        setClosebar({display:"inline"})
        setOpenbar({display:'none'})
        setDropdownUl({display:"inline"})
    }
    function close(){
        setOpenbar({display:'inline'})
        setClosebar({display:"none"})
        setDropdownUl({display:"none"})
    }

    return(
        <div className="navheader">
        <div className="Navbar">
            <div className="logo">
            <img className="logoicon" src={logo} alt=""/>
                </div>
                <div className="midnavbar">
                <ul>
                <Link className="link" to="/"> 
                <li style={homepage}>
                <img className="navicon" src={home} alt=""/>
                <p>Home</p></li>
                </Link>
                <Link className="link" to="/about"> 
                <li style={aboutpage}>
                <img className="navicon" src={about} alt=""/><p>About</p>
                </li></Link>
                <Link className="link" to="/skills">   <li style={skillpage}>
                <img className="navicon" src={skill} alt=""/><p>Skills</p>
                    </li></Link>
                <Link className="link" to="/projects">  <li style={projectpage}>
                <img className="navicon" src={project} alt=""/><p>Projects</p>
                </li>
                </Link>
                    {/* <button className="mobile-contact-button">Contact me</button> */}
                  
                </ul>
              </div>
              {/* <div className="contact-button">
                <button>Contact </button>
              </div> */}
              <div className="barandcross">
              <div className="option open-dropdown" style={openbar}  onClick={open}>
                  <img className="ham" src={ham} alt=""/>
                      </div>
              <div className="option close-dropdown" style={closebar} onClick={close}>
              <img className="ham" src={cancel} alt=""/>
                  </div>
              </div>
        </div>
        <div className="midnavbar-mobile" >
                <ul style={dropdownUl} >
                   <Link className="link" to="/"> <li style={homepage}>
                   <img className="navicon" src={home} alt=""/>
                       <p>Home</p></li></Link>
                   <Link className="link" to="/about"> <li style={aboutpage}>
                   <img className="navicon" src={about} alt=""/><p>About</p>
                       </li></Link>
                   <Link className="link" to="/skills"> <li style={skillpage}>
                   <img className="navicon" src={skill} alt=""/><p>Skills</p>
                       </li></Link>
                   <Link  className="link" to="/projects"> <li style={projectpage}>
                   <img className="navicon" src={project} alt=""/><p>Projects</p>
                       </li></Link>
                    <li><button onClick={(()=>{navigate("/Contact")})} style={contactpage} className="mobile-contact-button">Contact</button></li>
                  
                </ul>
              </div>
       
        </div>
    )


}
export default Navbar