import React, {useEffect, useState, useRef} from 'react';
import { NavLink, Link, useLocation} from 'react-router-dom';
import $ from "jquery";
import { Button } from "rsuite";
import styled, {keyframes} from 'styled-components';
import {RiUserFill,RiUserLine, RiHomeHeartFill,RiHomeHeartLine, RiBarChart2Fill,RiBarChart2Line , RiMenuFill} from "react-icons/ri";
import "rsuite/dist/rsuite.min.css";
import Vector from '../Bilder/Vector.png';

const Bar = styled.div`
font-size: 150%;
text-color: black;
height: 10vw;
padding: auto;
width: 100%;
`
const inAnimation = keyframes`

from {margin-top: 0;}
to {margin-top: 50%;}

`
const Container = styled.div`
background-color:rgb(9, 42, 35);
color: white;
width: 100%;
text-align: center;
margin-top: 50vw;
display: flex;
flex-direction: column;
position:fixed;
animation: ${inAnimation} 0.1s linear
`

const Dropdownmenu = () =>{


return(
    <Container>
            <Bar> Om Energi</Bar>
            <Bar> Hej på dig</Bar>
            <Bar> Om oss</Bar>
    </Container>

)

}
export default Dropdownmenu;