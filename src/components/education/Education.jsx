import React from 'react'
import './education.css'
import {BsFillCalendarWeekFill} from 'react-icons/bs';

const Education = () => {
  return (
    <section id='education' className='education'>
    <h2>Education</h2>

    <div className=" container education__container">

            <div class="education-box">

        <div class="education-content">
          <div class="content">
            <div class="year"><BsFillCalendarWeekFill/>  07/2023 - 10/2023</div>
            <h4>Completer - Zuitt Web Development Bootcamp</h4>
            <p>Zuitt Web Developer Program </p>
              <p>Fullstack Course Package</p>
          </div>
        </div>

        <div class="education-content">
          <div class="content">
            <div class="year"><BsFillCalendarWeekFill/>  2012 - 2016</div>
            <h4>Bachelors Degree - Information Technology</h4>
            <p>Bohol Island State University - Philippines </p>
              <p>06/2012 - 03/2016</p>
          </div>
        </div>
        </div>

    </div>

  </section>
  )
}

export default Education;