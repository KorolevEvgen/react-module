import {useEffect, useState} from 'react';
import User from "../user/User";
import './Users.css'


const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then (value => setUsers(value))
    }, [])
    return (
        <div className={'usersStyle'}>
            {users.map(value => <User key={value.id} id={value.id} name ={value.name}  username ={value.username}  email={value.email} city={value.address.city}/>)}
            {users.name}
        </div>
    );
};


export default Users;
