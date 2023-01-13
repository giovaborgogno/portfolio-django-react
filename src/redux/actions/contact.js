import axios from 'axios';
import {
    SEND_EMAIL_SUCCES,
    SEND_EMAIL_FAIL
} from './types';

export const send_email = (
    full_name,
    email,
    subject,
    message
) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    const body = JSON.stringify({
        full_name,
        email,
        subject,
        message
    });

    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact/send-email`, body, config);

        if (res.status === 200) {
            dispatch({
                type: SEND_EMAIL_SUCCES,
                // payload: res.data
            });
        } else {
            dispatch({
                type: SEND_EMAIL_FAIL
            });
        }
    } catch(err) {
        dispatch({
            type: SEND_EMAIL_FAIL
        });
    }
}