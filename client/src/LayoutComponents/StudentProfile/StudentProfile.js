import React, { Component } from "react";
import axios from "axios";
import email from '../../images/contact-icons/email.svg'
import github from '../../images/contact-icons/github.svg'
import phone from '../../images/contact-icons/phone.svg'
import house from '../../images/contact-icons/house.svg'
import Project from '../../SharedComponents/ProjectView'
import "./StudentProfile.css";


/*use query to get all student projects images then save them in an array, and display them using map*/
const dbProjects = ['', '', '']
const projects = dbProjects.map((project, i) => {
    return <Project key={i} projectImg={project} />
}
)
class StudentProfile extends Component {
    state = {
        studentInfo: null,
        studentProjects: []
    }
    componentDidMount() {
        const { id } = this.props;
        axios
            .get(`/api/students/${id}`)
            .then((res) => this.setState({ studentInfo: res.data[0] }))
            .catch((err) => console.log(err));
    }

    render() {
        const { studentInfo, studentProjects } = this.state;
        console.log(studentInfo)
        return (
            <div>
                {!studentInfo ? (<div style={{ marginTop: '200px' }}>Loading...</div>)
                    : (<div className='profile-container'>
                        <div className="student-card">
                            <div className='card-bg'></div>
                            <img className='student-img' src={studentInfo.img} alt='' />
                            <span className='student-name'>{studentInfo.name} </span>
                            <span className='student-role'> {studentInfo.about} </span>
                            <div className="contact-section">
                                <div className='contact-info'><img className='contact-icon' src={email} alt='' /><span>{studentInfo.email}</span></div>
                                <div className='contact-info'><img className='contact-icon' src={github} alt='' /><span>{studentInfo.github}</span></div>
                                <div className='contact-info'><img className='contact-icon' src={phone} alt='' /><span>{studentInfo.phone_no}</span></div>
                                <div className='contact-info'><img className='contact-icon' src={house} alt='' /><span>{studentInfo.address}</span></div>
                            </div>
                        </div>

                        <div className="student-projects">
                            <p className="projects-title">Student's Projects</p>
                            {projects}
                        </div>

                    </div>)

                }


            </div>);
    }
}
export default StudentProfile;
