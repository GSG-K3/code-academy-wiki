import React from 'react';
import './App.css';
import Footer from './SharedComponents/Footer';
import NavBar from './SharedComponents/NavBar/NavBar';
import Home from './LayoutComponents/Home';
import CohortDetails from './LayoutComponents/CohortDetails/CohortDetails';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import ProjectDetails from './LayoutComponents/ProjectDetails';
import StudentProfile from './LayoutComponents/StudentProfile';
import AllStudents from './LayoutComponents/AllStudents';
import pageNotFound from './LayoutComponents/pageNotFound';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/students' component={AllStudents} />
        <Route exact path='/project/:id' component={ProjectDetails} />
        <Route exact path='/student/:id' component={StudentProfile} />
        <Route exact path='/cohortinfo/:cohortID' component={CohortDetails} />
        <Route component={pageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
