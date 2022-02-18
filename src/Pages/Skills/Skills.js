import Navbar from '../../component/Navbar/Navbar'
import html from '../../Asset/html image.png'
import css from '../../Asset/css-image.png'
import javascript from '../../Asset/javascript-icon.png'
import react from '../../Asset/react-icon.png'
import redux from '../../Asset/redux-icon.png'
import github from '../../Asset/github-icons.png'
import '../Skills/Skills.css'


function Skills (){
    return(
        <div className="skills">
         <Navbar skillpage={{color:"teal"}}/>
       
         <div className="skillbody">
         <p className="backg">
             SKILLS
             </p>
             <h2 className=" anim-first">TECHNICAL SKILLS</h2>
             <div className="innerskill anim-second">
                 <div className="skill-image"><img src={html} alt=""/></div>
                 <p>HTML</p>
             </div>
             <div className="innerskill anim-third">
                 <div className="skill-image"><img src={css} alt=""/></div>
                 <p>CSS</p>
             </div>
             <div className="innerskill anim-fourth">
                 <div className="skill-image"><img src={javascript} alt=""/></div>
                 <p>JAVASCRIPT</p>
             </div>
             <div className="innerskill anim-fifth">
                 <div className="skill-image"><img src={react} alt=""/></div>
                 <p>REACTjs</p>
             </div>
             <div className="innerskill anim-sixth">
                 <div className="skill-image"><img src={redux} alt=""/></div>
                 <p>REDUX</p>
             </div>
             <div className="innerskill anim-seventh">
                 <div className="skill-image"><img src={github} alt=""/></div>
                 <p>GITHUB</p>
             </div>
             
           
           
           </div>
        </div>
    )

}
export default Skills