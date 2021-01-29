export const ADD_STEP = 'ADD_STEP';
export const MINUS_STEP = 'MINUS_STEP';
export const RESET_STEPS = 'RESET_STEPS';

export const addStep = () => (dispatch) => {
    dispatch({ type: ADD_STEP });
};

export const minusStep = () => (dispatch) => {
    dispatch({ type: MINUS_STEP });
};

export const resetSteps = () => (dispatch) => {
    dispatch({ type: RESET_STEPS });
};