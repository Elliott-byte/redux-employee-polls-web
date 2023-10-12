import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { NameForm } from '../components/NameForm';
import '@testing-library/jest-dom';

describe('NameForm', () => {
	it('will display an error if the name is not provided.', () => {
		render(<NameForm />);

		const submitButton = screen.getByTestId('submit-button');
		fireEvent.click(submitButton);
		expect(screen.getByTestId('error-header')).toBeInTheDocument();
		expect(screen.queryByTestId('success-header')).not.toBeInTheDocument();
	});

	it('will display a success message if the name is provided.', () => {
		render(<NameForm />);

		const input = screen.getByTestId('name-input');
		fireEvent.change(input, { target: { value: 'Mike' } });
		const submitButton = screen.getByTestId('submit-button');
		fireEvent.click(submitButton);
		expect(screen.getByTestId('success-header')).toBeInTheDocument();
		expect(screen.queryByTestId('error-header')).not.toBeInTheDocument();
	});
});
