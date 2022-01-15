
import './App.css';
import Navbar from './components/Navbar';
import React,{useContext,useState} from "react";
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
// import alertContext from './context/notes/alertContext';

function App() {
  // const context = useContext(alertContext)
  // const alert = context

  const [mode, setmode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type) =>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(() => {
      setAlert(null)
    }, 1700);
  }

  return (
    
    
    <NoteState showAlert={showAlert}>
    <div className="App">
    <Router>
      <div>
      <Navbar/>
      <Alert alert={alert}/>
        <Routes>
          <Route exact path="/about" element={<About showAlert={showAlert}/>}></Route>
          <Route exact path="/" element={<Home showAlert={showAlert}/>}></Route>
          <Route exact path="/login" element={<Login showAlert={showAlert}/>}></Route>
          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}></Route>
        </Routes>
      </div>
    </Router>
      
    </div>
    </NoteState>
  );
}

export default App;
