import React from 'react';
import ShareGoLogo from '../images/ShareGoLogo.svg';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';

const Gateway = () => {
	// check if user is logged in
	const localStorage = window.localStorage;
	const userID = localStorage.getItem("userID");
	const userType = localStorage.getItem("userType");
	if(userID && userType) {
		// redirect to each user type's main page
		if(userType === "passenger") {
			window.location.href = "/main-passenger";
		} else if(userType === "driver") {
			window.location.href = "/main-driver";
		}
	}
	else{
		// cleanup session
		localStorage.setItem("userToken", null);
		localStorage.setItem("userID", null);
		localStorage.setItem("userFirstName", null);
		localStorage.setItem("userType", null);
	}
	return (
		<>
			<section className='col-10 col-sm-6 col-md-6 col-lg-4 position-absolute top-50 start-50 translate-middle'>
				<figure className='text-center'>
					<img
						src={ShareGoLogo}
						className='mb-3 img-fluid'
						alt='Share & Go Logo'
					/>
				</figure>
				<div className='row row-cols-2 g-3 text-center'>
					<div className='col'>
						<ButtonPrimary
							text='Register'
							className='col-12'
							link='/registration'
							clickAction=''
						/>
					</div>
					<div className='col'>
						<ButtonSecondary
							text='Login'
							className='col-12'
							link='/login'
							clickAction=''
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default Gateway;
