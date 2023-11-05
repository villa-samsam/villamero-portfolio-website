import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png'
import  HeaderSocials from './HeaderSocials';
import Skills from './Skills.jsx';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='labels__heading'>
        <h4>Hi there! I am</h4>
        <h1>Christine Mae Villamero</h1>
        <h3>Fullstack Web Developer</h3>
        </div>
       
        <CTA />
        <Skills/>
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>


        
      </div>
    </header> 
  )
}

export default Header;