import Navbar from '../../component/Navbar/Navbar'
import '../Home/Home.css'


function Home (){
    return(
        <div className="home">
         <Navbar homepage={{color:"teal"}}/>
         <div className="homebody">
           <div className="homebody-left">
           <h1>Hi,</h1>
           <h2>I'm Khadijah  </h2>
           <p className="job">Front-end Web Developer</p>
           <p className="likes">Passionate about coding. </p>
           </div>
        <div className="circleDiv">

            <button>Contact </button>
          
           </div> 
           
           </div>
        </div>
    )

}
export default Home