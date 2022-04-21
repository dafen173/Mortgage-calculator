import React from "react"
import UserList from '../component/UserList'
import {AddUser} from '../component/AddUser'

export const UsersPage = () => {

    return (
        <div className="wrapper">         
            <h1>Banks Page</h1>
            <UserList />
            <AddUser />       
        </div> 
    )
}


