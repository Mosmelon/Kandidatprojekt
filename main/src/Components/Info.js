

import '../App.css';
import React, {useEffect, useState, useRef} from 'react';
import { Link } from 'react-router-dom';

function Info() {
    return (
      <div className="Info">
        <header className="Info-header">
        <h1>
            Information
          </h1>
          <p>
            Tja, här kan du få mera information. 
          </p>
        </header>
      </div>
    );
  }
  
  export default Info;