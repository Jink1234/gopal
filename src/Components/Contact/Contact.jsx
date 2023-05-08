import React, { useRef, useState } from 'react'
import "./contact.css"
import phone from "../../image1/phone.png"
import Email from "../../image1/email.png"
import Address from "../../image1/address.png"
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef=useRef();
  const [done,setDone]=useState(false)

  const handleSubmit= (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_a0xd2nk', 'template_k38wilo', formRef.current, 'wrFlaxDr-1ciHtGA1')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    })
  }
  return (
    <div className='c'> 
       <div className="c-bg"></div>
        <div className="contact-wrapper">
            <div className="contact-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className='c-info'>
               <div className='c-info-item'>
                <img className='info-icon' src={phone} alt=''></img>
                +91 1234 678 905
               </div>
               <div className='c-info-item'>
                <img className='info-icon' src={Email} alt=''></img>
                jink@gmail.com
               </div>
               <div className='c-info-item'>
                <img className='info-icon' src={Address} alt=''></img>
               301 3rd line KPHB Colony,Hyderabad,India
               </div>
            </div>
            </div>
            <div className="contact-right">
            <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input type="text" name="user_name" placeholder='Name'></input>
                <input type="text" name="user_subject" placeholder='Project'></input>
                <input type="text" name="user_email" placeholder='Email'></input>
                <textarea rows="5" placeholder="Message" name="message"></textarea>
                <button>Submit</button>
                {done && "Thank you......"}
            </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact