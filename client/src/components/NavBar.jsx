
import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import Button from '@mui/material/Button';
import axios from 'axios';
import '../css/NavBar.css';
import '../App.css';

const NavBar = props => {

    const [mobile,setMobile] = useState(false);
    const [mobileMenu,setMobileMenu] = useState(false);

    const showButton = () => {
        if (window.innerWidth <= 850) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }
    const showMobileMenu = () => {

    }
    const handleClick = e => {
        setMobileMenu(!mobileMenu);
        console.log(mobileMenu);
    }

    window.addEventListener('resize',showButton);


    return (
        <div className="webContainer">
            <div className="navBar">
                <div className="navBarLeft">
                    <img id="swordlogo" src="./imgs/swordlogo2.png" alt="swordlogo" height="45px" style={{marginTop:"15px"}}/>
                </div>
                {mobile
                ? <div>
                    <img id="mobileMenu"src="./imgs/three-bars-icon-small.jpg" alt="mobileMenu" height="40px"/>
                </div>
                : <div className="navBarRight">
                    <Link to="/" className="navBarRightItems">Home</Link>
                    <Link to="/projects" className="navBarRightItems">Projects</Link>
                    <Link to="/contact" className="navBarRightItems">Contact</Link>
                    <img id="mobileMenu"src="./imgs/three-bars-icon-small.jpg" alt="mobileMenu" height="40px" onClick={handleClick}/>
                </div>
                }
            </div>
        </div>
    )
}
export default NavBar;
