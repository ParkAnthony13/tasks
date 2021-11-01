
import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import Button from '@mui/material/Button';
import axios from 'axios';
import '../css/NavBar.css';
import '../App.css';

const NavBar = props => {

    


    return (
        <div className="navBar">
            <div className="navBarLeft"></div>
            <div className="navBarCenter"></div>
            <div className="navBarRight"></div>
        </div>
    )
}
export default NavBar;
