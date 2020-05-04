import React,{Component} from 'react';
import "./CohortCard.css";

  const CohortCard = (props) => {
    return (
      <div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>{props.name}</h1>
            </div>
            <div className="flip-card-back">
              <a className="read-more" href="#">
                Click to read More ...
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default CohortCard;
