
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
                    <img id="booklogo" src="./imgs/booklogo2.png" alt="booklogo" height="40px" style={{marginTop:"15px"}}/>
                </div>
                {mobile
                ? <div>
                    <img id="mobileMenu"src="./imgs/three-bars-icon-small.jpg" alt="mobileMenu" height="40px"/>
                </div>

                : <div className="navBarRight">
                    <h3 className="navBarRightItems">Home</h3>
                    <h3 className="navBarRightItems">Projects</h3>
                    <h3 className="navBarRightItems">Contact</h3>
                    <img id="mobileMenu"src="./imgs/three-bars-icon-small.jpg" alt="mobileMenu" height="40px" onClick={handleClick}/>
                </div>
                }
            </div>
        </div>
    )
}
export default NavBar;
