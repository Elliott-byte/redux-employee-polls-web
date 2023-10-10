import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';



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
		<Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" paddingTop="20px">
			<h2>{title}</h2>
			<Box sx={{ flexGrow: 1, width: "80%", height: "20vh" }} display="flex" justifyContent="center" mt={2}>
				<Grid container spacing={2} style={{ height: "20vh" }}> {/* 如果需要更大的间距，可以调整 spacing 的值 */}
					{/* {questions && questionsKeys.map((key) => (
						<Grid item key={key} xs={4}>
							<Item>
								<QuestionCard />
							</Item>
						</Grid>
					))} */}
				</Grid>
			</Box>
		</Box>
	);
}
