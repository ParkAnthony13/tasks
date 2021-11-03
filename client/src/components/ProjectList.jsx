import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import Button from '@mui/material/Button';
import axios from 'axios';
import '../css/ProjectList.css';
import '../App.css';

const ProjectList = props => {

    const [mobile,setMobile] = useState(false);
    const [mobileMenu,setMobileMenu] = useState(false);

    const showButton = () => {
        if (window.innerWidth <= 850) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    const handleClick = e => {
        setMobileMenu(!mobileMenu);
        console.log(mobileMenu);
    }

    window.addEventListener('resize',showButton);


    return (
        <div className="projectListContainer">
            <h1>Projects</h1>
            <hr style={{margin:'10px 0px'}}></hr>
            <div>
                <div style={{padding:'20px',outline: '2px solid black',maxWidth:'160px'}}>
                    <h2 style={{maxWidth: '150px'}}>Project Name</h2>
                    <div style={{height: '100px', width: '100px', outline: '2px solid black', margin: '10px'}}></div>
                    <p>short description of the project</p>
                </div>
            </div>
        </div>
    )
}
export default ProjectList;
