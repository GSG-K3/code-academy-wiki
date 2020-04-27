import React from 'react';
import './App.css';
import Footer from './SharedComponents/Footer';
import NavBar from './SharedComponents/NavBar/NavBar';
import Home from './LayoutComponents/Home';
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}
export default App;
