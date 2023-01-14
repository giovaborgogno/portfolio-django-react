import { combineReducers } from 'redux';
import Projects from './projects';
import Contact from './contact';
import Experience from './experience';
import Education from './education';

export default combineReducers({
    Projects,
    Contact,
    Experience,
    Education
})