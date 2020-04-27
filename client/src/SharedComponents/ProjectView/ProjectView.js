import React from 'react';
import './ProjectView.css';

const ProjectView = ({ projectImg }) => {
  return (
    <img className='project-view' src={projectImg} alt="" />
  )
}

export default ProjectView;
