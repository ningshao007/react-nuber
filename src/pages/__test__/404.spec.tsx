import { render, waitFor } from '../../test-utils';
import React from 'react';
import { NotFound } from '../404';
import { BrowserRouter } from 'react-router-dom';

describe('<NotFound />', () => {
	it('renders OK', async () => {
		render(
			<BrowserRouter>
				<NotFound />
			</BrowserRouter>,
		);
		await waitFor(() => {
			expect(document.title).toBe('Not Found | Nuber Eats');
		});
	});
});
