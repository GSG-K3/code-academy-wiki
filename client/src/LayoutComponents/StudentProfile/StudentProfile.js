import React, { Component } from 'react';
import axios from 'axios';
import email from '../../images/contact-icons/email.svg';
import github from '../../images/contact-icons/github.svg';
import phone from '../../images/contact-icons/phone.svg';
import house from '../../images/contact-icons/house.svg';
import Project from '../../SharedComponents/ProjectView';
import { Link } from 'react-router-dom';
import './StudentProfile.css';

class StudentProfile extends Component {
  state = {
    studentInfo: null,
    studentProjects: [],
  };
  componentDidMount() {
    // student information will be fetch from database based on student id that passed to this component as a props
    const {
      match: { params },
    } = this.props;

    axios
      .get(`/api/students/${params.id}`)
      .then((res) => {
        this.setState({
          studentInfo: res.data[0],
          studentProjects: res.data,
        });
      })
      .catch((err) => err);
  }

  render() {
    const { studentInfo, studentProjects } = this.state;
    const projects = studentProjects.map((project) => {
      return (
        <Link to={`/project/${project.project_id}`} key={project.project_id}>
          <Project
            key={project.project_id}
            projectImg={project.project_image}
          />
        </Link>
      );
    });
    return (
      <div>
        {!studentInfo ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div className='profile-container'>
            <div className='student-card'>
              <img className='student-img' src={studentInfo.img} alt='' />
              <span className='student-card-name'>{studentInfo.name} </span>
              <span className='student-role'> {studentInfo.about} </span>
              <div className='contact-section'>
                <div className='contact-info'>
                  <img className='contact-icon' src={email} alt='' />
                  <span>{studentInfo.email}</span>
                </div>
                <div className='contact-info'>
                  <img className='contact-icon' src={github} alt='' />
                  <span>{studentInfo.github}</span>
                </div>
                <div className='contact-info'>
                  <img className='contact-icon' src={phone} alt='' />
                  <span>{studentInfo.phone_no}</span>
                </div>
                <div className='contact-info'>
                  <img className='contact-icon' src={house} alt='' />
                  <span>{studentInfo.adress}</span>
                </div>
              </div>
            </div>
            <div className='student-projects'>
              <p className='projects-title'>{studentInfo.name} Projects</p>
              {projects}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default StudentProfile;
