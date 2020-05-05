import React from 'react';

import './App.css';
import Footer from './SharedComponents/Footer';
import NavBar from './SharedComponents/NavBar/NavBar';
import Home from './LayoutComponents/Home';
import { Route, BrowserRouter as Router , Switch } from 'react-router-dom';
import ProjectDetails from './LayoutComponents/ProjectDetails';
import StudentProfile from './LayoutComponents/StudentProfile';

function App() {
  return (
    
    <Router>
      {/* <NavBar /> */}
      {/* <ProjectDetails id={1}/> */}
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/project/:id' component={ProjectDetails} />
      <Route exact path='/student/:id' component={StudentProfile} />
      </Switch>
      <Footer />
      </Router>
  );
}
export default App;
