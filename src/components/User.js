import React from 'react'
import { ListTask } from 'react-bootstrap-icons'

function User(){

    return (
        <div className='User'>
            <div className="logo">
                <ListTask color="#025955"/>
            </div>
            <div className='info'>
                <p>To-Do App</p>
                <a href="#">Logout!</a>
            </div>
        </div>
    )
}

export default User