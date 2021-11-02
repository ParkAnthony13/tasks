
import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import Button from '@mui/material/Button';
import axios from 'axios';
import '../css/LandingPage.css';


const LandingPage = props => {

    const handleClick = e => {
        console.log(window.innerWidth);
    }


    return (
        <div className="container">
            <div>
                <h1 className="imgText">Track Tasks</h1>
                <h1 className="imgText">Follow Your Progress</h1>
            </div>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}
export default LandingPage;