import React from 'react';

const Project = ({ match: { params } }) => {
  return <div>Project {params.id} </div>;
};

export default Project;
