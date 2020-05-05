import React from 'react';
import './ProjectView.css';

// const ProjectView = ({ projectImg, projectDetailsStyle }) => {
//   return (
//     <div>
//       {projectDetailsStyle ? (
//         <img className='project-imgview' src={projectImg} alt='' />
//       ) : (
//         <img className='project-view' src={projectImg} alt='' />
//       )}
//     </div>
//   );
// };

const ProjectView = ({ projectImg, projectDetailsStyle }) => {
  const className = projectDetailsStyle ? 'project-imgview' : 'project-view';
  return( <img className={className} src={projectImg} alt='' />
)}
export default ProjectView;
