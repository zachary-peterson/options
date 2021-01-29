import React from 'react';
import { minusStep } from '../store';
import {useDispatch} from 'react-redux';

export const Five = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Five</h1>

            <button onClick={() => dispatch(minusStep())}>Rewind!!!</button>
        </div>
    )
}