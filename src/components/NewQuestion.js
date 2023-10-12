import { Fragment, useState } from "react";
import { Divider, Typography, TextField, Button } from '@mui/material';

export default function NewQuestion() {
	const [optionOne, setOptionOne] = useState();
	const [optionTwo, setOptionTwo] = useState();
	// console.log(optionOne);

	const handleSubmit = () => {

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
			<TextField id="outlined-basic" label="Content" variant="outlined" style={{ width: '40%' }} onChange={(e) => { setOptionOne(e.target.value) }} />
			<Typography variant="overline" display="block" gutterBottom marginTop="20px">
				Second Option
			</Typography>
			<TextField id="outlined-basic" label="Content" variant="outlined" style={{ width: '40%' }} onChange={(e) => { setOptionTwo(e.target.value) }} />

			<Button variant="contained" color="success" style={{ width: '40%', marginTop: "50px", height: "50px" }} onClick={handleSubmit}>
				Submit
			</Button>
		</div>

	</Fragment>
}