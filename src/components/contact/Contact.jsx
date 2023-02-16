import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsMessenger, BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cezs0bq', 'template_dekzrnf', form.current, 'yq_UyP9NiFFXkLXSS')
    e.target.reset();  
  };

  return (
    <section id = "contact">
      <h5>Let's Get in Touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>E-Mail</h4>
            <h5>jakub.kosiorek.55@gmail.com</h5>
            <a href='mailto:jakub.kosiorek.55@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>kosior3kt</h5>
            <a href='https://m.me/follow.damn.train.68' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>420-2137-69</h5>
            <a href='https://api.whatsapp.com/send?phone=48501922090' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='E-Mail' required/>
          <textarea name="message" rows="7" placeholder='Your message goes here' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
