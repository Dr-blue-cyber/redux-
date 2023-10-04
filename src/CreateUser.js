import React from 'react'
import { useDispatch } from 'react-redux'
import {addUser} from './Redux/UsersSlice'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSend = ()=>{
        debugger
        dispatch(addUser({
            name: "SURAJ", 
            email: "suraj@leadows.com",
        }))
        
    }

  return (
        <>
    <button onClick={handleSend} >Add to store</button>
    <button onClick={()=>navigate("http://localhost:3000/updateUser")}>Update Page</button>

    </>
  )
}



export default CreateUser;