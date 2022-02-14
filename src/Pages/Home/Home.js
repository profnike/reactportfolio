import Navbar from '../../component/Navbar/Navbar'
import '../Home/Home.css'


function Home (){
    return(
        <div className="home">
         <Navbar/>
         <div className="homebody">
           <div className="homebody-left">
           <h1>Hi,</h1>
           <h2>I'm Khadijah  </h2>
           <p className="job">Front-end Web Developer</p>
           <p className="likes">Passionate about coding. </p>
           </div>
          <div className="circleDiv">
           <div className="circle">
               <code className="code-illus-div">&lt;div&gt; &lt;/div&gt;</code>
               <code className="code-illus-sec">&lt;section&gt; &lt;/section&gt;</code>
               <code className="code-illus-p">&lt;p&gt; &lt;/p&gt;</code>
               <code className="code-illus-body">&lt;body&gt; &lt;/body&gt;</code>
              
           </div>
           </div>
           </div>
        </div>
    )

}
export default Home