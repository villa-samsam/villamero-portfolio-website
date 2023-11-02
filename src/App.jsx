import React from 'react';
import Header from './components/header/Header.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx';
import Skills from './components/skills/Skills.jsx';
import Projects from './components/projects/Projects.jsx';
import Education from './components/education/Education.jsx';
import Comments from './components/comments/Comments.jsx';
import Contact from './components/contact/Contact.jsx';
import Footer from './components/footer/Footer.jsx';



import {BrowserRouter as Router} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';
import {useEffect, useState} from 'react';




function App() {


  useEffect(() => {
  })

  return (

    <>
          <Header/>
          <Nav/>
          <About/>
          <Experience/>
          <Education/>
          <Skills/>
          <Projects/>
          <Comments/>
          <Contact/>
          <Footer/>
          

    </>

  );
  }
  
export default App;
