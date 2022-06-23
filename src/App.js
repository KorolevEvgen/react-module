import Header from './components/Header/Header';
import {Route, Routes, Navigate} from 'react-router-dom';
import PostsPage from './pages/PostsPage/PostsPage';
import UsersPage from './pages/UsersPage/UsersPage';
import PostDetails from './components/PostDetails/PostDetails';
import UserDetails from './components/UserDetails/UserDetails';
import './App.css';


function App() {
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

            </Routes>
        </div>
    );
}

export default App;






