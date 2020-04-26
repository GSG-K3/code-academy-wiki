import React from "react";
import "./App.css";
import Footer from "./SharedComponent/Footer/Footer"
import StudentCard from "./SharedComponent/StudentCard/StudentCard";
import ProjectView from "./SharedComponent/ProjectView/ProjectView";
function App() {
  return <div>
    <StudentCard/>
    <Footer/>
    <ProjectView/>
  </div>
 
}

export default App;
