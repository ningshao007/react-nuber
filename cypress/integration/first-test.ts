import { findByPlaceholderText } from '@testing-library/dom';

describe('First Test', () => {
	it('should go to homepage', () => {
		cy.visit('http://localhost:3000').title().should('eq', 'Login | Nuber Eats');
	});

	it('can fill out the form', () => {
		cy.visit('/');
		// .get('[name="email"]')
		cy.findByPlaceholderText(/Email/i).type('test333@test.com');
		// .get('[name="password"]')
		cy.findByPlaceholderText(/Password/i).type('1');
		cy.findByRole('button')
			// .get('.text-lg')
			.should('not.have.class', 'pointer-events-none');
	});

	it('can see email / password validators errors', () => {
		cy.visit('/');
		// .get('[name="email"]')
		cy.findByPlaceholderText(/email/i).type('xxxYyy');
		// .get('.text-red-500')
		cy.findByRole('alert').should('have.text', 'Please enter a valid email');
	});
});
