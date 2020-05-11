import React from 'react';

import './App.css';
import Footer from './SharedComponents/Footer';
import NavBar from './SharedComponents/NavBar/NavBar';
import Home from './LayoutComponents/Home';
import CohortDetails from './LayoutComponents/CohortDetails/CohortDetails';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ProjectDetails from './LayoutComponents/ProjectDetails';
import StudentProfile from './LayoutComponents/StudentProfile';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/project/:id' component={ProjectDetails} />
        <Route exact path='/student/:id' component={StudentProfile} />
        <Route exact path='/cohortinfo/:cohortID' component={CohortDetails} />
        <Route exact path='/cohortMentor/:cohortID' component={CohortDetails} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
