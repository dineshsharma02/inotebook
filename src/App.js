
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
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <NoteState>
    <div className="App">
    <Router>
      <div>
      <Navbar/>
      <Alert message="This is an alert"/>
        <Routes>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/signup" element={<Signup/>}></Route>
        </Routes>
      </div>
    </Router>
      
    </div>
    </NoteState>
  );
}

export default App;
