import React, { useEffect, useState } from 'react';
import {navigate, Router, Link} from '@reach/router'
import ButtonM from '../components/ButtonM';
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
            <div className='dflex spacebetween'>
                <h1>Projects</h1>
                <ButtonM text='New Project' navTo="/"/>
            </div>
            <hr className='ProjectPageLine'></hr>
            <main className="ProjectList">
                <section>
                    <div className="Proj">
                        <Link to="/project/1" className="">
                            <div className="PCardItem PCImg projTasksImg"></div>
                        </Link>
                        <div className='dflex spacebetween ProjCardCol'>
                            <div >
                                <h2 className="PCardItem PCHead">Project Name</h2>
                                <div className="PCardItem">
                                    <p>Description</p>
                                    <p>Task Manager project where users can create and manage tasks for multiple projects</p>
                                </div>
                            </div>
                            <div>
                                <ButtonM text='Edit' navTo='/'/>
                                <ButtonM text='Delete' navTo='/'/>
                            </div>
                        </div>
                    </div>
                    <div className='HLine'></div>
                </section>

                <section>
                    <div className="Proj">
                        <Link to="/project/1" className="">
                            <div className="PCardItem PCImg"></div>
                        </Link>
                        <div className='dflex spacebetween ProjCardCol'>
                            <div >
                                <h2 className="PCardItem PCHead">Project Name</h2>
                                <div className="PCardItem">
                                    <p>Description</p>
                                    <p>short description of the project</p>
                                </div>
                            </div>
                            <div>
                                <ButtonM text='Edit' navTo='/'/>
                                <ButtonM text='Delete' navTo='/'/>
                            </div>
                        </div>
                    </div>
                    <div className='HLine'></div>
                </section>

                <section>
                    <div className="Proj">
                        <Link to="/project/1" className="">
                            <div className="PCardItem PCImg"></div>
                        </Link>
                        <div className='dflex spacebetween ProjCardCol'>
                            <div >
                                <h2 className="PCardItem PCHead">Project Name</h2>
                                <div className="PCardItem">
                                    <p>Description</p>
                                    <p>short description of the project</p>
                                </div>
                            </div>
                            <div>
                                <ButtonM text='Edit' navTo='/'/>
                                <ButtonM text='Delete' navTo='/'/>
                            </div>
                        </div>
                    </div>
                    <div className='HLine'></div>
                </section>

                <section>
                    <div className="Proj">
                        <Link to="/project/1" className="">
                            <div className="PCardItem PCImg"></div>
                        </Link>
                        <div className='dflex spacebetween ProjCardCol'>
                            <div >
                                <h2 className="PCardItem PCHead">Project Name</h2>
                                <div className="PCardItem">
                                    <p>Description</p>
                                    <p>short description of the project</p>
                                </div>
                            </div>
                            <div>
                                <ButtonM text='Edit' navTo='/'/>
                                <ButtonM text='Delete' navTo='/'/>
                            </div>
                        </div>
                    </div>
                    <div className='HLine'></div>
                </section>

                <section>
                    <div className="Proj">
                        <Link to="/project/1" className="">
                            <div className="PCardItem PCImg"></div>
                        </Link>
                        <div className='dflex spacebetween ProjCardCol'>
                            <div >
                                <h2 className="PCardItem PCHead">Project Name</h2>
                                <div className="PCardItem">
                                    <p>Description</p>
                                    <p>short description of the project</p>
                                </div>
                            </div>
                            <div>
                                <ButtonM text='Edit' navTo='/'/>
                                <ButtonM text='Delete' navTo='/'/>
                            </div>
                        </div>
                    </div>
                    <div className='HLine'></div>
                </section>

                <section>
                    <div className="Proj">
                        <Link to="/project/1" className="">
                            <div className="PCardItem PCImg"></div>
                        </Link>
                        <div className='dflex spacebetween ProjCardCol'>
                            <div >
                                <h2 className="PCardItem PCHead">Project Name</h2>
                                <div className="PCardItem">
                                    <p>Description</p>
                                    <p>short description of the project</p>
                                </div>
                            </div>
                            <div>
                                <ButtonM text='Edit' navTo='/'/>
                                <ButtonM text='Delete' navTo='/'/>
                            </div>
                        </div>
                    </div>
                    <div className='HLine'></div>
                </section>

                <section>
                    <div className="Proj">
                        <Link to="/project/1" className="">
                            <div className="PCardItem PCImg"></div>
                        </Link>
                        <div className='dflex spacebetween ProjCardCol'>
                            <div >
                                <h2 className="PCardItem PCHead">Project Name</h2>
                                <div className="PCardItem">
                                    <p>Description</p>
                                    <p>short description of the project</p>
                                </div>
                            </div>
                            <div>
                                <ButtonM text='Edit' navTo='/'/>
                                <ButtonM text='Delete' navTo='/'/>
                            </div>
                        </div>
                    </div>
                    <div className='HLine'></div>
                </section>
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
            </main>
        </div>
    )
}
export default ProjectList;
