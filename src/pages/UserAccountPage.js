import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../css/RideInfo.css';
import '../css/UserAccountPage.css';
import RatingStars from '../components/RatingStars';
import ButtonSecondary from '../components/ButtonSecondary';
import { Context } from '../context/AuthContext';

const UserAccountPage = () => {
	// Delete after implementation
	const user = {
		name: 'Ezra Melton',
		evaluation: '4.2',
		email: 'ezra.melton@gmail.com',
		phone: '+1 778 386 9965',
		city: 'New Westminster',
		province: 'British Columbia',
		password: '********',
		payment: {
			cardCompany: 'MasterCard',
			nameOnCard: 'Ezra T. Melton',
			cardNumber: '**********361',
			expirationDate: '2025/06',
		},
	};

	const { userData } = useContext(Context);

	return (
		<>
			<div className='ride-info-card col-12'>
				<div className='driver-info text-center mb-4'>
					<figure className='driver-picture mx-auto mb-3'>
						<img
							src={userData.photo}
							alt={userData.firstname + ' ' + userData.lastname}
						/>
					</figure>

					<h2 className='text-title'>
						{userData.firstname + ' ' + userData.lastname}
					</h2>

					<div className='rating'>
						<RatingStars rating={user.evaluation} />
					</div>

					<div className='text-center'>
						<p>{userData.accounttype} account</p>
						<p>
							<Link to='/account/edit'>Edit account</Link>
						</p>
					</div>
				</div>

				<div className='row row-cols-1 row-cols-md-2 col-12 col-md-10 col-lg-8 col-xl-6 g-4 mx-auto text-center'>
					<div className='col'>
						<p className='text-label'>Email</p>
						<p>{userData.email}</p>
					</div>

					<div className='col'>
						<p className='text-label'>Phone</p>
						<p>{userData.phone}</p>
					</div>

					<div className='col'>
						<p className='text-label'>City</p>
						<p>{user.city}</p>
					</div>

					<div className='col'>
						<p className='text-label'>Province</p>
						<p>{user.province}</p>
					</div>

					<div className='col'>
						<p className='text-label'>Password</p>
						<p>*******</p>
					</div>
				</div>

				<hr className='mt-5 mb-5' />

				<div className='mb-5'>
					<h2 className='text-title text-center mb-4'>Payment information</h2>

					<div className='row row-cols-1 row-cols-md-2 col-12 col-md-10 col-lg-8 col-xl-6 g-4 mx-auto text-center'>
						<div className='col'>
							<p className='text-label'>Card Company</p>
							<p>{user.payment.cardCompany}</p>
						</div>

						<div className='col'>
							<p className='text-label'>Name on card</p>
							<p>{user.payment.nameOnCard}</p>
						</div>

						<div className='col'>
							<p className='text-label'>Card number</p>
							<p>{user.payment.cardNumber}</p>
						</div>

						<div className='col'>
							<p className='text-label'>Expiration date</p>
							<p>{user.payment.expirationDate}</p>
						</div>
					</div>
				</div>

				<ButtonSecondary
					text='Delete account'
					className='col-8 col-xs-10 col-sm-6 col-md-4 col-lg-3 mx-auto d-block'
					link='/'
					clickAction=''
				/>
			</div>
		</>
	);
};

export default UserAccountPage;
