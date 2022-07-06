import React from 'react';
import './Car.css';
import {useDispatch, useSelector} from 'react-redux';

import {deleteCarThunk} from '../../store';

export const Car = ({ car: { id, model, price, year } }) => {
    const dispatch = useDispatch();
    const { info } = useSelector(state => state['carReducer']);
    return (
        <div className={'carWrap'}>
            <div>
                <div>Model: {model}</div>
                <div>Price: {price}</div>
                <div>Year: {year}</div>
            </div>
            <button onClick={() => dispatch(deleteCarThunk({ id }))}>Delete</button>
        </div>

    );
};


