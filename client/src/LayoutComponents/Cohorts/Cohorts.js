import React, { Component } from 'react';
import './Cohorts.css';
import CohortCard from '../../SharedComponents/CohortCard';
import Slideshow from '../../SharedComponents/Slideshow';
import axios from 'axios';

class Cohorts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohortInfo: [],
    };
  }
  componentDidMount() {
    const cityName = this.props.match.params.city;
    axios
      .get(`/api/cohorts/${cityName}`)
      .then((res) => {
        const resData = res.data;
        this.setState({ cohortInfo: resData });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const cityName = this.props.match.params.city;
    const { cohortInfo } = this.state;
        
    return (
      
      <div>
      {!cohortInfo.length? <h1>loading</h1>: 
      <div>
        <h1 className='title'>{cityName} Cohorts</h1>
          {cohortInfo.map((e) =>(
        <div className='cohort'>
          <div className='coh_card'>
            <CohortCard name={e.name} /> 
        </div>
          <Slideshow projects = {e.image} />
        </div>
          ))}
      </div> }
      </div>
    );
  }
}

export default Cohorts;
