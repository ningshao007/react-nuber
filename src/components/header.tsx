import { makeVar } from '@apollo/client';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { LOCALSTORAGE_TOKEN } from '../constants';
import { useMe } from '../hooks/useMe';
import nuberLogo from '../images/logo.svg';

export const Header: React.FC = () => {
	const { data } = useMe();
	const history = useHistory();

	const handleLogout = () => {
		localStorage.removeItem(LOCALSTORAGE_TOKEN);
	};

	return (
		<>
			{!data?.me.verified && (
				<div className='bg-red-500 p-3 text-center text-base text-white'>
					<span>Please verify your email.</span>
				</div>
			)}
			<header className='py-4'>
				<div className='w-full px-5 xl:px-0 max-w-screen-2xl mx-auto flex justify-between items-center'>
					<Link to='/'>
						<img src={nuberLogo} className='w-44' alt='Nuber Eats' />
					</Link>
					<span onClick={handleLogout} className='cursor-pointer ml-auto text-red-500 text-base mr-2'>
						退出登陆
					</span>
					<span className='text-xs'>
						<Link to='/edit-profile'>
							<span className='cursor-pointer text-blue-600 text-xl mr-2'>edit profile</span>
						</Link>
					</span>
				</div>
			</header>
		</>
	);
};
