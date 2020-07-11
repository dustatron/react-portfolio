import React from 'react';
import headerImg from '../media/header-1.png';

const Header = () => {
  return (
    <div className='header' id='top'>
      <img src={headerImg} alt='background' />
      <div className='header-title'>
        <p>Hi,</p>
        <p>I'm Dusty</p>
        <p>A Front-end Developer</p>
      </div>
    </div>
  );
};

export default Header;
