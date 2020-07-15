import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';

const Home = ({ updateView }) => {
  return (
    <>
      <Header />
      <About />
      <ProjectList handleViewChange={updateView} />
      <Contact />
    </>
  );
};

export default Home;
