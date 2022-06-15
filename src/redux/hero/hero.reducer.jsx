import { CV } from '../../CV/CV';
import * as actions from './hero.actions'; 

const { hero } = CV;

const INITIAL_STATE = {
    hero: hero,
}

const heroReducer = (state = INITIAL_STATE, action) => {
    const { hero } = state;
    switch(action.type) {
        case actions.EDIT_HERO: 
        const { id, editHero } = action.payload;
        hero[id] = editHero;
        return state
        default: 
        return state; 
    }
};

export default heroReducer; 