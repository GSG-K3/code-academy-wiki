import React from 'react';
import './App.css';
import Footer from './SharedComponents/Footer';
import NavBar from './SharedComponents/NavBar/NavBar';
import Home from './LayoutComponents/Home';
import StudentProfile from './LayoutComponents/StudentProfile';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path='/' component={Home} />
      <Route exact path='/student/:id' component={StudentProfile} />
      <Footer />
    </Router>
  );
}
export default App;
