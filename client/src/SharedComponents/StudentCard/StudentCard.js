import React, { Component } from "react";
import "./StudentCard.css";

class StudentCard extends Component {
  render() {
    return (
      // we will get student image and name from database
      <div className="student-card">
        <img className="student-img" src={""} alt="student profile" />
        <span className="student-name"></span>
      </div>
    );
  }
}

export default StudentCard;
