import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import ProjectList from '../components/ProjectList';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ProjectList />
      <Contact />
    </>
  );
};

export default Home;
