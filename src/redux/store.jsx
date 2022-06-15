import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'; 
import heroReducer from "./hero/hero.reducer";

const rootReducer = combineReducers({
    hero: heroReducer, 
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store; 