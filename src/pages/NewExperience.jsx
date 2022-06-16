import React from "react";
import {useForm} from 'react-hook-form';
import {addExperience} from '../redux/experience/experience.actions';
import { useDispatch } from "react-redux";

const NewExperience = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData) => {
        console.log(formData);
        dispatch(addExperience(formData));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>
                <span>Name</span>
                <input type='text' name='name' {...register('name', {
                    required: 'Please, enter a name',
                    pattern: {
                        value: /^[a-zA-Z]{4,10}$/,
                        message: 'Please enter a valid name', 
                    }
                })}/>
                {errors.name && errors.name.type === 'required' && <span>{errors.name.message}</span>}
                {errors.name && errors.name.type === 'pattern' && <span>{errors.name.message}</span>}
            </label>
            <label>
                <span>Date</span>
                <input type='text' name='date' {...register('date', {pattern: {
                    value: /^(19[0-9]\d|20[0-2]\d)$/,
                    message: 'Please enter a valid date',
                }})}/>
                {errors.date && errors.date.type === 'pattern' && <span>{errors.date.message}</span>}
            </label>
            <label>
                <span>Where</span>
                <input type='text' name='where' {...register('where')}/>
            </label>
            <button>Add experience</button>
        </form>
    )
}

export default NewExperience; 