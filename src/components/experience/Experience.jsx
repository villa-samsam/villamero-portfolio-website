import React from 'react'
import './experience.css'
import {BsFillCalendarWeekFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience' className='experience'>
      <h2>My Working Journey</h2>

      <div className=" container experience__container">

          <div className="experience-box">

            <div className="experience-content">
              <div className="content">
              
                <div className="year"><BsFillCalendarWeekFill/> 2019 - Present</div>
                <h4>Vehicle Software System Designer - Bosch</h4>
                <p>Analyze customer requirements Discuss requirements with customer as well as support for client's inquiries, prepare customer function requirements, test specifications for ECU software testing</p>
                <p>Perform acceptance testing using INCA, Labcar, Vector CANoe, investigate any bugs or issues encountered by reading code or replicating issues with the vehicle software simulator</p>
                <p>Has been a trusted resource in translation requests for Japanese vehicle specifications</p>  
                  
                  
              </div>
            </div>

            <div className="experience-content">
              <div className="content">
              
                <div className="year"> <BsFillCalendarWeekFill/> 2016 - 2019</div>
                <h4>Programmer/Tester - Quadrant Info Services</h4>
                <p>Wrote and updated codes for software called Mappro - used to generate projected insurance rates  </p>
                <p>Created complete documentation for the test cases and change points of the software source codes</p>  
                 
              </div>
            </div>

            <div className="experience-content">
              <div className="content">
                <div className="year"><BsFillCalendarWeekFill/> 04/2016 - 10/2016</div>
                <h4>Junior Software Engineer - Denso Techno</h4>
                <p>Created test cases, test plans and documents, tests programs inputs and outputs of source codes through unit testing for vehicles with C programming language</p>
              </div>
            </div>

          </div>

      </div>

    </section>
    
  )
}

export default Experience;