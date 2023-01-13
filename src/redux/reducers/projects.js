
import {
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECT_SUCCESS,
    GET_PROJECT_FAIL
} from '../actions/types';


const initialState = {
    projects: null,
    project: null,
};

export default function Projects(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: payload.projects
            }
        case GET_PROJECTS_FAIL:
            return {
                ...state,
                projects: null
            }
        
        
        
        case GET_PROJECT_SUCCESS:
            return {
                ...state,
                project: payload.project
            }
        case GET_PROJECT_FAIL:
            return {
                ...state,
                project: null
            }
        
       
        default:
            return state
    }
}