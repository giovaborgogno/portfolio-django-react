import axios from 'axios';
import {
    GET_EDUCATION_SUCCESS,
    GET_EDUCATION_FAIL,

} from './types';

export const get_education = () => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try { 
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/education/get-education`, config);
    
        if (res.status === 200) {
            dispatch({
                type: GET_EDUCATION_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_EDUCATION_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_EDUCATION_FAIL
        });
    }
}