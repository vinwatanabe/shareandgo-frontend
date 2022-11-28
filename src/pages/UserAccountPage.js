import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/RideInfo.css';
import '../css/UserAccountPage.css';
import RatingStars from '../components/RatingStars';
import ButtonSecondary from '../components/ButtonSecondary';
import { Context } from '../context/AuthContext';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const UserAccountPage = () => {
	const { userData, setLoggedUser, loggedUser, handleDeleteUser } =
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

	const driverPaymentInfo = (
		<div className='row row-cols-1 row-cols-md-2 col-12 col-md-10 col-lg-8 col-xl-6 g-4 mx-auto text-center'>
			<div className='col'>
				<p className='text-label'>Bank Name</p>
				<p>{userData.payment.bankName}</p>
			</div>

			<div className='col'>
				<p className='text-label'>Institution Number</p>
				<p>{userData.payment.institutionNumber}</p>
			</div>

			<div className='col'>
				<p className='text-label'>Transit Number</p>
				<p>{userData.payment.transitNumber}</p>
			</div>

			<div className='col'>
				<p className='text-label'>Account Number</p>
				<p>{userData.payment.accountNumber}</p>
			</div>
		</div>
	);

	const passengerPaymentInfo = (
		<div className='row row-cols-1 row-cols-md-2 col-12 col-md-10 col-lg-8 col-xl-6 g-4 mx-auto text-center'>
			<div className='col'>
				<p className='text-label'>Card Number</p>
				<p>{userData.payment.cardNumber}</p>
			</div>

			<div className='col'>
				<p className='text-label'>Expiration Date</p>
				<p>{userData.payment.cardExpirationDate}</p>
			</div>

			<div className='col'>
				<p className='text-label'>CSC</p>
				<p>{userData.payment.cardCsc}</p>
			</div>

			<div className='col'>
				<p className='text-label'>Card Zip Code</p>
				<p>{userData.payment.cardZipCode}</p>
			</div>
		</div>
	);

	return (
		<>
			<div className='ride-info-card col-12'>
				<div className='driver-info text-center mb-4'>
					<figure className='driver-picture mx-auto mb-3'>
						<img
							src={userData.photo}
							alt={userData.firstName + ' ' + userData.lastName}
						/>
					</figure>

					<h2 className='text-title'>
						{userData.firstName + ' ' + userData.lastName}
					</h2>

					<div className='rating'>
						<RatingStars rating={userData.evaluation} />
					</div>

					<div className='text-center'>
						<p>{userData.accountType} account</p>
						<p>
							<Link to='/account/edit'>Edit account</Link>
						</p>
					</div>
				</div>

				<div className='row row-cols-1 row-cols-md-2 col-12 col-md-10 col-lg-8 col-xl-6 g-4 mx-auto text-center'>
					<div className='col'>
						<p className='text-label'>Email</p>
						<p>{loggedUser.email}</p>
					</div>

					<div className='col'>
						<p className='text-label'>Phone</p>
						<p>{userData.phone}</p>
					</div>

					<div className='col'>
						<p className='text-label'>Street</p>
						<p>{userData.address.street}</p>
					</div>

					<div className='col'>
						<p className='text-label'>City</p>
						<p>{userData.address.city}</p>
					</div>

					<div className='col'>
						<p className='text-label'>Province</p>
						<p>{userData.address.province}</p>
					</div>

					<div className='col'>
						<p className='text-label'>Password</p>
						<p>*******</p>
					</div>
				</div>

				<hr className='mt-5 mb-5' />

				<div className='mb-5'>
					<h2 className='text-title text-center mb-4'>Payment information</h2>
					{accountType === 'Driver' ? driverPaymentInfo : passengerPaymentInfo}
				</div>

				<ButtonSecondary
					text='Delete account'
					className='col-8 col-xs-10 col-sm-6 col-md-4 col-lg-3 mx-auto d-block'
					link='/'
					clickAction={(e) => handleDeleteUser(e)}
				/>
			</div>
		</>
	);
};

export default UserAccountPage;
