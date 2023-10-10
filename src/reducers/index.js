import { combineReducers } from "redux";
import authedUser from "./authedUser";
import questions from "./questions";

export default combineReducers({
	authedUser,
	questions
})