import React from 'react'
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {FaFacebookMessenger} from 'react-icons/fa';
import {RiMessage3Fill} from 'react-icons/ri';
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';




export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bxotuyl', 'template_o9spji9', form.current, '7OC7BT1i5byBhESn5')

    e.target.reset()
  };

  const handleButtonClick = () => {
    Swal.fire({
      title: 'Message Sent',
      text: 'Thank you for your message!',
      icon: 'success',
      customClass: {
        popup: 'custom-sweetalert',
      }
    });
  };


  return (
    <section id='contact' className='contact'>
        <h4>Get In Touch</h4>
        <h2>Contact Me</h2>

    <div class="container contact__container">
      <div className="contact__options">
        <div>
        <article className='contact__option'>
          
          <h4> <MdEmail className='contact__option-icon'/> Email</h4>
          <h5>villamerosam@gmail.com</h5>
          <a href="mailto:villamerosam@gmail.com" target='_blank'> Send a message</a>

        </article>

        <article className='contact__option'>
          
          <h4><RiMessage3Fill className='contact__option-icon'/> Whatsapp</h4>
          <h5>+818095419722</h5>
          <a href="https://web.whatsapp.com/send?phone+818095419722" target='_blank'> Send a message</a>

        </article>
        </div>
        

        <article className='map-responsive'>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6502.093263389737!2d139.61000119703948!3d35.42887484067883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185b6026ff5ed9%3A0x90069341f4d8e151!2s1-ch%C5%8Dme-66-17%20%C5%8Coka%2C%20Minami%20Ward%2C%20Yokohama%2C%20Kanagawa%20232-0061!5e0!3m2!1sen!2sjp!4v1698930856154!5m2!1sen!2sjp" width="1200" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='Responsive Google Map'></iframe>
        </article>

      </div>
 {/*===================== end of contact option -============================*/}

      <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <input type="text" name='subject' placeholder='Subject' required />
          <textarea name="message" rows="10" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary' onClick={handleButtonClick}>Send message</button>

      </form>
        
    </div>

    </section>
  )
}

export default Contact;

