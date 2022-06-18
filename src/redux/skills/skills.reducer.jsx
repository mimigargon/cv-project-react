import { CV } from "../../CV/CV";
import * as actions from "./skills.actions";

const { skills } = CV;

const INITIAL_STATE = {
  hard: skills.hard,
  soft: skills.soft,
};

const skillsReducer = (state = INITIAL_STATE, action) => {
  const { hard, soft } = state;
  switch (action.type) {
    case actions.ADD_SKILL_HARD:
      return { ...state, hard: [...hard, action.payload.hard] };
    case actions.ADD_SKILL_SOFT:
      return { ...state, soft: [...soft, action.payload.soft] };
    case actions.DELETE_SKILL_HARD:
      const skillsHardFiltered = hard.filter((hard) => hard !== action.payload);
      return { ...state, hard: [...skillsHardFiltered] };
    case actions.DELETE_SKILL_SOFT:
      const skillsSoftFiltered = soft.filter((soft) => soft !== action.payload);
      return { ...state, soft: [...skillsSoftFiltered] };
    default:
      return state;
  }
};

export default skillsReducer;
