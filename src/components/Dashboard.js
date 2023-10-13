import QuestionContainer from "./QuestionContainer";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleQuestions } from '../actions/questions';

const filterVotedQuestions = (questions, authedUser) => {
	return Object.values(questions).filter((question) => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser));
}

const filterUnvotedQuestions = (questions, authedUser) => {
	return Object.values(questions).filter((question) => !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser));
}

const sortQuestions = (questions) => {
	return Object.values(questions).sort((a, b) => b.timestamp - a.timestamp);
}
export default function Dashboard() {

	const authedUser = useSelector((state) => state.authedUser);
	// const authedUser = "sarahedo";

	const questions = useSelector((state) => state.questions);
	const sortedQuestions = sortQuestions(questions);

	const pendingQuestions = filterUnvotedQuestions(sortedQuestions, authedUser);
	const finishedQuestions = filterVotedQuestions(sortedQuestions, authedUser);

	const dispatch = useDispatch();
	useEffect(() => dispatch(handleQuestions()), [])


	return (
		<>
			<QuestionContainer title="Unanswered Questions" questions={pendingQuestions} />
			<QuestionContainer title="Answered Questions" questions={finishedQuestions} />
		</>
	)
}