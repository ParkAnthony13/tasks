
import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import Button from '@mui/material/Button';
import axios from 'axios';
import '../css/NavBar.css';
import '../App.css';

const NavBar = props => {

    const [mobile,setMobile] = useState(false);
    


    return (
        <div className="webContainer">
            <div className="navBar">
                <div className="navBarLeft">
                    <img id="booklogo" src="./imgs/booklogo2.png" alt="booklogo" height="40px" style={{marginTop:"15px"}}/>
                </div>
                {mobile
                ? <div>

                </div>

                : <div className="navBarRight">
                    <h3 className="navBarRightItems">Home</h3>
                    <h3 className="navBarRightItems">Projects</h3>
                    <h3 className="navBarRightItems">Contact</h3>
                </div>
                }
            </div>
        </div>
    )
}
export default NavBar;
