import React, { Component } from 'react';
import './Cohorts.css';
import CohortCard from '../../SharedComponents/CohortCard';
import Slideshow from '../../SharedComponents/Slideshow';
import axios from 'axios';
import Loading from '../../SharedComponents/Loading';
import PageNotFound from '../PageNotFound';

class Cohorts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cohortInfo: [],
      cohortsProjects: [],
      notFound: false,
    };
  }
  componentDidMount() {
    const cityName = this.props.match.params.city;

    const requestOne = axios.get(`/api/cohorts/${cityName}`);
    const requestTwo = axios.get(`/api/cohorts/projects/${cityName}`);

    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          this.setState({
            cohortInfo: responses[0].data.reverse(),
            cohortsProjects: responses[1].data,
          });
        })
      )
      .catch((error) => {
        if (error.response.status === 404) {
          this.setState({
            notFound: true,
          });
        } else return error;
      });
  }

  render() {
    const cityName = this.props.match.params.city;
    const { cohortInfo, cohortsProjects, notFound } = this.state;

    const cohortList = cohortInfo.map((cohort) => {
      const projectsSlide = cohortsProjects.filter((project) => {
        return project.cohort_id === cohort.cohort_id;
      });

      return (
        <div className='cohort'>
          <div className='coh_card'>
            <CohortCard id={cohort.cohort_id} name={cohort.cohort_name} />
          </div>
          <div className='coh_slide_show'>
            <Slideshow projects={projectsSlide} />
          </div>
        </div>
      );
    });
    if (notFound) {
      return <PageNotFound />;
    } else {
      return (
        <div>
          {!cohortInfo.length ? (
            <Loading />
          ) : (
            <div>
              <h1 className='city_title'>{`${cityName} cohorts`}</h1>
              <div>{cohortList}</div>
            </div>
          )}
        </div>
      );
    }
  }
}

export default Cohorts;
