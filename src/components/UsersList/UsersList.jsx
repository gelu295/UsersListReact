import React from 'react'
import styles from './UsersList.css'

const UsersList = ({user}) => {
    return (
        <div className="users-list">
            <div className="user-name">{user.name}</div>
            <div>{user.username}</div>
        </div>
    )
}

export default UsersList;