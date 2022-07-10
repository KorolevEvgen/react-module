import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCars} from '../../store/car.slice';
import Car from '../Car/Car';
import Form from '../Form/Form';

const Cars = () => {

    const {cars,status,error} = useSelector(state => state['carReducer'])
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllCars())
    },[])

    return (
        <div>
            <Form/>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;
