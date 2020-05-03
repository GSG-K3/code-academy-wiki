import React, { Component } from "react";
import "./Cohorts.css";
import CohortCard from "../../SharedComponents/CohortCard";
import Slideshow from "../../SharedComponents/Slideshow";
import axios from "axios";

class Cohorts extends Component {
  componentDidMount() {
    const cityName = this.props.match.params.city;
    axios
      .get(`/cohorts/${cityName}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const cityName = this.props.match.params.city;
    // console.log(
    //   this.props.history.location.state.data,
    //   "this is cohorts page test "
    // );

    return (
      <div>
        <h1 className="title">{cityName} Cohorts</h1>
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
