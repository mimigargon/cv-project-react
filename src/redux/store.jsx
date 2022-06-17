import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'; 
import educationReducer from "./education/education.reducer";
import experienceReducer from "./experience/experience.reducer";
import heroReducer from "./hero/hero.reducer";
import languagesReducer from "./languages/languages.reducer";
import skillsReducer from "./skills/skills.reducer";

const rootReducer = combineReducers({
    hero: heroReducer,
    experience: experienceReducer,
    education: educationReducer, 
    skills: skillsReducer,
    languages: languagesReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store; 