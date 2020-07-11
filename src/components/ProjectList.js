import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

import ProjectIcon from './ProjectIcon';

import TechListData from '../data/TechListData';
import ProjectData from '../data/ProjectData';

const ProjectList = () => {
  const [selected, setSelected] = useState(0);
  const updateSelected = (e) => {
    setSelected(e);
  };
  return (
    <div className='project-list' id='projects'>
      <div className='project-list-title'>My Recent Projects</div>
      <div className='project-list-tech'>
        {TechListData.map((tech, index) => (
          <div
            key={index}
            className={`project-list-tech-box ${
              selected === index ? 'active-box' : ''
            }`}
            onClick={() => {
              updateSelected(index);
            }}>
            {tech}
          </div>
        ))}
      </div>
      <div className='project-list-icons'>
        {ProjectData.map((proj) => (
          <Link to={`/proj/${proj.id}`}>
            <ProjectIcon
              project={proj}
              selected={selected}
              handleClick={updateSelected}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
