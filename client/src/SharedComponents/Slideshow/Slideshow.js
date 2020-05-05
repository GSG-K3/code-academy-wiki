import React, { Component } from "react";
import StudentCard from '../StudentCard'
import "./Slideshow.css";
import Slider from "react-slick";
import ProjectView from '../ProjectView'


class Slideshow extends Component {
  state = {
    projectSlide: [],
    studentSlide: [],
  }

  componentDidMount() {
    const { projects, students } = this.props;

    if (projects) {
      const projectSlide = projects.map(project => {
        return <ProjectView
          projectImg={project.image}
        />
      })
      this.setState({ projectSlide })

    }
    if (students) {
      const studentSlide = students.map(student => {
        return <StudentCard
          studentImg={student.img}
          studentname={student.name} />
      })
      this.setState({ studentSlide })

    }
  }

  render() {
    const { projectSlide, studentSlide } = this.state;
    return (
      <div className='slide-container'>
        {!projectSlide.length && !studentSlide.length
          ? <h1>Loading ....</h1>
          : <Slider {...SlideSettings()}>   {projectSlide.length ? projectSlide : studentSlide}   </Slider>

        }
      </div>
    )
  }
}
export default Slideshow;
function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SlideSettings() {
  const settings = {
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
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      }
    ]
  };
  return settings;
}

