import React,{Component} from 'react';
import "./CohortCard.css";

class CohortCard extends Component {
  render() {
    return (
      <div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h1>K#</h1>
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
}
export default CohortCard;
