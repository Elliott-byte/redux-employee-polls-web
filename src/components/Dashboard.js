import Navbar from "./Navbar";
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

export default function Dashboard() {
	//todo test non-auth dispatch to /

	// const authedUser = useSelector((state) => state.authedUser);
	const authedUser = "sarahedo";

	const questions = useSelector((state) => state.questions);
	const pendingQuestions = filterUnvotedQuestions(questions, authedUser);
	const finishedQuestions = filterVotedQuestions(questions, authedUser);
	// console.log("pending", pendingQuestions);
	// console.log("finished", finishedQuestions);

	const dispatch = useDispatch();
	useEffect(() => dispatch(handleQuestions()), [])


	return (
		<>
			<Navbar />
			<QuestionContainer title="New Questions" questions={pendingQuestions} />
			{/* <Box display="flex" justifyContent="center" height="50vh"> */}
			<QuestionContainer title="Done Questions" questions={finishedQuestions} />
			{/* </Box> */}

		</>
	)
}