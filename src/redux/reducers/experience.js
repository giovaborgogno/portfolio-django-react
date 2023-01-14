import {
    GET_EXPERIENCE_SUCCESS,
    GET_EXPERIENCE_FAIL,

} from '../actions/types';


const initialState = {
    experience: null,
};

export default function Experience(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_EXPERIENCE_SUCCESS:
            return {
                ...state,
                experience: payload.experience
            }
        case GET_EXPERIENCE_FAIL:
            return {
                ...state,
                experience: null
            }
        
       
        default:
            return state
    }
}