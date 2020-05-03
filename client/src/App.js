import React, { Component } from "react";
import "./App.css";
import Footer from "./SharedComponents/Footer";
import NavBar from "./SharedComponents/NavBar/NavBar";
import Home from "./LayoutComponents/Home";
import Cohorts from "./LayoutComponents/Cohorts";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cohorts/:city" component={Cohorts} />
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;
