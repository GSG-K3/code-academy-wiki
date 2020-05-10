import React from 'react';
import './StudentCard.css';

const StudentCard = ({ studentImg, studentname }) => {
  return (
    <div className='student-card-container'>
      {studentImg ? (
        <img className='student-img' src={studentImg} alt='student profile' />
      ) : (
        <div className='student-img'>
          {studentname.charAt(0)}
        </div>
      )}
      <span className='student-name'>{studentname}</span>
    </div>
  );
};

export default StudentCard;
