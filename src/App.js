import './App.css';
import {Route, Routes, Navigate} from 'react-router-dom';

import Header from './components/Header/Header';
import PostsPage from './pages/PostsPage/PostsPage';
import PostDetails from './components/PostDetails/PostDetails';
import UsersPage from './pages/UsersPage/UsersPage';
import UserDetails from './components/UserDetails/UserDetails';
import Cars from './components/Cars/Cars';


const App = () => {
    return (
        <div>
            <Header/>


            <Routes>
                <Route path={''} element={<Navigate to={'users'}/>}/>
                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetails/>}/>
                </Route>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetails/>}/>
                </Route>

                <Route path={'cars'} element={<Cars/>}/>

            </Routes>

        </div>
    );
};

export default App;

