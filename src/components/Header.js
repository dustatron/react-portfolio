import React from 'react';
import headerImg from '../media/header.png';

const Header = () => {
  return (
    <div className='header' id='top'>
      <img src={headerImg} alt='background' />
      <div className='header-title'>
        <p>Hi,</p>
        <p>I'm Dusty</p>
        <p>A Front-end Developer</p>
      </div>
      <div className='header-links'>
        <a
          href='https://www.linkedin.com/in/dustymccord/'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={require('../media/icons/linkedin.svg')} alt='linkedin' />
        </a>
        <a
          href='https://github.com/dustatron'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={require('../media/icons/github-simple.svg')} alt='github' />
        </a>

        <a
          href='https://twitter.com/dustatron'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={require('../media/icons/twitter.svg')} alt='twitter' />
        </a>
        <a
          href='mailto:dustymccord@gmail.com'
          target='_blank'
          rel='noopener noreferrer'>
          <img src={require('../media/icons/mailbox.svg')} alt='linkedin' />
        </a>
      </div>
    </div>
  );
};

export default Header;
