import Navbar from '../../component/Navbar/Navbar'
import '../Contact/Contact.css'


function Contact (){
    return(
        <div className="contact">
         <Navbar contactpage={{color:"white",backgroundColor:"teal",border:"none"}}/>
         <div className="contactbody">
           <h2>Contact me</h2>
           <p>i am open to all kinds of amazing opportunities and will love to take part
                in mind-blowing projects.</p>
                <div className="contact-input-div">
                <input type="text" placeholder="Name"/>
                </div>
                <div className="contact-input-div">
                <input type="email" placeholder="Email"/>
                </div >
                <div className="contact-input-div">
                <input type="text" placeholder="Subject"/>
                </div>
                <textarea className="contact-input-div textarea" placeholder="Send a amessage"/>
           
           </div>
        </div>
    )

}
export default Contact