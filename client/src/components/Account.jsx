import react, {useEffect, useState } from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'
import '../css/Account.css';

const AccountPage = props => {



    const [userList, setUserList] = useState([]);

    const deleteHandler = (userId) => {
        axios.delete(`http://localhost:3001/api/accounts/delete/${userId}`)
            .then((response) => {
                console.log("deletd account");
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    const updateHandler = (userId) => {
        navigate(`/MyAccount/Edit/${userId}`)
    }

    useEffect(() => {
        axios.get('http://localhost:3001/api/accounts')
            .then((response) => {
                console.log(response);
                setUserList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    },[])

    return(
        <div className="AccountContainer">
            {userList.map((user,idx) => {
                return(
                    <div key={idx}>
                        <p>User ID: {user.id}</p>
                        <p>UserName: {user.username}</p>
                        <p>Password: {user.password}</p>
                        <p>User Name: {user.firstName}, {user.lastName}</p>
                        <button onClick={() => {
                            deleteHandler(user.id)
                        }}>Delete {user.id}</button>
                        <button onClick={() => {
                            updateHandler(user.id)
                        }}>Update {user.id}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AccountPage;