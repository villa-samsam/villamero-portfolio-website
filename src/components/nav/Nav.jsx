import React from 'react';
import './nav.css';
import {FaHome, FaUserCircle, FaClipboardList} from 'react-icons/fa';
import {BsFillChatRightQuoteFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import{useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState ('#');
  return (
    <nav>

      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserCircle/> </a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><FaClipboardList/> </a>
      <a href="#comments" onClick={() => setActiveNav('#comments')} className={activeNav === '#comments' ? 'active' : ''}><BsFillChatRightQuoteFill/> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail/> </a>
    </nav>
  )
}








export default Nav;