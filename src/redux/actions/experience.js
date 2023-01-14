import axios from 'axios';
import {
    GET_EXPERIENCE_SUCCESS,
    GET_EXPERIENCE_FAIL,

} from './types';

export const get_experience = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try { 
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/experience/get-experience`, config);
    
        if (res.status === 200) {
            dispatch({
                type: GET_EXPERIENCE_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_EXPERIENCE_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_EXPERIENCE_FAIL
        });
    }
}