

//import '../App.css';
import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Home from "./Home";
import Menu from './Menu';
import Navbar from './Navbar';
import styled from 'styled-components';


const Text = styled.h1`
text-size: 20vw;
`


const Stat=()=> {
    return (

        <Navbar/>
   
    );
  }
  
  export default Stat;