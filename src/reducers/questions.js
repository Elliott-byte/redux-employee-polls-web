import { ANSWER_QUESTION, RECEIVE_QUESTIONS } from "../actions/questions";

export default function questions(state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			}
		case ANSWER_QUESTION:
			const { questionId, option, authedId } = action;

			return {
				...state,
				[questionId]: {
					...state[questionId],
					[option]: {
						...state[questionId][option],
						votes: state[questionId][option].votes.concat(authedId)
					}
				}
			};
		default:
			return state;
	}
}