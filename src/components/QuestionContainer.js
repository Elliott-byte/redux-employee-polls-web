import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
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
	return (
		<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh" paddingTop="20px">
			<h2>{title}</h2>

			<Box sx={{ flexGrow: 1, width: 500 }} display="flex" justifyContent="center" mt={2}>
				{/* <Grid container spacing={3}> */}
				<Grid xs={6}>
					<Item><QuestionCard /></Item>
				</Grid>
				{/* </Grid> */}
			</Box>
		</Box>
	);
}
