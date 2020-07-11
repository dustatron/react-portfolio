import React from 'react';

const ProjectIcon = ({ project }) => {
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
    </div>
  );
};

export default ProjectIcon;
