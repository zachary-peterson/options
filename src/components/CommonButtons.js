import React from 'react';
import { addStep, minusStep } from '../store';
import {useDispatch} from 'react-redux';

export const CommonButtons = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(minusStep())}>minus</button>
            <button onClick={() => dispatch(addStep())}>plus</button>
        </div>
    )
}