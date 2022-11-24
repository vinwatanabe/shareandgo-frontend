import React from 'react';
import { Link } from 'react-router-dom';
import '../css/RideInfo.css';
import '../css/UserAccountPage.css';
//import DriverImage from '../images/profile-picture-mockup.jpg';
import RatingStars from '../components/RatingStars';
import ButtonSecondary from '../components/ButtonSecondary';
import User from '../controllers/User';


const UserAccountPage = () => {

	const [user, setUser] = React.useState([]);
	const [rating, setRating] = React.useState('');
	const getUserInfo = async () => { const user = await User.getUser(); setUser(user); };
	const getRating = async () => { const rating = await User.getEvaluation(); rating.length===0 ? setRating('0') : setRating(rating[0].rating); };
	(user.length === 0) && getUserInfo();
	(!rating) && getRating();
	// console.log(user.hasOwnProperty('address'));
	// console.log(rating)

	return (
		<>
			<div className='ride-info-card col-12'>
				<div className='driver-info text-center mb-4'>
					<figure className='driver-picture mx-auto mb-3'>
						{ (user.photo) && (<img src={user.photo} alt={user.firstname} />)}
					</figure>

					<h2 className='text-title'>{user.firstname}</h2>

					<div className='rating'>
						<RatingStars rating={rating} />
					</div>

					<div className='text-center'>
						<p>User account</p>
						<p>
							<Link to='/account/edit'>Edit account</Link>
						</p>
					</div>
				</div>

				<div className='row row-cols-1 row-cols-md-2 col-12 col-md-10 col-lg-8 col-xl-6 g-4 mx-auto text-center'>
					<div className='col'>
						<p className='text-label'>Email</p>
						<p>{user.email}</p>
					</div>

					<div className='col'>
						<p className='text-label'>Phone</p>
						<p>{user.phone}</p>
					</div>
				{ (user.hasOwnProperty('address')) ? (
					<>
					<div className='col'>
						<p className='text-label'>Street</p>
						<p>{user.address[0].address}</p>
					</div>

					<div className='col'>
						<p className='text-label'>City</p>
						<p>{user.address[0].city}</p>
					</div>

					<div className='col'>
						<p className='text-label'>Province</p>
						<p>{user.address[0].province}</p>
					</div>

					<div className='col'>
						<p className='text-label'>Zip</p>
						<p>{user.address[0].zip}</p>
					</div>
					</>
				):null}
				</div>

				<hr className='mt-5 mb-5' />
				{ (user.hasOwnProperty('payment')) && (
					<>
				<div className='mb-5'>
					<h2 className='text-title text-center mb-4'>Payment information</h2>

					<div className='row row-cols-1 row-cols-md-2 col-12 col-md-10 col-lg-8 col-xl-6 g-4 mx-auto text-center'>
						<div className='col'>
							<p className='text-label'>Type</p>
							<p>{user.payment[0].type.toUpperCase()}</p>
						</div>

						<div className='col'>
							<p className='text-label'>Name on card</p>
							<p>{user.payment[0].name}</p>
						</div>

						<div className='col'>
							<p className='text-label'>Card number</p>
							<p>{user.payment[0].pan}</p>
						</div>

						<div className='col'>
							<p className='text-label'>Expiration date</p>
							<p>{user.payment[0].expiration}</p>
						</div>
					</div>
				</div>
				</>)}

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
