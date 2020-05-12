import React from 'react';
import './App.css';
import Footer from './SharedComponents/Footer';
import NavBar from './SharedComponents/NavBar/NavBar';
import Home from './LayoutComponents/Home';
import Cohorts from './LayoutComponents/Cohorts';
import CohortDetails from './LayoutComponents/CohortDetails/CohortDetails';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ProjectDetails from './LayoutComponents/ProjectDetails';
import StudentProfile from './LayoutComponents/StudentProfile';
import AllStudents from './LayoutComponents/AllStudents';

const App = () => 
   (
    <Router>
    <React.Fragment>

      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/cohorts/:city' component={Cohorts} />
        <Route exact path='/students' component={AllStudents} />
        <Route exact path='/project/:id' component={ProjectDetails} />
        <Route exact path='/student/:id' component={StudentProfile} />
        <Route exact path='/cohortinfo/:cohortID' component={CohortDetails} />
      </Switch>
      <Footer />
    </React.Fragment>
    </Router>
    
  );
  
export default App;
