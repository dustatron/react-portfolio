import React from 'react';
// import NavLink from 'react-router-dom/NavLink';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import captain from '../media/icons/captain.png';
import home from '../media/icons/home.png';
import rocket from '../media/icons/rocket.png';
import projects from '../media/icons/projects.png';
import mail from '../media/icons/mail.png';
import clipboard from '../media/icons/clipboard.png';

const NavBar = () => {
  const location = useLocation();
  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <img src={captain} alt='logo' />
      </div>
      <ul className='navbar-list'>
        <li>
          <NavLink
            smooth
            activeClassName={
              `${location.pathname}${location.hash}` === '/home#top' ||
              `${location.pathname}${location.hash}` === '/home'
                ? 'selected'
                : ''
            }
            className={`navbar-list-item`}
            exact
            to={'/home#top'}>
            <div className='navbar-list-item-img'>
              <img src={home} alt='home' />
            </div>
            <div className='navbar-list-item-copy'>home</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            smooth
            activeClassName={
              `${location.pathname}${location.hash}` === '/home#about'
                ? 'selected'
                : ''
            }
            className='navbar-list-item'
            to={'/home#about'}>
            <div className='navbar-list-item-img'>
              <img src={rocket} alt='about' />
            </div>
            <div className='navbar-list-item-copy'>About</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            smooth
            activeClassName={
              `${location.pathname}${location.hash}` === '/home#projects'
                ? 'selected'
                : ''
            }
            className='navbar-list-item'
            to={'/home#projects'}>
            <div className='navbar-list-item-img'>
              <img src={projects} alt='projects' />
            </div>
            <div className='navbar-list-item-copy'>Projects</div>
          </NavLink>
        </li>

        <li>
          <NavLink
            smooth
            activeClassName={
              `${location.pathname}${location.hash}` === '/home#contact'
                ? 'selected'
                : ''
            }
            className='navbar-list-item'
            to={'/home#contact'}>
            <div className='navbar-list-item-img'>
              <img src={mail} alt='home' />
            </div>
            <div className='navbar-list-item-copy'>Contact</div>
          </NavLink>
        </li>
        <li>
          <a
            className='navbar-list-item'
            href='https://docs.google.com/document/d/1fIFS3Dhcqr3sVAJxUaqoQ-Ws92Yl9xRoHjzTJI_rTGE/edit?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'>
            <div className='navbar-list-item-img'>
              <img src={clipboard} alt='resume' />
            </div>
            <div className='navbar-list-item-copy'>Resume</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
