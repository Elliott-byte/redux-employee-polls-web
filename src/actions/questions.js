import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../api/_DATA";

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
				return Promise.resolve();
			}
		).catch((e) => { return Promise.reject(e) });
	}
}

export function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	}
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
	console.log(optionOneText, optionTwoText, author)
	return (dispatch) => {
		// const question = formatQuestion({ optionOneText, optionTwoText, author });
		_saveQuestion({ optionOneText, optionTwoText, author }).then(
			(question) => {
				dispatch(addQuestion(question));
				return Promise.resolve();
			}
		).catch((e) => { return Promise.reject(e) });
	}
}