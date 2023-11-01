import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";


const App = () => (
  <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/detail-characters" element={<Detail />} />
      </Routes>
    </Router>
  </>
 
)

export default App
