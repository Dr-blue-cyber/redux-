
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from './Redux/UsersSlice.js';
import { useParams } from 'react-router-dom';

function UpdateUser() {
    const {id} = useParams();

    
    const [upName, setUpName] = useState()
    const [upEmail, setUpEmail] = useState('admin@gmail.com')

    const dispatch = useDispatch();

    console.log(id, useSelector((state)=> state.users))
    const users = useSelector((state)=> state.users)
    const eUsers = users.filter((eUser)=> eUser.id === id)
    debugger;
    console.log(eUsers);
    const existingUser = eUsers[0];
    
    
    const handleSubmit =() =>{
        // console.log(name, email)
        dispatch(updateUser({id: 1, name: upName, email: upEmail}));
    }
    return (

        <>
        <div>
            <label> Name
                <input type = "text" name ="name" defaultValue={"existingUser.name"} onChange={(e)=> setUpName(e.target.value)}/>
            </label>
        </div>

        <div>
            <label>Mail Id
                <input type = "email" name = "email" defaultValue={""} onChange={(e)=> setUpEmail(e.target.value)}/>
            </label>
        </div>

        <div>
            <button onClick={handleSubmit}>Register</button>
        </div>
        </>   
    )
}

export default UpdateUser

