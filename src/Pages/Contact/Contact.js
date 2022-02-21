import React, { useRef } from 'react';
import Navbar from '../../component/Navbar/Navbar'
import linkedin from '../../Asset/linkediniconn.png'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import github from '../../Asset/github-icons.png'
import '../Contact/Contact.css'


function Contact (){
    const[info, setInfo]=useState({display:"none",backgroundColor:"red",alignItems:"center",
    justifyContent:"center",
                width:"250px",padding:"10px",paddingTop:"0px",color:"black",height:"70px",margin:"0 auto"})
    const[message,setMessage]=useState("")
        const form = useRef();

        function Goup(){
       
            window.scrollTo({top:0, behavior:'smooth'})
        }
    const sendEmail = (e) => {
        e.preventDefault();
        Goup()
        emailjs.sendForm('gmail', 'template_zv8b0a6', form.current, 'user_41EteRPUSXus5WL68sEW4')
          .then((result) => {
              console.log(result.text);
              setMessage("Message sent successfully")
              setInfo({display:"block",alignItems:"center",
              justifyContent:"center",backgroundColor:"teal",
              width:"250px",padding:"10px",color:"black",height:"80px",
              margin:"0 auto",marginBottom:"50px",position:"absolute"})
          }, (error) => {
              console.log(error.text);
              setInfo({display:"block",alignItems:"center",
              justifyContent:"center",backgroundColor:"teal",
              width:"250px",padding:"10px",paddingTop:"10px",paddingBottom:"10px",color:"black",height:"80px",
              margin:"0 auto",marginBottom:"50px",position:"absolute",zIndex:"100000"})
              setMessage("oops something went wrong")
          });
          e.target.reset()
      };
   
    return(
        <div className="contact">
         <Navbar contactpage={{color:"white",backgroundColor:"teal",border:"none"}}/>
         <div className="contactbody">
             <div className="info-alert" style={info}>
                 <p>{message}</p>
                 <button className="info-button" onClick={(()=>{setInfo({display:"none"})})}>Ok</button>
             </div>
           <h2>Contact me</h2>
           <p>i am open to all kinds of amazing opportunities and will love to take part
                in mind-blowing projects.</p>
                <form ref={form} onSubmit={sendEmail}>
                <div className="contact-input-div">
                <input type="text" placeholder="Name" name="name" onFocus={(()=>{setInfo({display:"none"})})} required />
                </div>
                <div className="contact-input-div">
                <input type="email" placeholder="Email" name="email" onFocus={(()=>{setInfo({display:"none"})})} required/>
                </div >
                <div className="contact-input-div">
                <input type="text" placeholder="Subject" name="subject" onFocus={(()=>{setInfo({display:"none"})})}  />
                </div>
                <textarea className="contact-input-div textarea" placeholder="Send a amessage" name="message" onFocus={(()=>{setInfo({display:"none"})})} required/>
                <button type="submit" className="contact-submit-button">Submit</button>
                </form>
                <div className="contact-socials">
                    <a className="socials-linking" href="https://www.linkedin.com/in/khadijah-onanuga-280885129"><div className="inner-contact-socials">
                        <img className="contact-social-icon" src={linkedin} alt=""/>
                        <p>LinkedIn</p>
                    </div>
                    </a>
                    <a className="socials-linking" href="https://github.com/profnike"> <div className="inner-contact-socials">
                    <img className="contact-social-icon" src={github} alt=""/>
                        <p>Github</p>
                    </div>
                    </a>
                </div>
           
           </div>
        </div>
    )

}
export default Contact