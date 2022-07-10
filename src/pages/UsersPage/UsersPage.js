import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import {userService} from '../../services/user.service';
import User from '../../components/User/User';

const UsersPage = () => {
    const [users,setUsers] = useState([]);

    useEffect(()=>{
        userService.getAll().then(value => setUsers(value))
    })
    return (
        <div>
            <div>
                <h1>Users</h1>
                {users.map(user => <User key={user.id} user={user}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default UsersPage;
