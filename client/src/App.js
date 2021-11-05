import react, { useState, useEffect } from 'react';
import { Link, Navigate, Router } from '@reach/router';
import Button from '@mui/material/Button';
import axios from 'axios';

import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import NavMobile from './components/NavMobile';
import SingleProject from './components/SingleProject';


import './App.css';

function App() {

  const [mobile,setMobile] = useState(false);
  const [mobileMenu,setMobileMenu] = useState(false);



  return (
    <div className="AppContainer">
      <NavBar 
        mobile={mobile} 
        setMobile={setMobile} 
        mobileMenu={mobileMenu} 
        setMobileMenu={setMobileMenu}
      />
      <Router>
        <LandingPage path="/" 
          mobile={mobile} 
          setMobile={setMobile}
        />
        <ProjectList path="/projects">
          <SingleProject path="/projects/1"/>
        </ProjectList>
        <NavMobile path="/test" />
      </Router>
    </div>
  );
}

export default App;
