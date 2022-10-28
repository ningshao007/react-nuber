import React, { ButtonHTMLAttributes } from 'react';

interface IButtonProps {
	canClick: boolean;
	loading: boolean;
	actionText: string;
}

// React.FC<IButtonProps & ButtonHTMLAttributes<HTMLElement>>

export const Button: React.FC<IButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({ canClick, loading, actionText }) => (
	<button disabled={loading} className={`text-lg font-medium focus:outline-none text-white py-4  transition-colors ${canClick ? 'bg-lime-600 hover:bg-lime-700' : 'bg-gray-300 pointer-events-none'}`}>
		{loading ? 'Loading...' : actionText}
	</button>
);
