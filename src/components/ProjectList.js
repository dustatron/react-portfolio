import React from 'react';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

import ProjectIcon from './ProjectIcon';

import TechListData from '../data/TechListData';
import ProjectData from '../data/ProjectData';

const ProjectList = () => {
  return (
    <div className='project-list'>
      <div className='project-list-title'>My Recent Projects</div>
      <div className='project-list-tech'>
        {TechListData.map((tech) => (
          <div key={v4()} className='project-list-tech-box'>
            {tech}
          </div>
        ))}
      </div>
      <div className='project-list-icons'>
        {ProjectData.map((proj) => (
          <Link to={`/proj/${proj.id}`}>
            <ProjectIcon project={proj} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
