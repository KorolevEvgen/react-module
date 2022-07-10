import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

const UserDetails = () => {
    const [user,setUser] = useState(null);
    const {state} = useLocation();

    useEffect(()=>{
        if (state){
            setUser(state)
            return
        }
    })
    return (
        <div>
            {user &&(
                <div>
                    <div>Id: {user.id}</div>
                    <div>Name: {user.name}</div>
                    <div>Username: {user.username}</div>
                    <div>Email: {user.email}</div>
                </div>

            )}



        </div>
    );
};

export default UserDetails;
