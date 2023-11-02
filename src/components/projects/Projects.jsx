import React from 'react';
import './projectx.css';
import IMG1 from '../../assets/project1.jpg';
import IMG2 from '../../assets/project2.jpg';
import IMG3 from '../../assets/project3.png';
import IMG4 from '../../assets/project4.png';
import IMG5 from '../../assets/project5.png';
import IMG6 from '../../assets/project6.png';

const data = [
  {
    id:1,
    image: IMG1,
    title: 'E-Commerce-Website-Design-Home-Page',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20637230-E-Commerce-Website-Design-Home-Page'
  },
  {
    id:2,
    image: IMG2,
    title: 'Weather App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20331883-Concept-Weather'
  },
  {
    id:3,
    image: IMG3,
    title: 'Messaging App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15568094-Messaging-Dark-Light-Theme-Exploration'
  },
  {
    id:4,
    image: IMG4,
    title: 'To-Do-List App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/13998970-Simple-Task-App'
  },
  {
    id:5,
    image: IMG5,
    title: 'Dating App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/15840874-Dating-App'
  },
  {
    id:6,
    image: IMG6,
    title: 'Quiz App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/14651566-Mobile-quiz-app-I-m-genius'
  }
]

const Projects = () => {
  return (
    
    <section id='projects' className='projects'>
      <h4>My Ongoing Work</h4>
      <h2>Projects</h2>

      <div className="container projects__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id}className='project__item'>
              <div className='project__item-image'>
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="project__item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </div>
            </article>
            )
          })
        }
      
      </div>

      

    </section>
  )
}

export default Projects;


