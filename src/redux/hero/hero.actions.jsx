export const EDIT_HERO = 'EDIT_HERO';
export const ADD_HERO = 'ADD_HERO';

export const addHero = (newHero) => dispatch => {
    dispatch({
        type: ADD_HERO,
        payload: newHero
    })
}

export const editHero = (editHero, id) => dispatch => {
    dispatch({
        type: EDIT_HERO,
        payload: {editHero, id},
    });
}

