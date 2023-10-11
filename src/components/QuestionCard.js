import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const padZero = (num) => {
	return num < 10 ? ('0' + num) : num;
}

const formatDate = (date) => {
	return padZero(date.getHours()) + ':' + date.getMinutes() + ' | ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
}

export default function QuestionCard(props) {
	const question = props.question;
	const date = new Date(question.timestamp);
	const dateString = formatDate(date);

	return (
		<Box sx={{ minWidth: 200 }}>
			<Card variant="outlined">
				<React.Fragment>
					<CardContent>
						<Typography variant="h5" component="div">
							{question.author}
						</Typography>
						<Typography color="text.secondary">
							{dateString}
						</Typography>
					</CardContent>
					<CardActions>

						<Box display="flex" justifyContent="center" width="100%">
							<Link to={`/question/${question.id}`}>
								<Button variant="outlined" color="success">Show</Button>
							</Link>
						</Box>
		
					</CardActions>
				</React.Fragment>
			</Card>
		</Box>
	);
}