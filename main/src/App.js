

import Home from './Components/Home';
import Stat from './Components/Stat';
import Profile from './Components/Profile';
import Startpage from './Components/Startpage';
import Createaccount from './Components/Createaccount';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Hej


export default function App() {
  


  return (
  
   
       <Router>
          <Routes>
            <Route path="/" element={<Startpage/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Stat" element={<Stat/>}/>
            <Route path="/Profile" element={<Profile/>}/>
            <Route path="/Createaccount" element={<Createaccount/>}/>

          </Routes>
      </Router>
    
       

  );




}