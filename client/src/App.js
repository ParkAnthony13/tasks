import react, { useState, useEffect } from 'react'
import { Link, Navigate, Router } from '@reach/router'
import Button from '@mui/material/Button';
import axios from 'axios';

import LandingPage from './components/LandingPage'
import NavBar from './components/NavBar'
import ProjectList from './components/ProjectList'


import './App.css';

function App() {
  return (
    <div className="AppContainer">
      <NavBar/>
      <Router>
        <LandingPage path="/"/>
        <ProjectList path="/projects"/>
      </Router>
    </div>
  );
}

export default App;
