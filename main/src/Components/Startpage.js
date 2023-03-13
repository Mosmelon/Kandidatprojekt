//import '../App.css';
import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import styled from "styled-components";
import Menu from './Menu';
import Vector from '../Bilder/Vector.png';


const Background = styled.div`
background: white
width: auto;
height: auto;
`
const Logga = styled.img`
margin-top: 10vw;
width: 30%;
height: 30%;
display: block;
margin-left: auto;
margin-right: auto;
`
const Text = styled.h1`
top: 0;
font-size: 15vw;
font-family: 'Oswald',sans-serif;
color: rgb(9, 42, 35);
display: flex;
justify-content: center;
align-items: center;
align-items: flex-end;
`
const Login = styled.div`
display: block;
justify-content: center;
align-items: center;
align-items: flex-end;
margin: 10px 0px 10px 0px;
background-color: rgb(9, 42, 35);
opacity: 1;
border-radius: 2vw;
width: 70%;
`
const Textp = styled.h1`
text-size: 10vw;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
const Block = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
flex-grow: 1;
overflow: hidden;
bottom: 0;
width: 100%;
height: 40%;
`
const lightgreen = "rgb(18,84,71)";
const darkgreen = "rgb(9, 42, 35)";

const Startpage=()=> {
    return (

    <Background>

    <Logga src ={Vector} />
        <Text>
            EnergyEyes
          </Text>
   
           
        
        <Block>
            
            <Login>
                    <Link to='/Home'> 
                        <Textp>Logga in</Textp>
                    </Link>
             </Login>
                <Login>
                    <Link to='/Createaccount'> 
                        <Textp>Skapa konto</Textp>
                    </Link>
            </Login>

          </Block>

      </Background>
    );
  }
  
  export default Startpage;