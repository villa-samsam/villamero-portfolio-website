import React from "react";
import "./projectx.css";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project2.jpg";
import IMG3 from "../../assets/project3.png";
import IMG4 from "../../assets/project4.png";
import IMG5 from "../../assets/project5.png";
import IMG6 from "../../assets/project6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Samshop flowershop website",
    github: "https://github.com/villa-samsam/e-commerce-samshop",
    demo: "https://e-commerce-project-10d19.web.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather App",
    github: "https://github.com/villa-samsam/weather-app",
    demo: "https://github.com/villa-samsam/weather-app",
  },
  {
    id: 4,
    image: IMG4,
    title: "Amazone Clone",
    github: "https://github.com/villa-samsam/react-amazon-clone",
    demo: "https://github.com/villa-samsam/react-amazon-clone",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h4>My Ongoing Work</h4>
      <h2>Projects</h2>

      <div className="container projects__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="project__item-cta">
                  <a href={github} className="btn">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
