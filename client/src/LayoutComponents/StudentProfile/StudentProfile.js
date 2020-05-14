import React, { Component } from 'react';
import axios from 'axios';
import email from '../../images/contact-icons/email.svg';
import github from '../../images/contact-icons/github.svg';
import phone from '../../images/contact-icons/phone.svg';
import house from '../../images/contact-icons/house.svg';
import Project from '../../SharedComponents/ProjectView';
import { Link } from 'react-router-dom';
import './StudentProfile.css';
import Loading from '../../SharedComponents/Loading';

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
          <Loading />
          ) : (
          <div className='profile-container'>
            <div className='student-card'>
              {studentInfo.image ? (
                <img className='student-img' src={studentInfo.image} alt='' />
              ) : (
                <div className='student-img'>{studentInfo.name.charAt(0)}</div>
              )}

              <span className='student-card-name'>{studentInfo.name} </span>
              <span className='student-role'> {studentInfo.role} </span>
              <div className='contact-section'>
                <div className='contact-info'>
                  <img className='contact-icon' src={email} alt='' />
                  <span>{studentInfo.email}</span>
                </div>
                <div className='contact-info'>
                  <img className='contact-icon' src={github} alt='' />
                  <span>
                    <a
                      href={studentInfo.github}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {studentInfo.name} github
                    </a>
                  </span>
                </div>
                <div className='contact-info'>
                  <img className='contact-icon' src={phone} alt='' />
                  <span>{studentInfo.phone_no}</span>
                </div>
                <div className='contact-info'>
                  <img className='contact-icon' src={house} alt='' />
                  <span>{studentInfo.address}</span>
                </div>
              </div>
            </div>
            <div className='student-projects-container'>
              <p className='projects-title'>{studentInfo.name} Projects</p>
            <div className='student-projects'> {projects}</div> 
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default StudentProfile;
