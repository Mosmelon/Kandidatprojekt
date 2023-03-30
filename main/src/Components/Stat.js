

//import '../App.css';
import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Home from "./Home";
import Menu from './Menu';
import Navbar from './Navbar';
import styled from 'styled-components';
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";


const Text = styled.h1`
text-size: 20vw;
`


const Stat=()=> {
    return (
        <div>
         <Graph2 style={{ marginTop: "20px", marginLeft: "10px" }} />
         <Graph3/>
        <Navbar />
      </div>
    );
  }
  
  export default Stat;