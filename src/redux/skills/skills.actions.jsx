export const ADD_SKILL = 'ADD_SKILL';
export const DELETE_SKILL = 'DELETE_SKILL';


export const addSkill = (newSkill) => dispatch => {
    dispatch ({
        type: ADD_SKILL,
        payload: newSkill,
    })
};

export const deleteSkill = (skillToDelete) => dispatch => {
    dispatch ({
        type: DELETE_SKILL,
        payload: skillToDelete, 
    }); 
}

