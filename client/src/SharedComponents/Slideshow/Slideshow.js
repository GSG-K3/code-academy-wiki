import React, { Component } from 'react';
import StudentCard from '../StudentCard';
import Slider from 'react-slick';
import ProjectView from '../ProjectView';
import { Link } from 'react-router-dom';
import './Slideshow.css';

class Slideshow extends Component {
  render() {
    const { projects, students, mentors } = this.props;

    const projectSlide = projects.map((project) => {
      return (
        <Link to={`/project/${project.project_id}`} key={project.project_id}>
          <ProjectView
            key={project.project_id}
            projectImg={project.project_image}
          />
        </Link>
      );
    });

    const studentSlide = students.map((student) => {
      return (
        <Link
          className='student-card-container'
          to={`/student/${student.student_id}`}
          key={student.student_id}
        >
          <StudentCard
            key={student.student_id}
            studentImg={student.student_image}
            studentname={student.student_name}
          />
        </Link>
      );
    });

    const mentorSlide = mentors.map((mentor) => {
      return (
        <StudentCard
          key={mentor.id}
          studentImg={mentor.image}
          studentname={mentor.name}
          studentrole={mentor.type}
        />
      );
    });

    return (
      <div className='slide-container'>
        {!projectSlide.length && !studentSlide.length && !mentorSlide.length ? (
          <h1 className='loading'>Loading ....</h1>
        ) : (
          <Slider {...SlideSettings}>
            {projectSlide.length ? (
              projectSlide
            ) : studentSlide.length ? (
              studentSlide
            ) : mentorSlide.length ? (
              mentorSlide
            ) : (
              <h1>Something wrong happend...</h1>
            )}
          </Slider>
        )}
      </div>
    );
  }
}
export default Slideshow;

// create default props as an arrays to avoid mapping on null values
Slideshow.defaultProps = {
  projects: [],
  students: [],
  mentors: [],
};

// to give slideshow customs arrows
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'grey',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}

// slideshow settings that makes it responsive
const SlideSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};
