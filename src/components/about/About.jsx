import React from 'react';
import './about.css';
import ME from '../../assets/me.png';
import {MdWork, MdBuild} from 'react-icons/md';
import {IoSchoolSharp} from 'react-icons/io5';


const About = () => {
  return (
    <section id='about' className='about'>
      <h4>Get to Know</h4>
      <h2>About Me</h2>
    <div className='container about__container'>

      <div className='about__me'>
      
        <div className="about__me-image">

          <img src={ME} alt="About Image" />
        </div>
       </div>

        <div className="about__content">

            <div className="about__cards">
              <article className='about__card'>
                <MdWork className='about__icon'/>
                <a href="experience"><h5>Work Experience</h5></a>

              </article>

              <article className='about__card'>
                <IoSchoolSharp className='about__icon'/>
                
                <a href="#education"><h5>Education</h5> </a>
              </article>

              

              <article className='about__card'>
                <MdBuild className='about__icon'/>
                <a href="#skills"><h5>Skills</h5></a>

              </article>

            </div>
            <p>I'm embarking on an exciting journey into the world of web development, driven by a passion for creating dynamic, user-friendly digital experiences. I am an experienced Vehicle Software System Designer with a proven track record of five years in the automotive industry. Now my goal is to secure a position that not only leverages my current expertise but also allows me to dive into the dynamic and exciting realm of web development. Let's connect!</p>

            <a href="#contact" className='btn btn-primary'>Let's talk</a>

        </div>

      

    </div>
    
    
    </section>
  )
}

export default About;