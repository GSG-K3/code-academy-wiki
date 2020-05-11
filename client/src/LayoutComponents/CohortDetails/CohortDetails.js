import React, { Component } from 'react';
import Slideshow from '../../SharedComponents/Slideshow';
import cohortImg from '../../images/cohort.svg';
import './CohortDetails.css';
import axios from 'axios';

class CohortDetails extends Component {
  state = {
    cohortInfo: [],
    cohortstd: [],
    cohortMentor: [],
  };
  componentDidMount = () => {
    const requestOne = axios.get(
      `/api/cohortinfo/${this.props.match.params.cohortID}`
    );
    const requestTwo = axios.get(
      `/api/cohortstd/${this.props.match.params.cohortID}`
    );
    const requestThree = axios.get(
      `/api/cohortMentor/${this.props.match.params.cohortID}`
    );

    axios
      .all([requestOne, requestTwo, requestThree])
      .then(
        axios.spread((...responses) => {
          this.setState({
            cohortInfo: responses[0].data,
            cohortstd: responses[1].data,
            cohortMentor: responses[2].data,
          });
        })
      )
      .catch((err) => err);
    console.log(this.state.cohortMentor);
  };

  render() {
    const { cohortInfo, cohortstd, cohortMentor } = this.state;
    return (
      <div>
        {!cohortInfo.length ? (
          <h1>Loading..</h1>
        ) : (
          <div>
            <section className='cohort-section'>
              <img src={cohortImg} alt='cohort' />

              <div className='cohort-info'>
                <h1 className='cohort-title'>{cohortInfo[0].cohort_name}</h1>
                <p className='cohort-details'>{cohortInfo[0].cohort_details}</p>
              </div>
            </section>
            <Slideshow projects={cohortInfo} />
            <Slideshow students={cohortstd} />
            <Slideshow mentors={cohortMentor} />
          </div>
        )}
      </div>
    );
  }
}

export default CohortDetails;
