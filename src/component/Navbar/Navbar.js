import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../Navbar/Navbar.css'



function Navbar({aboutpage,homepage,skillpage,projectpage,contactpage}){
    const navigate=useNavigate()
    const [openbar,setOpenbar]=useState({display:"inline"})
    const [closebar,setClosebar]=useState({display:"none"})
    const [dropdownUl,setDropdownUl]=useState({display:"none"})
    
    //if( window.innerWidth<= 1024){
        let number=0.3
        let a="all"
        let lin="linear"
      let  trans= number+ 's' 
   
    function open(){
        setClosebar({display:"inline"})
        setOpenbar({display:'none'})
        setDropdownUl({display:"block",transition:trans})
    }
    function close(){
        setOpenbar({display:'inline'})
        setClosebar({display:"none"})
        setDropdownUl({display:"none",transition:"all 0.3s linear",backgroundColor:"green"})
    }
//}
    return(
        <div className="navheader">
        <div className="Navbar">
            <div className="logo">
                Logo
                </div>
                <div className="midnavbar">
                <ul>
                <Link className="link" to="/"> <li style={homepage}>Home</li></Link>
                <Link className="link" to="/about"> <li style={aboutpage}>About</li></Link>
                <Link className="link" to="/skills">   <li style={skillpage}>Skills</li></Link>
                <Link className="link" to="/projects">  <li style={projectpage}>Projects</li></Link>
                    {/* <button className="mobile-contact-button">Contact me</button> */}
                  
                </ul>
              </div>
              {/* <div className="contact-button">
                <button>Contact </button>
              </div> */}
              <div className="barandcross">
              <div className="option open-dropdown" style={openbar}  onClick={open}>Open</div>
              <div className="option close-dropdown" style={closebar} onClick={close}>Close</div>
              </div>
        </div>
        <div className="midnavbar-mobile" >
                <ul style={dropdownUl} >
                   <Link className="link" to="/"> <li style={homepage}>Home</li></Link>
                   <Link className="link" to="/about"> <li style={aboutpage}>About</li></Link>
                   <Link className="link" to="/skills"> <li style={skillpage}>Skills</li></Link>
                   <Link  className="link" to="/projects"> <li style={projectpage}>Projects</li></Link>
                    <button onClick={(()=>{navigate("/Contact")})} style={contactpage} className="mobile-contact-button">Contact</button>
                  
                </ul>
              </div>
       
        </div>
    )


}
export default Navbar