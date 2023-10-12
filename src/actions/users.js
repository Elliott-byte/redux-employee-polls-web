import { _getUsers } from "../api/_DATA";

export const RECEIVE_USERS = "RECEIVE_USERS";

export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	}
}

export function handleReceiveUsers() {
	return (dispatch) => {
		_getUsers().then((users) => {
			dispatch(receiveUsers(users));
			return Promise.resolve();
		}).catch((e) => { return Promise.reject(e) });
	}
}