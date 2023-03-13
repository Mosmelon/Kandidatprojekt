//import '../App.css';
import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Home from "./Home";
import Navbar from './Navbar';
import styled from 'styled-components';
import {RiSettings5Fill} from "react-icons/ri";


const Background = styled.div`
background: rgb(9, 42, 35);
min-height: 50vh;
display: flex;

flex-grow: 1;
overflow: hidden;
padding: 20vw 0 4vw 0;
`
const Container = styled.div`
//margin-top: 30px;
height: 1500px; /* Used in this example to enable scrolling */
overflow:hidden;

`
const Circle = styled.div`
position: fixed;
margin-left: 5vw;
margin-top: 5vw;
height: 80px;
width: 80px;
background-color: white;
text-color: black;
border-radius: 50%;
border: 1vw solid rgb(9, 42, 35);
`

const Profil = styled.div`
position: fixed;
margin-top: 10vw;
height: 50vw;
width: 100%;
background-color: white;
text-color: black;
border-radius: 1vw;
border: 1vw solid rgb(9, 42, 35);
`
const Block = styled.div`
font-size: 10vw;
margin-top: 150vw;
height: 20vw;
width: 100%;
background-color: rgb(9, 42, 35);
font-color: black;
border-radius: 1vw;
border: 1vw solid white;

`
const Text = styled.p`
font-size: 5vw;
color: rgb(9, 42, 35)
position: fixed;
margin-left: 30vw;
margin-top: 10vw;
font-weight: bold;
`
const Textp = styled.p`
font-size: 10vw;
color: white;
display: flex;
justify-content: center;
align-items: center;
`
const darkgreen = "rgb(9, 42, 35)";
const Profile =() =>{
    return (

        <Container>
            <Background>
                <Profil> 
                    
                    <Circle/>
                    <Text>Förnamn Efternamn <RiSettings5Fill color={darkgreen}/></Text>
                    
                
                </Profil>
                <Block>
                <Link to ="/">
                    <Textp>
                        Logga ut
                    </Textp>
                </Link>
                </Block>
                
               

                
            </Background>
            <Navbar/>
        

         </Container>
    );
  }
  
  export default Profile;