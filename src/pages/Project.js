import React from 'react';

const Project = ({ match: { params } }) => {
  return <div className='project'>Project {params.id} </div>;
};

export default Project;
