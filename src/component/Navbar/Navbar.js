import { useState } from 'react'
import '../Navbar/Navbar.css'



function Navbar({aboutpage,homepage}){
    const [openbar,setOpenbar]=useState({display:"inline"})
    const [closebar,setClosebar]=useState({display:"none"})
    const [dropdownUl,setDropdownUl]=useState({display:"none"})
    
    //if( window.innerWidth<= 1024){
        
   
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
//}
    return(
        <div className="navheader">
        <div className="Navbar">
            <div className="logo">
                Logo
                </div>
                <div className="midnavbar">
                <ul>
                    <li style={homepage}>Home</li>
                    <li style={aboutpage}>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <button className="mobile-contact-button">Contact</button>
                  
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
                <ul style={dropdownUl}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <button className="mobile-contact-button">Contact</button>
                  
                </ul>
              </div>
       
        </div>
    )


}
export default Navbar