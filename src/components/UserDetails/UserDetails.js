import React from 'react';
import css from './UserDetails.module.css'

const UserDetails = ({user,getUserId}) => {
    const {id,name,username,email} = user;

    return (
        <div className={css.wrap}>
            <div>id: {id}</div>
            <div>Name: {name}</div>
            <div>UserName: {username}</div>
            <div>Email: {email}</div>
            <button onClick={()=>getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;
