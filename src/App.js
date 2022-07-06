import './App.css';
import {useState} from 'react';

import Form from './components/Form/Form';
import Cars from './components/Cars/Cars';


const App = () => {
    const [cars, setCars] = useState([]);

    const getFormData = (data) => {
        setCars([...cars, { id: new Date().getTime(), ...data }]);
    };
    const getCarId = (id) => {
        setCars(cars.filter(car => car.id !== id));
    };
    return (
        <div>
            <Form/>
            <Cars/>
        </div>
    );
};

export default App;
