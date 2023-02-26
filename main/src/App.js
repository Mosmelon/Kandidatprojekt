

import Home from './Components/Home';
import Info from './Components/Info';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  


  return (
  
   
       <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Info" element={<Info/>}/>

          </Routes>
      </Router>
    
       

  );




}