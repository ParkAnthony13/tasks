
import react, { useState, useEffect } from 'react';
import { navigate } from '@reach/router'
import '../css/LogReg.css';
import axios from 'axios';
import GlobalState from '../contexts/GlobalState';

const LogReg = props => {

    const [movieName, setMovieName] = useState('');
    const [review, setReview] = useState('');

    const [logName, setLogName] = useState('');
    const [logPass, setLogPass] = useState('');
    const [logError, setLogError] = useState({})

    const [newName, setNewName] = useState('');
    const [newPass, setNewPass] = useState('');
    const [newConfPass, setNewConfPass] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const [loginStatus, setLoginStatus] = useState("");

    const { mobile, setMobile } = props;

    const logInHandler = e => {
        e.preventDefault()
        axios.post("http://localhost:3001/api/login", {
            logName: logName,
            logPass: logPass
        }).then((response) => {
            if (!response.data.message) {
                setLoginStatus(response.data[0].username);
                console.log(response.data[0].username) // success?
                console.log("success")
            } else {
                console.log(response.data);
                setLoginStatus(response.data.message) // incorrect message?
                console.log("incorrect")
            }
        })
    }

    const regHandler = e => {
        axios.post("http://localhost:3001/api/accounts", {
            username: newName,
            password: newPass,
            firstName: firstName,
            lastName: lastName
        }).then(() => {
            console.log("registered!")
            navigate('/')
        }).catch((error) => {
            console.log("failed Reg")
            console.log(error)
        })
    }

    useEffect(() => {
        axios.get("http://localhost:3001/api/login").then((response) => {
            console.log(response);
            if (response.data.loggedIn == true) {
                setLoginStatus(response.data.user[0].username)
            }
        })
    }, [])
    return (
        <div className={mobile ? "mobileLogRegContainer" : "logRegContainer"}>
            <div className="logRegLeft logRegCol">
                <h1>Login</h1>
                <form className="logForm">
                    <div className="logregForm">
                        <label>User Name</label>
                        <input type="text" onChange={(e) => {
                            setLogName(e.target.value)
                        }} />
                    </div>
                    <div className="logregForm">
                        <label>Password</label>
                        <input type="text" onChange={(e) => {
                            setLogPass(e.target.value)
                        }} />
                    </div>
                    <button id="logInButtonM" onClick={logInHandler}>Log In</button>
                </form>
                <div>{loginStatus}</div>
            </div>
            <div className="logRegRight logRegCol">
                <h1>Register</h1>
                <form className="logForm">
                    <div className="logregForm">
                        <label>Set User Name</label>
                        <input type="text" onChange={(e) => { setNewName(e.target.value) }} />
                    </div>
                    <div className="logregForm">
                        <label>Set Password</label>
                        <input type="text" onChange={(e) => { setNewPass(e.target.value) }} />
                    </div>
                    <div className="logregForm">
                        <label>Confirm Password</label>
                        <input type="text" onChange={(e) => { setNewConfPass(e.target.value) }} />
                    </div>
                    <div className="logregForm">
                        <label>First Name</label>
                        <input type="text" onChange={(e) => { setFirstName(e.target.value) }} />
                    </div>
                    <div className="logregForm">
                        <label>Last Name</label>
                        <input type="text" onChange={(e) => { setLastName(e.target.value) }} />
                    </div>
                    <button id="signUpButtonM" onClick={regHandler}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default LogReg;