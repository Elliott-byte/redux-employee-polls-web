import { Fragment, useState } from "react";
import { Divider, Typography, TextField, Button } from '@mui/material';
import { useDispatch } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function NewQuestion() {
	const navigate = useNavigate();
	const [optionOne, setOptionOne] = useState("");
	const [optionTwo, setOptionTwo] = useState("");
	// console.log(optionOne);
	const authedUser = useSelector((state) => state.authedUser);
	// const authedUser = "sarahedo";

	const dispatch = useDispatch();
	if (!authedUser) {
		return navigate('/dashboard');
	}
	const handleSubmit = () => {
		dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));
		navigate('/dashboard')
		setOptionOne("");
		setOptionTwo("");
	}
	return <Fragment>
		<div style={{ display: 'flex', justifyContent: 'center', marginTop: "20px" }}>
			<Typography variant="h2">
				New Question
			</Typography>
		</div>

		<Divider style={{ display: 'flex', justifyContent: 'center', marginTop: "30px" }}>
			<Typography variant="h4" color="text.secondary">
				Create you own poll
			</Typography>
		</Divider>
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: "20px" }}>
			<Typography variant="overline" display="block" gutterBottom>
				First Option
			</Typography>
			<TextField id="outlined-basic" label="Content" variant="outlined" style={{ width: '40%' }} onChange={(e) => { setOptionOne(e.target.value) }} value={optionOne} />
			<Typography variant="overline" display="block" gutterBottom marginTop="20px">
				Second Option
			</Typography>
			<TextField id="outlined-basic" label="Content" variant="outlined" style={{ width: '40%' }} onChange={(e) => { setOptionTwo(e.target.value) }} value={optionTwo} />

			<Button variant="contained" color="success" style={{ width: '40%', marginTop: "50px", height: "50px" }} onClick={handleSubmit}>
				Submit
			</Button>
		</div>

	</Fragment>
}