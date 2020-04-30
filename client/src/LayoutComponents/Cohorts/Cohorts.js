import React, { Component } from "react";
import "./Cohorts.css";
import CohortCard from "../../SharedComponents/CohortCard";
import NavBar from "../../SharedComponents/NavBar";
import Slideshow from "../../SharedComponents/Slideshow";
import Footer from "../../SharedComponents/Footer";

class Cohorts extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Gaza Cohorts</h1>
        <div className="cohort">
          <div className="coh_card">
            <CohortCard />
          </div>
          <Slideshow />
        </div>
      </div>
    );
  }
}

export default Cohorts;
