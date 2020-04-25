import React, { Component } from "react";
import "./Slideshow.css";
import facebook from "../../images/facebook.jpeg";
import google from "../../images/google.png";
import website from "../../images/website.jpg";

import { Slide } from "react-slideshow-image";
const slideImages = [facebook, google, website, google, google, website];

const properties = {
  duration: 5000000000000000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  arrows: true,
};

class Slideshow extends Component {

state = {
  projects : []
}
componentDidMount = () => {
  let items = [];
  for (let i = 0; i < slideImages.length; i += 3) {
    items.push(<div key ={Date.now()}>
      <img className='website' src={slideImages[i]} alt =""/>
      <img className='website' src={slideImages[i+1]} alt =""/>
      <img className='website' src={slideImages[i+2]} alt =""/>
    </div>)
  }
  this.setState({projects: items})
}
 
  render() {

    return (
      <div className="slideshow">
        <Slide {...properties}>
          {this.state.projects}
        </Slide>
      </div>
    );
  }
}

export default Slideshow;
