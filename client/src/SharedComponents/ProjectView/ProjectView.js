import React from 'react';
import './ProjectView.css';

const ProjectView = ({ projectImg, projectDetailsStyle }) => {
  const className = projectDetailsStyle ? 'project-imgview' : 'project-view';
  return <img className={className} src={projectImg} alt='' />;
};
export default ProjectView;
