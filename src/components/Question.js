import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Fragment } from "react";
import { Divider, Typography } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { handleAnswerQuestions } from "../actions/questions";
import { useNavigate } from "react-router-dom";


const filterVotedStatus = (question, authedUser) => {
	if (question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))
		return true;
	return false;
}

export default function QuestionCard(props) {
	const navigate = useNavigate();
	const questions = useSelector((state) => state.questions);
	const authedUser = useSelector((state) => state.authedUser);

	const { id } = useParams()
	const dispatch = useDispatch();
	if (!id) return;
	const question = questions[id];
	if (!question) return navigate('/dashboard');
	// const authedUser = "sarahedo";

	const questionStatuts = filterVotedStatus(question, authedUser);

	const handleVote = (e) => {
		const option = e.target.id;
		dispatch(handleAnswerQuestions(authedUser, id, option));
		navigate('/dashboard')
	}
	return (
		<Fragment>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
				<Typography variant="h2">
					{question.author}
				</Typography>

			</div>
			<Divider style={{ display: 'flex', justifyContent: 'center', marginTop: "100px" }}>
				<Typography variant="h4">
					Would You Rather?
				</Typography>
			</Divider>
			<div style={{ display: 'flex', justifyContent: 'center', marginTop: "60px" }} >
				<Box sx={{ minWidth: 200 }}>
					<Card variant="outlined">
						<React.Fragment>
							<CardContent>
								<Typography color="text">
									{question.optionOne.text}
								</Typography>
							</CardContent>
							<CardActions>
								<Box display="flex" justifyContent="center" width="100%">
									<Button variant="outlined" id="optionOne" color="success" disabled={questionStatuts ? true : false} onClick={handleVote}>Click</Button>
								</Box>

							</CardActions>
						</React.Fragment>
					</Card>
				</Box>
				<Box sx={{ minWidth: 200, marginLeft: 10 }}>
					<Card variant="outlined">
						<React.Fragment>
							<CardContent>
								<Typography color="text">
									{question.optionTwo.text}
								</Typography>
							</CardContent>
							<CardActions>
								<Box display="flex" justifyContent="center" width="100%">
									<Button variant="outlined" id="optionTwo" color="success" disabled={questionStatuts ? true : false} onClick={handleVote}>Click</Button>
								</Box>

							</CardActions>
						</React.Fragment>
					</Card>
				</Box>
			</div>

		</Fragment >
	)
}