import React from 'react';
import './CohortCard.css';
import { Link } from 'react-router-dom';

const CohortCard = ({ name, id }) => {
  return (
    <Link to={`/cohortinfo/${id}`}>
      <div>
        <div className='flip-card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
              <h1>{name}</h1>
            </div>
            <div className='flip-card-back'>
              <span className='read-more' href='#'>
                Click to read More ...
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CohortCard;
