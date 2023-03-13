
//import '../App.css';
import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import styled from "styled-components";


//import Menu from './Menu';

const Background = styled.div`
background: white;
min-height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
flex-grow: 1;
overflow: hidden;
padding: 20vw 0 4vw 0;
`
const Container = styled.div`
//margin-top: 30px;
height: 1500px; /* Used in this example to enable scrolling */
overflow:hidden;

`
const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
const Text = styled.h1`
text-size: 100vw;
color: black;
bottom: 50;
`
const Blockbig = styled.div`
margin: 0;
height: 20vw;
width: 90%;
background-color: white;
text-color: black;
border-radius: 1vw;
border: 1vw solid rgb(9, 42, 35);
//position: fixed; tillexempel
`
const Blocksmall = styled.div`
margin: 0 10vw 0 10vw;
height: 20vw;
width: 35vw;
background-color: white;
text-color: black;
border-radius: 1vw;
border: 1vw solid rgb(9, 42, 35);
`


const Home=()=> {
    return (
        
        <Container>

            <Navbar/>
            <Background>
               
                <Blockbig>Hejsan jag skapar ett kodskelett</Blockbig>

                <Row>
                    <Blocksmall>HejsanHejsan</Blocksmall>
                    <Blocksmall>hejhej</Blocksmall>
                </Row>



            </Background>

        </Container>
    );
  }
  
  export default Home;