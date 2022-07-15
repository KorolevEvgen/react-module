import React from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';

import {createCar} from '../../store/car.slice';

const Form = ({ getFormData }) => {

    const { handleSubmit, register, reset } = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createCar({ data }));
        reset();
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <p><label>Model: <input type="text" {...register('model')}/></label></p>
                <p><label>Price: <input type="text" {...register('price')}/></label></p>
                <p><label>Year: <input type="text" {...register('year')}/></label></p>
                <p><button>Create</button></p>
            </form>
        </div>
    );
};

export default Form;
