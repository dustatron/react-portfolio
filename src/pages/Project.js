import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectData from '../data/ProjectData';
import { v4 } from 'uuid';
import { useTransition, animated } from 'react-spring';

import prevArrow from '../media/icons/arrowleft.svg';
import nextArrow from '../media/icons/arrowright.svg';

const Project = ({ updateView, currentProj }) => {
  const slideRight = {
    from: { opacity: 0, marginLeft: -200, marginRight: 200 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    leave: { opacity: 0, marginLeft: 200, marginRight: -200 },
  };
  const slideLeft = {
    from: { opacity: 0, marginLeft: 200, marginRight: -200 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    leave: { opacity: 0, marginLeft: -200, marginRight: 200 },
  };

  const [direction, setDirection] = useState(slideRight);
  const [project, setProject] = useState({
    id: '',
    title: '',
    img: '',
    tech: '',
    techList: '',
    basicTitle: '',
    basicDetails: '',
    hurdlesTitle: '',
    hurdlesDetails: '',
    activeLink: '',
    gitHubLink: '',
  });
  useEffect(() => {
    const data = ProjectData.find((pro) => {
      return pro.id === currentProj;
    });
    setProject(data ? data : project);
  }, [currentProj, project]);

  const transition = useTransition(project, (project) => project.id, direction); // returns array, (item, item key, styling)

  const prevLinkId = project.id - 1;
  const nextLinkId = project.id + 1;
  const lastProject = ProjectData.length + 1;

  const {
    title,
    img,
    techList,
    basicTitle,
    basicDetails,
    hurdlesTitle,
    hurdlesDetails,
    activeLink,
    gitHubLink,
    secImg,
  } = project; // Deconstruct

  return (
    <div className='project'>
      <div className='project-header'>
        <div className='project-header-nav'>
          {prevLinkId !== 0 ? (
            <Link
              // to={`/proj/${prevLinkId}`}
              onClick={() => {
                setDirection(slideLeft);
                updateView(2, prevLinkId);
              }}>
              <div className='project-header-nav-prev'>
                <div className='chevron'>
                  <img src={`${prevArrow}`} alt='' />
                </div>
                Previous
              </div>
            </Link>
          ) : (
            'First Project'
          )}
          {nextLinkId !== lastProject ? (
            <Link
              // to={`/proj/${nextLinkId}`}
              onClick={() => {
                setDirection(slideRight);
                updateView(2, nextLinkId);
              }}>
              <div className='project-header-nav-back'>
                Next
                <div className='chevron'>
                  <img src={`${nextArrow}`} alt='' />
                </div>
              </div>
            </Link>
          ) : (
            ' Last Project'
          )}
        </div>

        <div className='project-header-title'>{title}</div>
        <div className='project-header-img'>
          {transition.map(({ item, key, props }) => (
            <animated.div
              className='project-header-img-body'
              key={key}
              style={props}>
              <div className='project-icon-bar'>
                <ul>
                  <li className='project-icon-bar-circle red'></li>
                  <li className='project-icon-bar-circle orange'></li>
                  <li className='project-icon-bar-circle green'></li>
                </ul>
                <div className='project-icon-bar-title'>{project.title}</div>
                <div></div>
              </div>
              {img && (
                <a
                  href={activeLink}
                  target='_blank'
                  without
                  rel='noopener noreferrer'>
                  <img
                    src={require(`../media/screenshots/${img}`)}
                    alt='screen shot'
                  />
                </a>
              )}
            </animated.div>
          ))}
        </div>
      </div>

      <div className='project-tech'>
        <div className='project-tech-top'>
          <div className='project-tech-top-title'>Technologies</div>
          <div className='project-tech-top-links'>
            <a
              href={activeLink}
              target='_blank'
              without
              rel='noopener noreferrer'>
              Active Page
            </a>
            <a
              href={gitHubLink}
              target='_blank'
              without
              rel='noopener noreferrer'>
              GitHub
            </a>
          </div>
        </div>
        <div className='project-tech-bottom'>
          {techList
            ? techList.map((item) => (
                <div key={v4()} className='project-tech-bottom-item'>
                  {item}
                </div>
              ))
            : ''}
        </div>
      </div>
      <div className='project-details'>
        <div className='project-details-left'>
          {img && (
            <img
              src={require(`../media/screenshots/${secImg}`)}
              alt='screen shot'
            />
          )}
        </div>
        <div className='project-details-right'>
          <div className='project-details-right-title'>{basicTitle}</div>
          <div className='project-details-right-detail'>{basicDetails}</div>
          <div className='project-details-right-title'>{hurdlesTitle}</div>
          <div className='project-details-right-detail'>{hurdlesDetails}</div>
        </div>
      </div>
    </div>
  );
};

export default Project;
