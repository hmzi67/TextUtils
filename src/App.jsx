import React, { useState } from 'react'
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      ty: type,
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#212529"
      showAlert("Dark mode is enabled", "success")
      document.title = 'TextUtils - Dark Mode'
      // setInterval (()=>{
      // document.title = 'Dark Mode Enabled'
      // },2000)
      // setInterval (()=>{
      // document.title = 'TextUtils'
      // },1500)
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode is enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
    <Router>
      <NavBar title="TextUtils" About="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element= {<About  mode={mode}/>}  />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode} />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
