import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import Button from '@mui/material/Button';
import axios from 'axios';
import '../css/NavMobile.css';

const NavMobile = props => {




    return (
        <div className="outer">
            <h1>Left to Right</h1> &nbsp;
            <div class="outer__button button__left-right">
                <div class="text">Button</div>
            </div>&nbsp;
        </div>
    )
}

export default NavMobile;