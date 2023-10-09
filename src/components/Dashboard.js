import Navbar from "./Navbar";
import QuestionContainer from "./QuestionContainer";
import Box from '@mui/material/Box';

export default function Dashboard() {
	//todo test non-auth dispatch to /

	return (
		<>
			<Navbar />
			<Box display="flex" justifyContent="center" height="50vh">
				<QuestionContainer title="New Questions" />
			</Box>
		</>
	)
}