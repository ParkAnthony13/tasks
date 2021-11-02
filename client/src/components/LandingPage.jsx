
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
            <h1>LandPage</h1>
            <button onClick={handleClick}>Test</button>
        </div>
    )
}
export default LandingPage;