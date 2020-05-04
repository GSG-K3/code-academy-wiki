import React from 'react';
import './App.css';
import Footer from './SharedComponents/Footer';
import NavBar from './SharedComponents/NavBar/NavBar';
import Home from './LayoutComponents/Home';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ProjectDetails from './LayoutComponents/ProjectDetails/ProjectDetails';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/project/:id' component={ProjectDetails} />
      <Footer />
    </Router>
  );
}
export default App;
