import { _getQuestions, _saveQuestionAnswer } from "../api/_DATA";

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

export function answerQuestion(questionId, option, authedId) {
	return {
		type: ANSWER_QUESTION,
		questionId,
		option,
		authedId
	}
}

export function handleAnswerQuestions(authedUser, qid, answer) {
	return (dispatch) => {
		_saveQuestionAnswer({ authedUser, qid, answer }).then(
			() => {
				dispatch(answerQuestion(qid, answer, authedUser));
			}
		).catch((e) => { return Promise.reject("Vote Error!") });
	}
}

export function addQuestion(authedUser, optionOne, optionTwo) {
	return {
		
	}
}