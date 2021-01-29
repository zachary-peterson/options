import React from 'react';
import { addStep } from '../store';
import {useDispatch} from 'react-redux';
import { CommonButtons } from './CommonButtons';

export const One = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>One</h1>

            <CommonButtons />
            {/* <button onClick={() => dispatch(addStep())}>Onward!!!</button> */}
        </div>
    )
}