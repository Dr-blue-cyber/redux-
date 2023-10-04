import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Home() {
    const users = useSelector((state)=> state.users)
    const navigate = useNavigate();
    // console.log(users)
    return (
        <>
        <a href='/createUser'><button>Create User</button></a>
        <table>
            <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            </thead>

            <tbody>
                {users.map((user, index) => (
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><a href={`/editUser/${user.id}`}><button>Edit</button></a></td>
                </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}

export default Home
