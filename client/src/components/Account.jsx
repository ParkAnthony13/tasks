import react, {useEffect, useState} from 'react'
import axios from 'axios'
import {navigate} from '@reach/router'

const AccountPage = props => {



    const [userList, setUserList] = useState([]);


    const deleteHandler = (userId) => {
        axios.delete(`http://localhost:3001/api/accounts/delete/${userId}`)
            .then((response) => {
                console.log("deletd account")
            })
            .catch((error) => {
                console.log(error)
            })
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
                        }}>Delete {user.id}</button>
                    </div>
                )
            })}
        </div>
    )
}

export default AccountPage;