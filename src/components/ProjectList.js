import React, { useState } from 'react';
import { v4 } from 'uuid';
import { Link } from 'react-router-dom';

// Components
import ProjectIcon from './ProjectIcon';
import TechListData from '../data/TechListData';
import ProjectData from '../data/ProjectData';

const ProjectList = ({ handleViewChange }) => {
  const initialState = ProjectData.slice(0, 6);
  const [selected, setSelected] = useState(0);
  const [projectList, setProjectList] = useState(initialState);
  const [showMore, setShowMore] = useState(false);

  const updateSelected = (index, value) => {
    const newList = ProjectData.filter((project) => {
      const lowerCase = project.techList.map((tech) =>
        tech.toLocaleLowerCase()
      );
      return lowerCase.includes(value.toLowerCase());
    });

    if (value === 'show all') {
      return setProjectList(initialState);
    } else {
      setProjectList(newList);
    }
    return setSelected(index);
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
              updateSelected(index, tech);
            }}>
            {tech}
          </div>
        ))}
      </div>
      <div className='project-list-icons'>
        {projectList.map((proj) => (
          <Link
            key={v4()}
            // to={`/proj/${proj.id}`}
            onClick={() => {
              handleViewChange(2, proj.id);
            }}>
            <ProjectIcon project={proj} selected={selected} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
