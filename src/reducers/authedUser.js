import { SET_AUTHED_USER } from "../actions/authedUser";
import { LOGOUT_ACTION } from "../actions/loginAction";

export default function authedUser(state = null, action) {
	switch (action.type) {
		case SET_AUTHED_USER:
			return action.id;
		case LOGOUT_ACTION:
			return null;
		default:
			return state;
	}
}
