import React, { Component } from 'react';
import './ProjectDetails.css';
import github from '../../images/github.svg';
import pc from '../../images/pc.svg';
import ProjectView from '../../SharedComponents/ProjectView';
import StudentCard from '../../SharedComponents/StudentCard';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../SharedComponents/Loading';
import PageNotFound from '../PageNotFound';
class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      notFound: false,
    };
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    // id coming from cohorts and studentProfile pages
    axios
      .get(`/api/project/${params.id}`)
      .then((res) => {
        const resultArray = res.data;
        this.setState({
          projects: resultArray,
        });
      })
      .catch((error) => {
       if(error.response.status === 404) {
         this.setState({
          notFound: true
         });
        }
        else return error;
       });
      
  }
  render() {
    const { projects, notFound} = this.state;
    if (notFound){
   return<PageNotFound/> 
    }
    else {
    return (
      <div className='projectdetails-container'>
        {!projects.length ? (
          <Loading />
        ) : (
          <div>
            <section className='projects-details'>
              <div className='projects-info' key={projects.id}>
                <h2 className='project-title'>{projects[0].title}</h2>
                <p className='project-desc'>{projects[0].description}</p>
                <div className='icon-images'>
                  <div className='github-name'>
                    <a
                      href={projects[0].github}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img
                        className='github-img'
                        src={github}
                        alt='github icon'
                      />
                      GitHub
                    </a>
                  </div>
                  <div className='heroku-name'>
                    <a
                      href={projects[0].heroku}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <img className='pc-img' src={pc} alt='pc icon' />
                      LiveView
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <ProjectView
                  projectDetailsStyle={true}
                  projectImg={projects[0].image}
                />
              </div>
            </section>

            <section className='team-members'>
              <div className='title'> Team Members</div>
              <div className='students-info'>
                {/* get the student in the same project */}
                {projects.map((student) => {
                  return (
                    <Link
                      to={`/student/${student.student_id}`}
                      className='text-link'
                    >
                      <StudentCard
                        studentImg={student.student_image}
                        studentname={student.student_name}
                      />
                    </Link>
                  );
                })}
              </div>
            </section>
          </div>
        )}
      </div>
    );
  }
}
}
export default ProjectDetails;
