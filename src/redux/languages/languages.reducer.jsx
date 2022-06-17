import { CV } from "../../CV/CV";
import * as actions from "./languages.actions";

const { languages } = CV;

const INITIAL_STATE = {
  languages: languages,
};

const languagesReducer = (state = INITIAL_STATE, action) => {
  const { languages } = state;
  switch (action.type) {
    case actions.ADD_LANGUAGE:
      return { ...state, languages: [...languages, action.payload] };
    case actions.DELETE_LANGUAGE:
      const languagesFiltered = languages.filter(
        (lan) => lan !== action.payload
      );
      return { ...state, languages: [...languagesFiltered] };
    case actions.EDIT_LANGUAGE:
      const { id, editLanguage } = action.payload;
      const languagesCopy = [...languages];
      languagesCopy.splice(id, 1, editLanguage);
      return { ...state, languages: [...languagesCopy] };
    default:
      return state;
  }
};

export default languagesReducer;
