
import './App.css';
import Navbar from './components/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
      
      <h1>This is iNotebook project</h1>
    </div>
  );
}

export default App;
