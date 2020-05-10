import React, { Component } from 'react';
import StudentCard from '../StudentCard';
import Slider from 'react-slick';
import ProjectView from '../ProjectView';
import './Slideshow.css';

class Slideshow extends Component {
  render() {
    const { projects, students, mentors } = this.props;

    const projectSlide = projects.map((project) => {
      return <ProjectView projectImg={project.project_image} />;
    });
    const studentSlide = students.map((student) => {
      return (
        <StudentCard
          studentImg={student.student_image}
          studentname={student.student_name}
        />
      );
    });
    const mentorSlide = mentors.map((mentor) => {
      return (
        <StudentCard
          studentImg={mentor.mentor_image}
          studentname={mentor.mentor_name}
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
