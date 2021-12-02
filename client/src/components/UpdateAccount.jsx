import react, {useEffect,useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import '../css/UpdateAccount.css';

const UpdateAccount = props => {
    
    const {id} = props
    const [password,setPassword] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [account,setAccount] = useState({});
    useEffect(() => {
        // gotta pass account id through props or url
        axios.get(`http://localhost:3001/api/accounts/${id}`)
            .then((response) => {
                setAccount(response.data[0])
                console.log(response.data[0])
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    const updateHandler = () => {
        axios.put('http://localhost:3001/api/accounts',{
            password:password,
            firstName:firstName,
            lastName:lastName,
            userId:id
        })
            .then((response)=>{
                console.log(response);
                navigate("/MyAccount")
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    return(
        <div className="updateAccountContainer">
            {account?
                <div>
                    <p>id is {id}</p>
                    <p>{account.username}</p>
                    <form>
                        <label>First Name</label>
                        <input type="text" placeholder={account.firstName} onChange={(e) => {setFirstName(e.target.value)
                        console.log(firstName)}}/>
                        <label>Last Name</label>
                        <input type="text" placeholder={account.lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                        <label>Password</label>
                        <input type="text" placeholder={account.password} onChange={(e) => {setPassword(e.target.value)}}/>
                        <button onClick={updateHandler}>Edit</button>
                    </form>
                </div>
                : <div></div>
            }
        </div>
    )
}

export default UpdateAccount;