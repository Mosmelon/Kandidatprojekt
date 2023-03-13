import React, {useEffect, useState, useRef, useTransition} from 'react';
import { NavLink, Link, useLocation} from 'react-router-dom';

import styled, {keyframes} from 'styled-components';
import {RiUserFill,RiUserLine, RiHomeHeartFill,RiHomeHeartLine, RiBarChart2Fill,RiBarChart2Line , RiMenuFill} from "react-icons/ri";

import Vector from '../Bilder/Vector.png';
import Dropdownmenu from './Dropdownmenu';
import "rsuite/dist/rsuite.min.css";
// import $ from "jquery";
// import { Button } from "rsuite";
const Container = styled.div`
width: auto;
height: auto;
`
const Bartop = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
flex-grow: 1;
overflow: hidden;
position: fixed;
top: 0;
width: 100%;
background: white;
padding:4vw 0 4vw 0;
box-shadow: 0px 4px 4px rgb(0 0 0 / 0.05);
`
const Barbottum = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
flex-grow: 1;
overflow: hidden;
position: fixed;
bottom: 0;
width: 100%;
background: white;
padding: 5vw;
box-shadow: 0px -4px 4px rgb(0 0 0 / 0.1);
`
const Logga = styled.img`
width: 30%;
height: 30%;
margin-left: 5vw;
`
const Text = styled.div`
background-color: #333333;

`

const darkgreen = "rgb(9, 42, 35)";
const lightgreen = "rgb(18,84,71)";



const TopMenu = () =>{
    const [isActive, setIsActive] = useState(false);

    //const location = useLocation();
   // console.log(location);
    //console.log(location.pathname)
    return(
 
        <Container>

            <Bartop>
                    <Link to='/Home'> 
                        <Logga src ={Vector} />
                    </Link>

                    <Link onClick={() => setIsActive(!isActive) }>
                    <RiMenuFill id = "UB" size = {45}style={{marginRight: 15}} color={darkgreen} />
                    
                    </Link>
                    {isActive ? <Dropdownmenu /> : null}
                </Bartop>
                
        </Container>

    )


}

const BottumMenu = () =>{

    const [isActive, setIsActive] = useState(false); // usestate för om knappen är aktiverad eller inte
    const location = useLocation(); //hämta vilken "sida" man är på
   // console.log(location.pathname) //pathname hämtar adressen

return(

 
    <Barbottum>

        <Link to='/Home' >
            {location.pathname == "/Home" ? 
                <RiHomeHeartFill onClick= {()=>{ setIsActive(!isActive)}}size={40}color={darkgreen} style={{marginLeft: 35}}/>
                : 
                <RiHomeHeartLine onClick={()=>{ setIsActive(!isActive)}}size={40}color={darkgreen}style={{marginLeft: 35}} />
            }
        </Link>
        <Link to='/Stat'> 
            {location.pathname == "/Stat" ? 
                <RiBarChart2Fill onClick= {()=>{ setIsActive(!isActive)}} size={40} color={darkgreen} />
                :
                <RiBarChart2Line onClick={()=>{ setIsActive(!isActive)}}size={40} color={darkgreen} />
            }
        </Link>

           
        <Link to='/Profile'> 
           {location.pathname == "/Profile" ? 
                <RiUserFill onClick= {()=>{ setIsActive(!isActive)}}size={40}color={darkgreen}style={{marginRight: 35}}/>
                :
                <RiUserLine onClick={()=>{ setIsActive(!isActive)}} size={40}color={darkgreen}style={{marginRight: 35}}/>
            }
            
        </Link> 
    </Barbottum>

)

}
export {TopMenu,BottumMenu};




