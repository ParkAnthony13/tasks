
import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import Button from '@mui/material/Button';
import axios from 'axios';
import '../css/NavBar.css';

const NavBar = props => {
    const {mobile,setMobile} = props;
    const {mobileMenu,setMobileMenu} = props;
    // const [mobile,setMobile] = useState(false);
    // const [mobileMenu,setMobileMenu] = useState(false);

    const showButton = () => {
        if (window.innerWidth <= 850) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }
    const mobileMenuLink = () => {
        setMobileMenu(false);
        setMobile(true);
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
                    <img onClick={handleClick} id="mobileMenu"src={mobileMenu ?"./imgs/x.png": "./imgs/three-bars-icon-small.jpg"} alt="mobileMenu" height="40px"/>
                </div>
                : <div className="navBarRight">
                    <Link to="/" className="navBarRightItems">Home</Link>
                    <Link to="/projects" className="navBarRightItems">Projects</Link>
                    <Link to="/contact" className="navBarRightItems">Contact</Link>
                </div>
                }
            </div>
            <div className={mobileMenu ? "NavMobileTrue outer" : "NavMobileFalse"}>
                <Link to="/" onClick={mobileMenuLink} className="NavMobOuterBtn BtnLeftRight">
                    <p className="NavMobBtn">Home</p>
                </Link>
                <hr />
                <Link to="/projects" onClick={mobileMenuLink} className="NavMobOuterBtn BtnLeftRight">
                    <p className="NavMobBtn">Projects</p>
                </Link>
                <hr />
                <Link to="/contact" onClick={mobileMenuLink} className="NavMobOuterBtn BtnLeftRight">
                    <p className="NavMobBtn">Contact</p>
                </Link>
            </div>
        </div>
    )
}
export default NavBar;
