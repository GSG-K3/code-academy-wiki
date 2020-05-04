import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import ProjectView from '../../SharedComponents/ProjectView'
import StudentCard from '../../SharedComponents/StudentCard'
import "./CohortDetails.css";
import axios from "axios";


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

        <div>
          <div className="Cohort-description">
            <h1> About K3</h1>
            <h4>
              This cohort started from 20/20/2020 to 20/20/2020. It consists of
              16 students and 10 mentors. This cohort started from 20/20/2020 to
              20/20/2020. It consists of 16 students and 10 mentors. This cohort
              started from 20/20/2020 to 20/20/2020. It consists of 16 students
              and 10 mentors. This cohort started from 20/20/2020 to 20/20/2020.
              It consists of 16 students and 10 mentors. This cohort started
              from 20/20/2020 to 20/20/2020. It consists of 16 students and 10
              mentors.
            </h4>
          </div>
          <div className="slideshow-container">
            <h2>Cohort Projects</h2>
            <div className="projects-slide">
              <Slide {...properties}>{this.state.projects}</Slide>
            </div>
          </div>
          <div className="slideshow-container">
            <h2>Cohort Students</h2>
            <div className="students-slide">
              <Slide {...properties}>{this.state.students}</Slide>
            </div>
          </div>
          <div className="slideshow-container">
            <h2>Cohort Mentors</h2>
            <div className="mentor-slide">
              <Slide {...properties}>{this.state.mentors}</Slide>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CohortDetails;
