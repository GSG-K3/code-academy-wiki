import React, { Component } from "react";
import Slideshow from "../../SharedComponents/Slideshow";
import cohortImg from "../../images/cohort.svg";
import "./CohortDetails.css";
import axios from "axios";


class CohortDetails extends Component {
  state = {
    cohortInfo: [],
  };
  componentDidMount = () => {
    axios
      .get(`/api/cohortinfo/${this.props.match.params.cohortID}`)
      .then((result) => {
        console.log(result.data);
        const resultarray = result.data;
        this.setState({
          cohortInfo: resultarray,
        });
      })
      .catch((error) => error);
  };

  render() {
             const { cohortInfo } = this.state;
             return (
               <div>
                 {!cohortInfo.length ? (
                   <h1>Loading..</h1>
                 ) : (
                   <div style={{ marginTop: "150px" }}>
                     <section>
                       <img src={cohortImg} alt="cohort" />

                       <div>
                         <h1>Cohort Name:{cohortInfo[0].cohort_name}</h1>
                         <p> details:{cohortInfo[0].cohort_details}</p>
                       </div>
                     </section>
                     <Slideshow projects={cohortInfo} />
                     <Slideshow students={cohortInfo} />
                     <Slideshow mentors={cohortInfo} />
                   </div>
                 )}
               </div>
             );
           }
}

export default CohortDetails;
