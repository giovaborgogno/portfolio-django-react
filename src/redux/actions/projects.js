import axios from 'axios';
import {
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAIL
} from './types';

export const get_projects = (limit = 6) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try { 
        // const res = await axios.get(`http://localhost:8000/api/projects/get-projects?order=desc`, config);
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/get-projects?order=desc&limit=${limit}`, config);
    
        if (res.status === 200) {
            dispatch({
                type: GET_PROJECTS_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PROJECTS_FAIL
            });
        }

    } catch(err){
        dispatch({
            type: GET_PROJECTS_FAIL
        });
    }
}

export const get_project = (projectId) => async dispatch => {
    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try {
        // const res = await axios.get(`http://localhost:8000/api/projects/project/${projectId}`, config);
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/projects/project/${projectId}`, config);
        if (res.status === 200) {
            dispatch({
                type: GET_PROJECT_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_PROJECT_FAIL
            });
        }
    } catch (err) {
        dispatch({
            type: GET_PROJECT_FAIL
        });
    }
}