import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {getAllCars} from '../../store/car.slice';
import Car from '../Car/Car';
import Form from '../Form/Form';
import FormUpdate from '../FormUpdate/FormUpdate';
import './Cars.css';

const Cars = () => {

    const { cars, status, error } = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCars());
    }, []);

    return (
        <div className={'cars'}>
            <div className={'form'}>
                <div><h1>Create</h1><Form/></div>
                <div><h1>Update</h1><FormUpdate/></div>
            </div>
            <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export default Cars;
