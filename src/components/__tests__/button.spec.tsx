import { render } from '@testing-library/react';
import React from 'react';
import { Button } from '../button';

// testing the react component from the user point
describe('<Button />', () => {
	it('should render OK with props', () => {
		const { getByText, rerender } = render(<Button canClick={true} loading={false} actionText={'test'} />);
		getByText('test');
		rerender(<Button canClick={true} loading={true} actionText='test' />);
		getByText('Loading...');
	});
	it('should display loading', () => {
		const { getByText, container } = render(<Button canClick={false} loading={true} actionText={'test'} />);
		getByText('Loading...');
		expect(container.firstChild).toHaveClass('pointer-events-none');
	});
});
