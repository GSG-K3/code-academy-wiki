import React, { Component } from "react";
import "./Slideshow.css";
import facebook from "../../images/facebook.jpeg";
import google from "../../images/google.png";
import website from "../../images/website.jpg";
import { Slide } from "react-slideshow-image";
const allProjects = [facebook, website, "", google, google, facebook, google, website];
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
  }
  componentDidMount = () => {
    let projectsSlide = [];
    for (let i = 0; i < allProjects.length; i += 3) {
      projectsSlide.push(<div className="one-slide" key={Date.now()}>
        {!allProjects[i]
          ? <div></div>
          : <img className='website' src={allProjects[i]} alt="" />
        }
        {!allProjects[i + 1]
          ? <div></div>
          : <img className='website' src={allProjects[i + 1]} alt="" />
        }
        {!allProjects[i + 2]
          ? <div></div>
          : <img className='website' src={allProjects[i + 2]} alt="" />
        }

      </div>)
    }
    this.setState(prevState => ({
      projects: prevState.projects.concat(projectsSlide)
    }))
  }

  render() {
    return (
      <div>
        <div className="projects-slide">
          <Slide {...properties}>
            {this.state.projects}
          </Slide>
        </div>
      </div>
    );
  }
}

export default Slideshow;
