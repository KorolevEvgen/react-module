import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {updateCarById} from '../../store/car.slice';

const FormUpdate = () => {
    const { carForUpdate } = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();
    const { handleSubmit, reset, setValue, register } = useForm();


    const submit = (data) => {
dispatch(updateCarById({id:carForUpdate.id, car:data}))
    }
    useEffect(()=>{
        if (carForUpdate){
            setValue('model',carForUpdate.model)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
    },[carForUpdate])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <p><label>Model: <input type="text" {...register('model')}/></label></p>
            <p><label>Price: <input type="text" {...register('price')}/></label></p>
            <p><label>Year: <input type="text" {...register('year')}/></label></p>
            <p>
                <button>Update</button>
            </p>
        </form>
    );
};

export default FormUpdate;
