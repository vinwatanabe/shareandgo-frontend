import React from 'react';
import { Link } from 'react-router-dom';
import ButtonSecondary from './ButtonSecondary';
import LogoHeader from '../images/ShareGoLogo-header.png';
import Notifications from '../images/notification-icon.png';

const Header = () => {
	return (
		<>
			<nav className='navbar navbar-dark bg-dark mb-5'>
				<div className='container d-flex'>
					<button
						class='navbar-toggler'
						type='button'
						data-bs-toggle='offcanvas'
						data-bs-target='#offcanvasDarkNavbar'
						aria-controls='offcanvasDarkNavbar'>
						<span class='navbar-toggler-icon'></span>
					</button>

					<Link to={'/main-passenger'} className='nav-brand'>
						<img src={LogoHeader} alt='Share & Go Logo' />
					</Link>

					<Link to={'/messages'}>
						<img src={Notifications} alt='Notifications' />
					</Link>

					<div
						class='offcanvas offcanvas-top text-bg-dark'
						tabindex='-1'
						id='offcanvasDarkNavbar'
						aria-labelledby='offcanvasDarkNavbarLabel'>
						<div class='offcanvas-header'>
							<h5
								class='offcanvas-title mx-auto d-block'
								id='offcanvasDarkNavbarLabel'>
								<img src={LogoHeader} alt='Share & Go' />
							</h5>
							<button
								type='button'
								class='btn-close btn-close-white'
								data-bs-dismiss='offcanvas'
								aria-label='Close'></button>
						</div>
						<div class='offcanvas-body'>
							<ul class='navbar-nav flex-grow-1 pe-3 position-absolute top-50 start-50 translate-middle'>
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
									clickAction=''
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
