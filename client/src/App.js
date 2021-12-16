import react, { useState } from 'react';
import { Router } from '@reach/router';
// import Button from '@mui/material/Button';
import axios from 'axios';

import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';
import ProjectList from './components/ProjectList';
import SingleProject from './components/SingleProject';
import LogReg from './components/LogReg';
import AccountPage from './components/Account';
import UpdateAccount from './components/UpdateAccount';


import './App.css';

document.body.style.backgroundColor = "#1f1f1f";

function App() {

  axios.defaults.withCredentials = true;



  const [mobile,setMobile] = useState(false);
  const [mobileMenu,setMobileMenu] = useState(false);
  const showButton = () => {
    if (window.innerWidth <= 1100) {
        setMobile(true);
    } else {
        setMobile(false);
    }
  }

  window.addEventListener('resize',showButton);


  return (
      <div className="AppContainer">
        <main>
          <NavBar 
            mobile={mobile} 
            setMobile={setMobile} 
            mobileMenu={mobileMenu} 
            setMobileMenu={setMobileMenu}
          />
          <Router>
            <LandingPage path="/" 
              mobile={mobile} setMobile={setMobile}
            />
            <ProjectList path="/project"
              mobile={mobile} setMobile={setMobile}
            />
            <SingleProject path="/project/:id"
              mobile={mobile} setMobile={setMobile}/>
            <LogReg path="/loginRegister"
              mobile={mobile} setMobile={setMobile}
            />
            <AccountPage path="/MyAccount"
              mobile={mobile} setMobile={setMobile}
            />
            <UpdateAccount path="/MyAccount/Edit/:id" />
          </Router>
        </main>
      </div>
  );
}

export default App;
