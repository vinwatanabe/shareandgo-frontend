import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

import ButtonSecondary from './ButtonSecondary';
import LogoHeader from '../images/ShareGoLogo-header.svg';
import { Context } from '../context/AuthContext';

const Header = () => {
	const { userData, setLoggedUser, handleSignOut, authenticated } =
		useContext(Context);

	const [accountType, setAccountType] = useState('');

	onAuthStateChanged(auth, (currentUser) => {
		setLoggedUser(currentUser);
	});

	useEffect(() => {
		if (userData.accountType === 'Driver') {
			setAccountType(userData.accountType);
		} else if (userData.accountType === 'Passenger') {
			setAccountType(userData.accountType);
		} else {
			setAccountType('');
		}
	}, [userData.accountType, accountType, setAccountType]);

	const driverLink = (
		<Link to={'/main-driver'} className='nav-brand flex-fill text-center'>
			<img src={LogoHeader} alt='Share & Go Logo' />
		</Link>
	);

	const passengerLink = (
		<Link to={'/main-passenger'} className='nav-brand flex-fill text-center'>
			<img src={LogoHeader} alt='Share & Go Logo' />
		</Link>
	);

	const noLink = (
		<Link to={'/'} className='nav-brand flex-fill text-center'>
			<img src={LogoHeader} alt='Share & Go Logo' />
		</Link>
	);

	const navToggler = (
		<button
			className='navbar-toggler'
			type='button'
			data-bs-toggle='offcanvas'
			data-bs-target='#offcanvasDarkNavbar'
			aria-controls='offcanvasDarkNavbar'>
			<span className='material-symbols-outlined icon'>menu</span>
		</button>
	);

	const notification = (
		<Link to={'/messages'}>
			<span className='material-symbols-outlined icon filled'>
				notifications
			</span>
		</Link>
	);

	return (
		<>
			<nav className='navbar navbar-dark bg-dark mb-5'>
				<div className='container d-flex align-items-center'>
					{authenticated ? navToggler : <></>}

					{accountType === 'Passenger'
						? passengerLink
						: accountType === 'Driver'
						? driverLink
						: noLink}

					{authenticated ? notification : <></>}

					<div
						className='offcanvas offcanvas-top text-bg-dark'
						tabIndex='-1'
						id='offcanvasDarkNavbar'
						aria-labelledby='offcanvasDarkNavbarLabel'>
						<div className='offcanvas-header'>
							<h5
								className='offcanvas-title mx-auto d-block'
								id='offcanvasDarkNavbarLabel'>
								<img src={LogoHeader} alt='Share & Go' />
							</h5>
							<button
								type='button'
								className='btn-close btn-close-white'
								data-bs-dismiss='offcanvas'
								aria-label='Close'></button>
						</div>
						<div className='offcanvas-body'>
							<ul className='navbar-nav flex-grow-1 pe-3 position-absolute top-50 start-50 translate-middle'>
								<li
									className='nav-item text-center'
									data-bs-dismiss='offcanvas'>
									<Link to={'/user-account'} className='nav-link'>
										My Account
									</Link>
								</li>

								<li
									className='nav-item text-center'
									data-bs-dismiss='offcanvas'>
									<Link to={'/messages'} className='nav-link'>
										Messages
									</Link>
								</li>
							</ul>
							<div className='row' data-bs-dismiss='offcanvas'>
								<ButtonSecondary
									text='Log out'
									className='col-6 col-lg-2 col-md-3 col-sm-3 col-xs-3 btn-white position-absolute bottom-0 start-50 translate-middle-x mb-5'
									link='/'
									clickAction={handleSignOut}
								/>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
