import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Five } from './Five';
import { Four } from './Four';
import { One } from './One';
import { Three } from './Three';
import { Two } from './Two';

export const Landing = () => {
    const steps = useSelector(state => state.landingReducer.steps)
    const dispatch = useDispatch();

    let test = steps.toString()

    console.log(steps);


        {/* 0 == (0, 0, 0) */}
    return (
        <div className='container'>
            {steps === -0.25 ? <Two /> : null}
            {steps === -0.50 ? <Three /> : null}
            {steps === -0.75 ? <Four /> : null}
            {steps === 0 ? <One /> : null}
            {steps === 0.25 ? <Two /> : null}
            {steps === 0.50 ? <Three /> : null}
            {steps === 0.75 ? <Four /> : null}
            {steps === 1 ? <Five /> : null}
        </div>
    )
}