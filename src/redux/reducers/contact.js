import {
    SEND_EMAIL_FAIL,
    SEND_EMAIL_SUCCES
} from '../actions/types'

const initialState = {
    emailsent: false
};

export default function Contact(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case SEND_EMAIL_SUCCES:
            return {
                ...state,
                emailsent: true
            }
        case SEND_EMAIL_FAIL:
            return {
                ...state,
                emailsent: false
            }
        
       
        default:
            return state
    }
}