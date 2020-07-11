import React from 'react';
// import blazers from '../media/screenshots/'
const ProjectIcon = ({ project }) => {
  const imgString = '../media/screenshots/ts.png';
  return (
    <div className={`project-icon`}>
      <div className='project-icon-bar'>
        <ul>
          <li className='project-icon-bar-circle red'></li>
          <li className='project-icon-bar-circle orange'></li>
          <li className='project-icon-bar-circle green'></li>
        </ul>
        <div className='project-icon-bar-title'>{project.title}</div>
        <div></div>
      </div>
      <div className='project-icon-img'>
        <img
          src={require(`../media/screenshots/${project.img}`)}
          alt='screenshot'
        />
      </div>
    </div>
  );
};

export default ProjectIcon;
