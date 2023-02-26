
import '../App.css';
import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
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
  );
}

