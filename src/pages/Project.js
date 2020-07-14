import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectData from '../data/ProjectData';
// import screenShot from '../media/screenshots/ts.png';

const Project = ({ match: { params } }) => {
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
      console.log('id', params.id);
      return pro.id === parseInt(params.id);
    });
    setProject(data ? data : project);
  }, [params]);

  const prevLinkId = project.id - 1;
  const nextLinkId = project.id + 1;
  const lastProject = ProjectData.length;

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
  } = project; // Deconstruct

  return (
    <div className='project'>
      <div className='project-header'>
        <div className='project-header-nav'>
          {prevLinkId !== 0 ? (
            <Link to={`/proj/${prevLinkId}`}>
              <div className='project-header-nav-prev'>
                <div className='chevron'>
                  <img src={require('../media/icons/prev-arrow.svg')} alt='' />
                </div>
                Previous
              </div>
            </Link>
          ) : (
            'First Project'
          )}
          {nextLinkId !== lastProject ? (
            <Link to={`/proj/${nextLinkId}`}>
              <div className='project-header-nav-back'>
                Next
                <div className='chevron'>
                  <img src={require('../media/icons/next-arrow.svg')} alt='' />
                </div>
              </div>
            </Link>
          ) : (
            ' Last Project'
          )}
        </div>
        <div className='project-header-title'>{title}</div>
        <div className='project-header-img'>
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
            <img
              src={require(`../media/screenshots/${img}`)}
              alt='screen shot'
            />
          )}
        </div>
      </div>
      <div className='project-tech'>
        <div className='project-tech-top'>
          <div className='project-tech-top-title'>Technologies</div>
          <div className='project-tech-top-Links'>
            <a href='/'>Active Page</a>
            <a href='/'>GitHub</a>
          </div>
        </div>
        <div className='project-tech-bottom'>
          {techList
            ? techList.map((item) => (
                <div className='project-tech-bottom-item'>{item} </div>
              ))
            : ''}
        </div>
      </div>
      <div className='project-details'>
        <div className='project-details-left'>An image goes here</div>
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
