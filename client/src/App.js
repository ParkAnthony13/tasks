import react, { useState } from 'react';
import { Router } from '@reach/router';
// import Button from '@mui/material/Button';
// import axios from 'axios';

import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import SingleProject from './components/SingleProject';


import './App.css';

document.body.style.backgroundColor = "#1f1f1f";

function App() {

  const [mobile,setMobile] = useState(false);
  const [mobileMenu,setMobileMenu] = useState(false);
  const showButton = () => {
    if (window.innerWidth <= 850) {
        setMobile(true);
    } else {
        setMobile(false);
    }
  }

  window.addEventListener('resize',showButton);


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
        <ProjectList path="/project"
          mobile={mobile} 
          setMobile={setMobile}
        />
        <SingleProject path="/project/:id"
          mobile={mobile} 
          setMobile={setMobile}/>
      </Router>
    </div>
  );
}

export default App;
