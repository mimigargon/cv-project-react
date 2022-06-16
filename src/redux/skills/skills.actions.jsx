export const ADD_SKILL = 'ADD_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';
export const EDIT_SKILL = 'EDIT_SKILL';

export const addSkill = (newSkill) => dispatch => {
    dispatch ({
        type: ADD_SKILL,
        payload: newSkill,
    })
};