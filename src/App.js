import './App.css';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import css from './App.module.css';
import {useState} from 'react';

function App() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user);
        setUserId(null)
    };

    const getUserId = (id) => {
        setUserId(id)
    };

    return (
        <div>
            <div className={css.wrap}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>
           <div className={css.wrapPosts}> {userId && <Posts userId={userId}/>}</div>
        </div>
    );
}

export default App;
