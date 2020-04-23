import React, { Component } from "react";
import "./StudentCard.css";
import adele from "../../images/adele.jpeg";

class StudentCard extends Component {
  render() {
    return (
      <div className="student-card">
        <img className="student-img" src={adele} alt="student" />
        <span className="student-name"> Adele</span>
      </div>
    );
  }
}

export default StudentCard;
