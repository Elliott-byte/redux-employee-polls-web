import { _getQuestions } from "../api/_DATA";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

export function handleQuestions() {
	return (dispatch) => {
		_getQuestions().then(
			(questions) => {
				dispatch(receiveQuestions(questions));
				return Promise.resolve();
			}
		).catch((e) => {
			return Promise.reject("Questions load error.");
		})
	}
}