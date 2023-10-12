import { SET_AUTHED_USER, setAuthedUser } from '../actions/authedUser';
import { RECEIVE_USERS, receiveUsers } from '../actions/users';

describe('receiveUsers Action Creator', () => {
	it('should create an action to receive users', () => {
		const mockUsers = {
			user1: {
				id: 'user1',
				name: 'User One'
			},
			user2: {
				id: 'user2',
				name: 'User Two'
			}
		};

		const expectedAction = {
			type: RECEIVE_USERS,
			users: mockUsers
		};

		expect(receiveUsers(mockUsers)).toEqual(expectedAction);
	});
});


describe('setAuthedUser Action Creator', () => {
	it('should create an action to set the authenticated user', () => {
		const userId = 'testUserId';
		const expectedAction = {
			type: SET_AUTHED_USER,
			id: userId
		};

		expect(setAuthedUser(userId)).toEqual(expectedAction);
	});
});

describe('setAuthedUser Action Creator - Failure Test', () => {
	it('should fail this test intentionally', () => {
		const userId = 'testUserId';
		const unexpectedAction = {
			type: SET_AUTHED_USER,
			id: 'wrongUserId'
		};

		expect(setAuthedUser(userId)).not.toEqual(unexpectedAction);
	});
});