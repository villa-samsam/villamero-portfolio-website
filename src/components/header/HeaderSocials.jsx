import React from 'react';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';


export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/christine-mae-villamero-988b4912b/" target='_blank'> <BsLinkedin/> </a>
        <a href="https://github.com/villa-samsam" target='_blank'> <BsGithub/></a>
        <a href="https://www.instagram.com/villamero.samsam/" target='_blank'> <BsInstagram/></a>
    </div>
  )
}


export default HeaderSocials;