import {CV} from '../../CV/CV';
import * as actions from './skills.actions';

const {skills} = CV; 

const INITIAL_STATE = {
    skills: skills, 
}; 

const skillsReducer = (state = INITIAL_STATE, action) => {
    const {skills} = state; 
    switch (action.type) {
        case actions.ADD_SKILL: 
        return {...state, skills: [...skills, action.payload]};
        case actions.DELETE_SKILL:
            const skillsFiltered = skills.filter((skill) => skill !== action.payload);
            return {...state, skills: [...skillsFiltered]};
                default:
                    return state; 
    }
};

export default skillsReducer; 