import Navbar from '../../component/Navbar/Navbar'

import covid from '../../Asset/Covidpics.PNG'
import flex from '../../Asset/Flex.PNG'
import zara from '../../Asset/Zara.PNG'
import todo from '../../Asset/todo.PNG'
import '../Projects/Projects.css'


function Projects (){
    return(
        <div className="projects">
         <Navbar projectpage={{color:"teal"}}/>
         <div className="outer-project">
         <h2>PROJECTS</h2>
         <div className="projectbody">
        
           <a className="projectlink-style" href="https://profnike.github.io/covidpage"> <div className="project-box">
                <div className="project-image-div">
                       <img src={covid} alt=""/>
                </div>
                <h4>CovidStat</h4>
                <p >Covid-19 has been declared a pandemic, get to know more on the cases of
                     this disease in various countries across the world.</p>
                <p className="content-parag">Built with:Html,Css,Bootstrap and Reactjs.</p>    
            </div>
            </a>
            <a className="projectlink-style" href="https://hardcore-meitner-166493.netlify.app/"><div className="project-box">
                <div className="project-image-div">
                <img src={flex} alt=""/>
                </div>
                <h4>Flex Subscription App</h4>
                <p>Do  you have different subscriptions across various platforms and wish to pay for all your 
                    subscriptions on just one platform? Flex App is your best answer.</p>
                    <p className="content-parag">Built with:Html,Css,Reactjs and Redux.</p>    
            </div>
            </a>
            <a className="projectlink-style" href="https://zarahouse-main.netlify.app/"><div className="project-box">
                <div className="project-image-div">
                <img src={zara} alt=""/>
                </div>
                <h4>Zara House</h4>
                <p>This is an online store where you get trendy wears. </p>
                <p className="content-parag">Built with:Html,Css and Reactjs.</p>    
            </div>
            </a>
            <a className="projectlink-style" href="https://profnike.github.io/Todo-Javascript/">
                 <div className="project-box">
                <div className="project-image-div">
                <img src={todo} alt=""/>
                </div>
                <h4>To-do App</h4>
                <p>Creating a list of things we intend to do helps us to be more organized. 
                    This To-do App will greatly help with that</p>
                    <p className="content-parag">Built with:Html,Css and Javascript.</p>    
            </div>
            </a>
           </div>
         
        </div>
        </div>
    )

}
export default Projects