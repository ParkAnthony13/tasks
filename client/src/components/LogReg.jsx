
import React, { useState } from 'react';
import {Link} from '@reach/router'
import '../css/LogReg.css';

const LogReg = props => {

    const [logName, setLogName] = useState('');
    const [logPass,setLogPass] = useState('');

    const [newName,setNewName] = useState('');
    const [newPass,setNewPass] = useState('');
    const [newConfPass,setNewConfPass] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    const {mobile,setMobile} = props;

    const changeHandler = e => {
        
    }


    return (
        <div className={mobile?"mobileLogRegContainer":"logRegContainer"}>
            <div className="logRegLeft logRegCol">
                <h1>Login</h1>
                <form className="logForm">
                    <div className="logregForm">
                        <label>User Name</label>
                        <input type="text" onChange={(e) => {setLogName(e.target.value)}}/>
                    </div>
                    <div className="logregForm">
                        <label>Password</label>
                        <input type="text" onChange={(e) => {setLogPass(e.target.value)}}/>
                    </div>
                </form>
            </div>
            <div className="logRegRight logRegCol">
                <h1>Register</h1>
                <form className="logForm">
                    <div className="logregForm">
                        <label>Set User Name</label>
                        <input type="text" onChange={(e) => {setNewName(e.target.value)}}/>
                    </div>
                    <div className="logregForm">
                        <label>Set Password</label>
                        <input type="text" onChange={(e) => {setNewPass(e.target.value)}}/>
                    </div>
                    <div className="logregForm">
                        <label>Confirm Password</label>
                        <input type="text" onChange={(e) => {setNewConfPass(e.target.value)}}/>
                    </div>
                    <div className="logregForm">
                        <label>First Name</label>
                        <input type="text" onChange={(e) => {setFirstName(e.target.value)}}/>
                    </div>
                    <div className="logregForm">
                        <label>Last Name</label>
                        <input type="text" onChange={(e) => {setLastName(e.target.value)}}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogReg;