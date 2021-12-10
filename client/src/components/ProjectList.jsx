import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import '../css/ProjectList.css';
import axios from 'axios';

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
    const deleteProject = (name) => {
        axios.delete(`http://localhost:3001/api/test/delete/${name}`)
    }

    const [movieList,setMovieList] = useState([]);
    // window.addEventListener('resize',showButton);
    useEffect( () => {
        axios.get('http://localhost:3001/api/projects')
            .then((response) => {
                console.log(response);
                setMovieList(response.data);
            })
    },[])

    return (
        <div className="projectListContainer">
            <h1>Projects</h1>
            <hr style={{margin:'10px 0px'}}></hr>
            <div className="ProjectList">
                <div>
                    <Link to="/project/1" className="ProjectCard">
                        <div className="PCardItem PCImg"></div>
                    </Link>
                    <div>
                        <h2 className="PCardItem PCHead">Project Name</h2>
                        <div className="PCardItem">
                            <p>Description</p>
                            <p>short description of the project</p>
                        </div>
                    </div>
                </div>

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

                {movieList.map((movie,idx) => {
                    return(
                    <div key={idx}>
                        <Link to={`/project/${movie.id}/${idx}`} className="ProjectCard">
                            <h2 className="PCardItem PCHead">{`${movie.movieName}`}</h2>
                            <div className="PCardItem PCImg"></div>
                            <div className="PCardItem">
                                <p>Description</p>
                                <p>{`${movie.movieReview}`}</p>
                            </div>
                        </Link>
                        <button onClick={() => deleteProject(movie.movieName)}>Delete</button>
                    </div>)
                })}
            </div>
        </div>
    )
}
export default ProjectList;
