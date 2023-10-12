import { SET_AUTHED_USER } from "../actions/authedUser";

const checkAuth = (store) => (next) => (action) => {
	const state = store.getState();
	const currPath = window.location.pathname;
	// console.log("checkAuth", state, currPath)
	// console.log("checkAuth", action.type !== SET_AUTHED_USER)
	// console.log("checkAuth", state.authedUser == null)

	if (action.type !== SET_AUTHED_USER && state.authedUser == null && currPath !== "/") {
		window.location.href = '/';
	}
	return next(action);
}

export default checkAuth;
