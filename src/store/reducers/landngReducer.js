import {
    ADD_STEP,
    MINUS_STEP,
    RESET_STEPS
} from '../actions'

const initialState = {
    steps: 0
}

export const landingReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_STEP:
            return {
                ...state,
                steps: state.steps + .25
            }
        case MINUS_STEP:
            return {
                ...state,
                steps: state.steps - .25
            }
        case RESET_STEPS:
            return {
                ...state,
                steps: 0
            }
        default:
            return state;
    }
}