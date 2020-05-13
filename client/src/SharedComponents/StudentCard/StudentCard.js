import React from 'react';
import './StudentCard.css';

const StudentCard = ({ studentImg, studentname, studentrole }) => {
  return (
    <div className='student-card-container'>
      {studentImg ? (
        <img className='student-img' src={studentImg} alt='' />
      ) : (
        <div className='student-img'>{studentname.charAt(0)}</div>
      )}
      {studentrole === 'cf' ? (
        <span className='student-name'>
          {studentname} ({studentrole})
        </span>
      ) : (
        <span className='student-name'>{studentname}</span>
      )}
    </div>
  );
};

export default StudentCard;
