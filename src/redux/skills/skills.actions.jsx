export const ADD_SKILL_HARD = 'ADD_SKILL_HARD';
export const ADD_SKILL_SOFT = 'ADD_SKILL_SOFT';
export const DELETE_SKILL_HARD = 'DELETE_SKILL_HARD';
export const DELETE_SKILL_SOFT = 'DELETE_SKILL_SOFT';


export const addSkillHard = (newSkill) => dispatch => {
    dispatch ({
        type: ADD_SKILL_HARD,
        payload: newSkill,
    })
};

export const addSkillSoft = (newSkill) => dispatch => {
    dispatch ({
        type: ADD_SKILL_SOFT,
        payload: newSkill,
    })
};

export const deleteSkillHard = (skillToDelete) => dispatch => {
    dispatch ({
        type: DELETE_SKILL_HARD,
        payload: skillToDelete, 
    }); 
}

export const deleteSkillSoft = (skillToDelete) => dispatch => {
    dispatch ({
        type: DELETE_SKILL_SOFT,
        payload: skillToDelete, 
    }); 
}
