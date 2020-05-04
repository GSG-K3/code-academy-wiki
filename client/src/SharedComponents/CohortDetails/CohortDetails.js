import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import ProjectView from '../ProjectView'
import StudentCard from '../StudentCard'
// import MentorView from "../MentorCard/MentorCard";
import "./CohortDetails.css";
import axios from "axios";


const dbProjects = ["","","","",""]
const allProjects = dbProjects.map(project =>{
return <ProjectView
  projectImg={project}
/>
})

const dbStudents = ["","","","",""]
const allStudents = dbStudents.map(student =>{
  return <StudentCard
  studentImg= {student.img}
   studentname={student.name}  />
  })

const dbMentors = ["", "", "", "", ""];
const allMentors = dbMentors.map((mentor) => {
                                               // return <MentorView mentorImg={mentor.img} mentorname={mentor.name} />;
                                             });

const properties = {
  duration: 5000000000000000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  arrows: true,
};

class CohortDetails extends Component {
  state = {
    cohorts: [],
  };
  componentDidMount = () => {
    axios
      .get("/api/cohortinfo")
      .then((result) => {
        console.log(result.data);
        const resultarray = result.data.map((e) => e);
        this.setState({
          cohorts: resultarray,
        });
      })
      .catch((error) => error);

    let projectsSlide = [];
    let studentsSlide = [];
    let mentorsSlide = [];
    for (let i = 0; i < allProjects.length; i += 3) {
      projectsSlide.push(
        <div className="one-slide" key={Date.now()}>
          {!allProjects[i] ? <div></div> : allProjects[i]}
          {!allProjects[i + 1] ? <div></div> : allProjects[i + 1]}
          {!allProjects[i + 2] ? <div></div> : allProjects[i + 2]}
        </div>
      );
    }
    for (let i = 0; i < allStudents.length; i += 3) {
      studentsSlide.push(
        <div className="one-slide" key={Date.now()}>
          <div className="student">{allStudents[i]}</div>
          <div className="student">{allStudents[i + 1]}</div>
          <div className="student">{allStudents[i + 2]}</div>
        </div>
      );
    }
    for (let i = 0; i < allMentors.length; i += 3) {
      mentorsSlide.push(
        <div className="one-slide" key={Date.now()}>
          <div className="mentor">{allMentors[i]}</div>
          <div className="mentor">{allMentors[i + 1]}</div>
          <div className="mentor">{allMentors[i + 2]}</div>
        </div>
      );
    }

    // this.setState((prevState) => ({
    //   projects: prevState.projects.concat(projectsSlide),
    //   students: prevState.students.concat(studentsSlide),
    //   mentors: prevState.mentors.concat(mentorsSlide),
    // }));
  };

  render() {
    const { cohorts } = this.state;
    return (
      <div>
        {!cohorts.length ? (
          <h1>Loading..</h1>
        ) : (
          <div>
            <h1>Cohort Name:{cohorts[0].cohort_name}</h1>
            <h1>Student Name:{cohorts[0].student_name}</h1>
            <h1>Project Name:{cohorts[0].project_name}</h1>
            <h1>Mentor Name:{cohorts[0].gsg_member}</h1>
          </div>
        )}
      </div>

      // <div>
      //   <div className="Cohort-description">
      //     <h1> About K3</h1>
      //     <h4>
      //       This cohort started from 20/20/2020 to 20/20/2020. It consists of 16
      //       students and 10 mentors. This cohort started from 20/20/2020 to
      //       20/20/2020. It consists of 16 students and 10 mentors. This cohort
      //       started from 20/20/2020 to 20/20/2020. It consists of 16 students
      //       and 10 mentors. This cohort started from 20/20/2020 to 20/20/2020.
      //       It consists of 16 students and 10 mentors. This cohort started from
      //       20/20/2020 to 20/20/2020. It consists of 16 students and 10 mentors.
      //     </h4>
      //   </div>
      //   <div className="slideshow-container">
      //     <h2>Cohort Projects</h2>
      //     <div className="projects-slide">
      //       <Slide {...properties}>{this.state.projects}</Slide>
      //     </div>
      //   </div>
      //   <div className="slideshow-container">
      //     <h2>Cohort Students</h2>
      //     <div className="students-slide">
      //       <Slide {...properties}>{this.state.students}</Slide>
      //     </div>
      //   </div>
      //   <div className="slideshow-container">
      //     <h2>Cohort Mentors</h2>
      //     <div className="mentor-slide">
      //       <Slide {...properties}>{this.state.mentors}</Slide>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default CohortDetails;
