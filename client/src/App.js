import react, { useState, useEffect } from 'react'
import { Link, Navigate, Router } from '@reach/router'
import Button from '@mui/material/Button';
import axios from 'axios';

import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'


import './App.css';

function App() {
  return (
    <div>
      <NavBar/>
      <Router>
        <LandingPage path="/"/>
      </Router>
    </div>
  );
}

export default App;
