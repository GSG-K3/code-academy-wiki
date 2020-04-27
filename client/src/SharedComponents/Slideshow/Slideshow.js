import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import ProjectView from '../ProjectView'
import StudentCard from '../StudentCard'
import "./Slideshow.css";


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

const properties = {
  duration: 5000000000000000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  arrows: true,
};

class Slideshow extends Component {
  state = {
    projects: [],
    students: []
  }
  componentDidMount = () => {
    let projectsSlide = [];
    let studentsSlide = [];
    for (let i = 0; i < allProjects.length; i += 3) {
      projectsSlide.push(<div className="one-slide" key={Date.now()}>
        {!allProjects[i]
          ? <div></div>
          : allProjects[i]
        }
        {!allProjects[i + 1]
          ? <div></div>
          : allProjects[i + 1]
        }
        {!allProjects[i + 2]
          ? <div></div>
          : allProjects[i + 2]

        }
      </div>)
    }
    for (let i = 0; i < allStudents.length; i += 3) {
      studentsSlide.push(<div className="one-slide" key={Date.now()}>
        <div className='student'>{allStudents[i]}</div>
        <div className='student'>{allStudents[i + 1]}</div>
        <div className='student'>{allStudents[i + 2]}</div>
      </div>)
    }

    this.setState(prevState => ({
      projects: prevState.projects.concat(projectsSlide),
      students: prevState.students.concat(studentsSlide)
    }))
  }

  render() {
    return (
      <div className="slideshow-container">
        <div className="projects-slide">
          <Slide {...properties}>
            {this.state.projects}
          </Slide>
        </div>
        <div className="students-slide">
          <Slide {...properties}>
            {this.state.students}
          </Slide>
        </div>
      </div>
    );
  }
}

export default Slideshow;
