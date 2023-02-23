import React, {useState} from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Gallery from "./components/Gallery";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="gray";
    }
    else{
    setMode('light');
    document.body.style.backgroundColor='white';
    }
  }
  return (
    <BrowserRouter>
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} aboutText="About TextUtils" />
      <div className="container my-4">
      <Routes>
        <Route path="/"   element={ <TextForm  uppercase="UPPERCASE" mode={mode}/> } />
        <Route path="/about"  element={ <About/> } />
        <Route path="/gallery" element={ <Gallery/> } />
      </Routes>
      </div>
    </BrowserRouter>  
  );
}

export default App;
