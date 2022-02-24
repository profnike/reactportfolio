
import Navbar from '../../component/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import '../Home/Home.css'


function Home (){
    const navigate=useNavigate()
    return(
        <div className="home">
         <Navbar homepage={{color:"teal"}}/>
         <div className="homebody">
           <div className="homebody-left">
           <h1>Hi,</h1>
           <h2>I'm Khadijah  </h2>
           <p className="job">Front-end Web Developer</p>
          <i><p className="likes">Passionate about coding. </p></i> 
           </div>
        <div className="circleDiv">

            <button onClick={(()=>{navigate("/Contact")})}>Contact </button>
          
           </div> 
           
           </div>
        </div>
    )

}
export default Home