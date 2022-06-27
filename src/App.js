import './App.css';
import {Route, Routes} from 'react-router-dom';

import CharacterPage from './pages/CharacterPage/CharacterPage';
import CharacterDetailsPage from './pages/CharacterDetailsPage/CharacterDetailsPage';
import Layout from './pages/Layout';
import LocationPage from './pages/LocationPage/LocationPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route path={'character'} element={<CharacterPage/>}/>
                    <Route path={'character/:id'} element={<CharacterDetailsPage/>}/>

                    <Route path={'location'} element={<LocationPage/>}/>

                </Route>

            </Routes>
        </div>
    )
        ;
}

export default App;
