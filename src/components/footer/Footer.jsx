import React from 'react';
import './footer.css';
import {BsFacebook, BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs';
import {FaThreads} from 'react-icons/fa6';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'> Christine Mae Villamero Portfolio</a>
      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="#about">About</a></li>
        <li> <a href="#">Projects</a></li>
        <li> <a href="#">Comments</a></li>
        <li> <a href="#">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100007733567586"><BsFacebook/></a>
        <a href="https://www.instagram.com/villamero.samsam/"><BsInstagram/></a>
        <a href="https://www.threads.net/@villamero.samsam"><FaThreads/></a>
        <a href="https://www.linkedin.com/in/christine-mae-villamero-988b4912b/"><BsLinkedin/></a>
        <a href="https://github.com/villa-samsam"><BsGithub/></a>
      </div>
    <div className="footer__copyright">
      <small>&copy;2023. All Rights Reserved Designed and Developed by Christine Mae Villamero</small>
    </div>


    </footer>
  )
}

export default Footer;