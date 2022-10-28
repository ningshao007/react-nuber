import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import React from 'react';
import { ME_QUERY } from '../../hooks/useMe';
import { Header } from '../header';

describe('<Header />', () => {
	// it('renders verify banner', async () => {
	// 	await waitFor(async () => {
	// 		const { getByText } = render(
	// 			<MockedProvider
	// 				mocks={[
	// 					{
	// 						request: {
	// 							query: ME_QUERY,
	// 						},
	// 						result: {
	// 							data: {
	// 								me: {
	// 									id: 1,
	// 									email: '',
	// 									role: '',
	// 									verified: false,
	// 								},
	// 							},
	// 						},
	// 					},
	// 				]}>
	// 				<Router>
	// 					<Header />
	// 				</Router>
	// 			</MockedProvider>,
	// 		);
	// 		await new Promise((resolve) => setTimeout(resolve, 0));
	// 		getByText('Please verify your email.');
	// 	});
	// });
	it('renders without verify banner', async () => {
		await waitFor(async () => {
			// If you want to query something that does not exists,use queryByText not getByText,getByText will be fail.
			await new Promise((resolve) => setTimeout(resolve, 0));

			const { queryByText } = render(
				<MockedProvider
					mocks={[
						{
							request: {
								query: ME_QUERY,
							},
							result: {
								data: {
									me: {
										id: 1,
										email: '',
										role: '',
										verified: true,
									},
								},
							},
						},
					]}>
					<Router>
						<Header />
					</Router>
				</MockedProvider>,
			);
			expect(queryByText('Please verify your email.')).toBeNull();
		});
	});
});
