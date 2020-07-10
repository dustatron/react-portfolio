import React from 'react';
import NavLink from 'react-router-dom/NavLink';
import captain from '../media/icons/captain.png';
import home from '../media/icons/home.png';
import rocket from '../media/icons/rocket.png';
import projects from '../media/icons/projects.png';
import mail from '../media/icons/mail.png';
import clipboard from '../media/icons/clipboard.png';

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={captain} alt='logo' />
      </div>
      <ul className='navbar-list'>
        <li>
          <NavLink
            activeClassName='selected'
            className='navbar-list-item'
            to={'/home'}>
            <div className='navbar-list-item-img'>
              <img src={home} alt='home' />
            </div>
            <div className='navbar-list-item-copy'>home</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='selected'
            className='navbar-list-item'
            to={'/proj/1'}>
            <div className='navbar-list-item-img'>
              <img src={rocket} alt='home' />
            </div>
            <div className='navbar-list-item-copy'>About me</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='selected'
            className='navbar-list-item'
            to={'/proj/2'}>
            <div className='navbar-list-item-img'>
              <img src={projects} alt='home' />
            </div>
            <div className='navbar-list-item-copy'>Projects</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='selected'
            className='navbar-list-item'
            to={'/proj/3'}>
            <div className='navbar-list-item-img'>
              <img src={mail} alt='home' />
            </div>
            <div className='navbar-list-item-copy'>Contact</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='selected'
            className='navbar-list-item'
            to={'/proj/4'}>
            <div className='navbar-list-item-img'>
              <img src={clipboard} alt='home' />
            </div>
            <div className='navbar-list-item-copy'>Resume</div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
