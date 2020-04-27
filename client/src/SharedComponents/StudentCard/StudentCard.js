import React from "react";
import "./StudentCard.css";

const StudentCard = ({ studentImg, studentname }) => {
  return (
    <div className="student-card">
      <img className="student-img" src={studentImg} alt="student profile" />
      <span className="student-name">{studentname}</span>
    </div>
  )
}


export default StudentCard;
