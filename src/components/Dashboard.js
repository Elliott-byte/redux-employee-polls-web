import QuestionContainer from "./QuestionContainer";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleQuestions } from '../actions/questions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const notSelectableStyle = {
	userSelect: 'none',
	WebkitUserSelect: 'none',
	MozUserSelect: 'none',
	msUserSelect: 'none'
};

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
	const [activeChip, setActiveChip] = useState(true);
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
			<Stack direction="row" spacing={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center" paddingTop="20px" width="100%">
				<Chip style={notSelectableStyle} label="Unanswered" variant={activeChip ? "outlined" : "filled"} onClick={(e) => setActiveChip(false)} />
				<Chip style={notSelectableStyle} label="Answered" variant={!activeChip ? "outlined" : "filled"} onClick={(e) => setActiveChip(true)} />
			</Stack>
			{activeChip ? <QuestionContainer questions={pendingQuestions} /> : <QuestionContainer questions={finishedQuestions} />}


		</>
	)
}