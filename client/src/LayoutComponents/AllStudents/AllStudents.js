import React, { Component } from 'react';
import searchIcon from '../../images/search.svg';
import axios from 'axios';
import StudentCard from '../../SharedComponents/StudentCard';
import './AllStudents.css';
import { Link } from 'react-router-dom';

class AllStudents extends Component {
  state = {
    searchfield: '',
    students: [],
  };

    componentDidMount() {
    axios
    .get(`/api/students`)
    .then((res) => {
      this.setState({
        students: res.data,
      });
    })
    .catch((err) => err);
  }

  // store the input of the search field
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    
    const { students, searchfield } = this.state;
    

    // compare the search field with student name
    
    const filterStudents = students.filter((student) => {
      return student.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase().trim());
    });

    // use the filtered students array to display students cards on screen
    const allStudents = filterStudents.map((student) => {
      return (
        <Link
          to={`/student/${student.id}`}
          key={student.id}
          className='student-card-container'
        >
          <StudentCard studentImg={student.image} studentname={student.name} />
        </Link>
      );
    });

    return (
      <div className='students-page-container'>
        <div className='search-section'>
          <img className='search-icon' src={searchIcon} alt='' />
          <input
            className='search-box'
            type='search'
            value={searchfield}
            placeholder='Search for a student...'
            onChange={this.onSearchChange}
          />
        </div>
        {!allStudents.length?<h1>loading</h1>: <div className='students-container'>{allStudents}</div>}
       
      </div>
    );
  }
}
export default AllStudents;
