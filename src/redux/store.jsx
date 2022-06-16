import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'; 
import educationReducer from "./education/education.reducer";
import experienceReducer from "./experience/experience.reducer";
import heroReducer from "./hero/hero.reducer";

const rootReducer = combineReducers({
    hero: heroReducer,
    experience: experienceReducer,
    education: educationReducer, 
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store; 