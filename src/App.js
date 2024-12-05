import React from "react";
import './index.css';
import Home from "./routes/Home";
import Contacts from "./routes/Contacts";
import About from "./routes/About";
import Pro from "./routes/Pro";


import { Route, Routes } from "react-router-dom";

function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/projects" element={<Pro/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contacts" element={<Contacts/>}/>
  </Routes>
  </>
  );
}

export default App;
