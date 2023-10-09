const checkAuth = (store) => (next) => (action) => {
	const state = store.getState();
	const currPath = window.location.pathname;
	console.log("checkAuth", state, currPath)

	if (!state.autherUser && currPath !== "/") {
		window.location.href = '/';
		return;
	}
	return next(action);
}

export default checkAuth;
