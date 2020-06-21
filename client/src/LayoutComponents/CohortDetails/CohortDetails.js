import React, { Component } from 'react';
import Slideshow from '../../SharedComponents/Slideshow';
import cohortImg from '../../images/cohort.svg';
import './CohortDetails.css';
import axios from 'axios';
import Loading from '../../SharedComponents/Loading';
import PageNotFound from '../PageNotFound';
class CohortDetails extends Component {
  state = {
    cohortInfo: [],
    cohortstd: [],
    cohortMentor: [],
    cohortProjects: [],
    notFound: false,
  };

  componentDidMount = () => {
    const { cohortID } = this.props.match.params;
    const requestOne = axios.get(`/api/cohortinfo/${cohortID}`);
    const requestTwo = axios.get(`/api/cohortstd/${cohortID}`);
    const requestThree = axios.get(`/api/cohortMentor/${cohortID}`);
    const requestfour = axios.get(`/api/cohortProjects/${cohortID}`);

    axios
      .all([requestOne, requestTwo, requestThree, requestfour])
      .then(
        axios.spread((...responses) => {
          this.setState({
            cohortInfo: responses[0].data,
            cohortstd: responses[1].data,
            cohortMentor: responses[2].data,
            cohortProjects: responses[3].data,
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
  };

  render() {
    const {
      cohortInfo,
      cohortstd,
      cohortMentor,
      cohortProjects,
      notFound,
    } = this.state;
    if (notFound) {
      return <PageNotFound />;
    } else {
      return (
        <div>
          {!cohortInfo.length ? (
            <Loading />
          ) : (
            <div>
              <section className='cohort-section'>
                <img src={cohortImg} alt='cohort' />

                <div className='cohort-info'>
                  <h1 className='cohort-title'>{cohortInfo[0].cohort_name}</h1>
                  <p className='cohort-details'>
                    {cohortInfo[0].cohort_details}
                  </p>
                </div>
              </section>

              <div className='cohort-slide-section'>
                <h2 className='slide-cohort'> Cohort Projects</h2>
                <Slideshow projects={cohortProjects} />
              </div>
              <h2 className='slide-cohort'> Cohort Students</h2>
              <Slideshow students={cohortstd} />
              <div className='cohort-slide-section'>
                <h2 className='slide-cohort'> Cohort Mentors</h2>
                <Slideshow mentors={cohortMentor} />
              </div>
            </div>
          )}
        </div>
      );
    }
  }
}
export default CohortDetails;
