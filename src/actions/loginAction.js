import { _getUsers } from "../api/_DATA";
import { setAuthedUser } from "./authedUser";

export const LOGIN_ACTION = "LOGIN_ACTION";

export function handleLogin({ username, password }) {
	return (dispatch) => {
		return _getUsers().then((users) => {
			const currUser = users[username];
			console.log(username)
			console.log(currUser);

			if (!currUser || currUser.password !== password) {
				return Promise.reject("Username or password incorrect");
			} else {
				console.log("login!")
				dispatch(setAuthedUser(username));
				return Promise.resolve();
			}
		});
	};
}