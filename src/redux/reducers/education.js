import {
    GET_EDUCATION_SUCCESS,
    GET_EDUCATION_FAIL,

} from '../actions/types';


const initialState = {
    education: null,
};

export default function Education(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_EDUCATION_SUCCESS:
            return {
                ...state,
                education: payload.education
            }
        case GET_EDUCATION_FAIL:
            return {
                ...state,
                education: null
            }
        
       
        default:
            return state
    }
}