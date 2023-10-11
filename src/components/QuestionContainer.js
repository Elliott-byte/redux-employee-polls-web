import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import QuestionCard from './QuestionCard';


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

export default function QuestionContainer(props) {
	const title = props.title;
	const questions = props.questions;
	const questionKeys = Object.keys(questions);
	// const heightFact = questionKeys.length / 3 * 25;

	return (
		<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" paddingTop="20px" width="100%">
			<h2>{title}</h2>
			<Box mt={2} width="60vw" >
				<Grid container spacing={4} > {/* 如果需要更大的间距，可以调整 spacing 的值 */}
					{questions && questionKeys.map((key) => (
						<Grid item="true" key={key} xs={4} >
							<Item sx={{ minWidth: 200 }}>
								<QuestionCard question={questions[key]} />
							</Item>
						</Grid>
					))}
				</Grid>
			</Box>
		</Box >
	);
}
