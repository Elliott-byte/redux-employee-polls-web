import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { handleReceiveUsers } from '../actions/users';
import { useEffect } from 'react';


export default function Leaderboard() {
	const dispatch = useDispatch();
	useEffect(() => dispatch(handleReceiveUsers()), [])
	const users = useSelector((state) => state.users);

	const transformUsers = (users) => {
		return Object.values(users).map(user => ({
			id: user.id,
			votes: user.questions.length,
			answers: Object.keys(user.answers).length
		}));
	}
	const currUsers = transformUsers(users);

	// const rows = [
	// 	createData('Frozen yoghurt', 159, 6.0),
	// 	createData('Ice cream sandwich', 237, 9.0),
	// 	createData('Eclair', 262, 16.0),
	// 	createData('Cupcake', 305, 3),
	// 	createData('Gingerbread', 356, 16.0),
	// ];
	return (
		<div style={{ width: "100%", display: "flex", alignItem: "center", justifyContent: "center" }}>
			<TableContainer component={Paper} style={{ width: "80%", marginTop: "10%" }}>
				<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
					<TableHead>
						<TableRow>
							<TableCell>Users</TableCell>
							<TableCell align="right">Answered</TableCell>
							<TableCell align="right">Created</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{currUsers.map((row) => (
							<TableRow
								key={row.id}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.id}
								</TableCell>
								<TableCell align="right">{row.votes}</TableCell>
								<TableCell align="right">{row.answers}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}