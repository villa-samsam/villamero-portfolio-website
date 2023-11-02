import React from 'react';
import './skills.css';
import {BsFillPatchCheckFill} from 'react-icons/bs';

const Skills = () => {
  return (
    <section id='skills' className='skills'>
      <h2>What Skills I have</h2>

      <div className='container skills__container'>

        <div className="skills__frontend">

          <h3>Frontend Development</h3>
          <div className="skills__content">
          <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

          </div>

        </div>  
{/* End of Frontend Skills */}
        <div className="skills__backend">
        <h3>Backend Development</h3>
          <div className="skills__content">

          <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>

            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Express</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>

            </article>

            <article className='skills__details'>
              <BsFillPatchCheckFill className='skills__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
              </div>

            </article>
          </div>

        </div>  
        </div>   
    </section>
  )
}

export default Skills;