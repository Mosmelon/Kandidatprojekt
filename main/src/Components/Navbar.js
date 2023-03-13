
//import '../App.css';
import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import  {BottumMenu, TopMenu}from './Menu';



import styled from 'styled-components';


const Container = styled.div`
width: auto;
height: auto;

`




const Navbar= ()=> {
  return (

    <Container>

        <TopMenu/>
        <BottumMenu/> 

    </Container>

  

  );
}

export default Navbar;

/*
<div className="App">
<header className="App-header">
<h1>
    Förminska energiförbrukning
  </h1>
  <p>
    Mer information kommer, håll utkik!
  </p>
  <div className="links">
        <Link to="/Info">Information</Link>
    </div>
</header>

</div>
*/