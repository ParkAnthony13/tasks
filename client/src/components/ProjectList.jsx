import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import Button from '@mui/material/Button';
import axios from 'axios';
import SingleProject from './SingleProject';
import '../css/ProjectList.css';

const ProjectList = props => {

    const {mobile,setMobile} = props;
    // const [mobile,setMobile] = useState(false);
    // const [mobileMenu,setMobileMenu] = useState(false);

    const showButton = () => {
        if (window.innerWidth <= 850) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    // window.addEventListener('resize',showButton);


    return (
        <div className="projectListContainer">
            <h1>Projects</h1>
            <hr style={{margin:'10px 0px'}}></hr>
            <div className="ProjectList">
                <Link to="/project/1" className="ProjectCard">
                    <h2 className="PCardItem PCHead">Project Name</h2>
                    <div className="PCardItem PCImg"></div>
                    <div className="PCardItem">
                        <p>Description</p>
                        <p>short description of the project</p>
                    </div>
                </Link>

                <Link to="/project/2" className="ProjectCard">
                    <h2 className="PCardItem PCHead">Project Name</h2>
                    <div className="PCardItem PCImg"></div>
                    <div className="PCardItem">
                        <p>Description</p>
                        <p>short description of the project</p>
                    </div>
                </Link>

                <Link to="/project/3" className="ProjectCard">
                    <h2 className="PCardItem PCHead">Project Name</h2>
                    <div className="PCardItem PCImg"></div>
                    <div className="PCardItem">
                        <p>Description</p>
                        <p>short description of the project</p>
                    </div>
                </Link>

                <Link to="/project/4" className="ProjectCard">
                    <h2 className="PCardItem PCHead">Project Name</h2>
                    <div className="PCardItem PCImg"></div>
                    <div className="PCardItem">
                        <p>Description</p>
                        <p>short description of the project</p>
                    </div>
                </Link>

                <Link to="/project/5" className="ProjectCard">
                    <h2 className="PCardItem PCHead">Project Name</h2>
                    <div className="PCardItem PCImg"></div>
                    <div className="PCardItem">
                        <p>Description</p>
                        <p>short description of the project</p>
                    </div>
                </Link>

                <Link to="/project/6" className="ProjectCard">
                    <h2 className="PCardItem PCHead">Project Name</h2>
                    <div className="PCardItem PCImg"></div>
                    <div className="PCardItem">
                        <p>Description</p>
                        <p>short description of the project</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default ProjectList;
