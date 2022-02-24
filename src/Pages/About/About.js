import Navbar from '../../component/Navbar/Navbar'
import { useState } from 'react'
import profile from '../../Asset/profile-img.jpg'
import '../About/About.css'



function About (){
    const[parag,setParag]=useState({display:"none", })
    const[show,setShow]=useState({display:"flex",backgroundColor:"teal",width:"150px" })
        
    const[less,setLess]=useState({display:"none"})
    return(
        <div className="about">
         <Navbar aboutpage={{color:"teal"}}/>
         <div className="inner-about">
         <h2>ABOUT</h2>
         <div className="frame">
        
        <div className="try">
         <p className="front">?</p> 
         <div  className="back">
         <div className="hey-frame">
         <img src={profile} alt=""/>
         </div>
        </div>
        </div>

        </div>
        <div className="about-text">
       <p className="div-parag"> I am Onanuga Khadijah, a graduate of Nursing Science from the College of Medicine, University of Lagos. 
        My interest in tech started when I attended a  Lagos state sponsored program. 
        The program, called "Code-Lagos", was for 2-weeks and it was  a program that exposed me 
        to HTML and CSS. On Completing the program I had a strong passion to go fully into programming and 
         get better at it.  

        Developing responsive websites and web applications are things I see as being thought-provoking and as such making me 
        a problem-solver. I love learning new things and experimenting on different programs.</p>
        <div className="remain-button"  style={show} onClick={(()=>{setParag({display:"inline"});setShow({display:"none"});setLess({display:"flex",
        backgroundColor:"teal",width:"150px",height:"40px",justifyContent:"center",alignItems:"center"})})}>
       
            {/* <p className="slide-design"></p> */}
         <p>Read More</p> 
            {/* <p className="slide-design-two"></p> */}
           
            </div>
        <div className="remaining-parag" style={parag}>
        <p className="div-parag">I believe in seeking help when needed, which made me enroll into programming schools when I realized 
            I was stuck while learning javascript on my own. That has been a great decision so far  as I didnt just  learn javascript,
             I also learned new things in Html and Css as well  Reactjs(a javascript framework).    </p>
             <p className="div-parag"> When I am not coding, I am either reading, teaching or spending time with family. </p>
             </div>
            < div className="remain-button" style={less} onClick={(()=>{setParag({display:"none"});setShow({display:"flex",backgroundColor:"teal",width:"150px"});setLess({display:"none"})})}>
                <p>Show less</p>
                </div>
        </div>
       
    </div>
        </div>
    )

}
export default About