import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {carToUpdate, deleteCarThunk} from '../../store/car.slice';
import './Car.css'

export const Car = ({ car }) => {
    const { id, model, price, year } = car;

    const dispatch = useDispatch();
    const { info } = useSelector(state => state['carReducer']);

    return (
        <div className={'car'}>
            <div>
                <div>id: {id}</div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCarThunk({id}))}>Delete</button>
            <button onClick={()=>dispatch(carToUpdate({car}))}>Update</button>
            <hr/>
        </div>
    );
};

export default Car;
