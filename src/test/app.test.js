import * as React from 'react';
import { render } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

describe('Dashboard', () => {
	it('matches the snapshot', () => {
		const mockStore = createStore(reducers);
		const { asFragment } = render(
			<Provider store={mockStore}>
				<MemoryRouter>
					<App />
				</MemoryRouter>
			</Provider>
		);

		expect(asFragment()).toMatchSnapshot();
	});
});
