import react, {useEffect, useState} from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

const AccountPage = props => {



    const [userList, setUserList] = useState([]);


    const deleteHandler = (e,userId) => {
        axios.delete(`http://localhost:3001/api/accounts/${userId}`)
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
        <div>
            {userList.map((user,idx) => {
                return(
                    <div key={idx}>
                        <p>{user.id}</p>
                        <p>{user.username}</p>
                        <p>{user.password}</p>
                        <p>{user.firstName} {user.lastName}</p>
                        <button onClick={() => {
                            deleteHandler(user.id)
                        }}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AccountPage;