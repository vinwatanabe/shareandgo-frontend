import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../css/RideInfo.css';
import RatingStars from '../components/RatingStars';
import PassengerCard from '../components/PassengerCard';
import ReviewCard from '../components/ReviewCard';
import ButtonPrimary from '../components/ButtonPrimary';
import { db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { Context } from '../context/AuthContext';

const RideInfo = () => {
	const rideId = useParams().id;
	const {
		loggedUser,
		userData,
		handleDestroyRide,
		handleFinishRide,
		handleRequestRide,
	} = useContext(Context);
	const [pageData, setPageData] = useState({});
	const [pageUserData, setPageUserData] = useState({});
	const [passengers, setPassengers] = useState([]);
	const [reviews, setReviews] = useState([]);
	const [driverId, setDriverId] = useState('');
	const [isPassengerInRide, setIsPassengerInRide] = useState(false);

	useEffect(() => {
		const getPageData = async () => {
			try {
				const docRef = doc(db, 'rides', rideId);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					setPageData(docSnap.data());
					setPassengers(docSnap.data().passengers);
					setReviews(docSnap.data().reviews);
					setDriverId(docSnap.data().driver.uid);

					const allPassengers = docSnap.data().passengers;
					allPassengers.forEach((p) => {
						if (p.uid === loggedUser.uid) {
							setIsPassengerInRide(true);
						} else {
							setIsPassengerInRide(false);
						}
					});
				} else {
					console.log('No such document!');
				}
			} catch (err) {
				console.log(err.message);
			}
		};

		const getPageUserData = async () => {
			try {
				const docRef = doc(db, 'users', driverId);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					setPageUserData(docSnap.data());
				} else {
					console.log('No such document!');
				}
			} catch (err) {
				console.log(err.message);
			}
		};

		getPageData();
		getPageUserData();
	}, [rideId, driverId, loggedUser.uid]);

	const driverBtnStart = (
		<div className='row row-cols-1 row-cols-md-2 g-4 mt-3'>
			<div className='col-12 col-md-4 mx-auto'>
				<a
					href='https://www.google.com/maps/dir/New+Westminster+Station,+New+Westminster,+BC/Surrey,+BC+V3T+0G5/@49.1976446,-122.920335,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x5485d86e313a64ed:0x53b329d602e2364e!2m2!1d-122.912629!2d49.201459!1m5!1m1!1s0x5485d9d6a2aae899:0x5f30531c79960e43!2m2!1d-122.8435309!2d49.184189!3e0'
					target='_blank'
					rel='noreferrer'
					className='btn btn-primary col-12'>
					Directions
				</a>
			</div>

			<div className='col-12 col-md-4 mx-auto'>
				<ButtonPrimary
					text='Finish ride'
					className='col-12'
					link=''
					clickAction={() => handleFinishRide(rideId)}
				/>
			</div>
		</div>
	);

	const driverBtnEnd = (
		<ButtonPrimary
			text='Cancel ride'
			className='col-8 col-xs-10 col-sm-6 col-md-4 col-lg-3 mx-auto d-block'
			link=''
			clickAction={() => handleDestroyRide(rideId)}
		/>
	);

	const passengerBtnEnd = (
		<ButtonPrimary
			text='Request Ride'
			className='col-8 col-xs-10 col-sm-6 col-md-4 col-lg-3 mx-auto d-block'
			link=''
			clickAction={() => handleRequestRide(rideId, pageData.passengerNum)}
		/>
	);

	const passengerContactBtn = (
		<ButtonPrimary
			text='Contact driver'
			className='col-8 col-xs-10 col-sm-6 col-md-4 col-lg-3 mx-auto d-block'
			link='/messages'
			clickAction=''
		/>
	);

	return (
		<>
			<div className='ride-info-card col-12'>
				<div className='driver-info text-center'>
					<figure className='driver-picture mx-auto mb-3'>
						<img
							src={pageUserData.photo}
							alt={pageUserData.firstName + ' ' + pageUserData.lastName}
						/>
					</figure>

					<h2 className='text-title'>
						{pageUserData.firstName + ' ' + pageUserData.lastName}
					</h2>

					<div className='rating'>
						<RatingStars rating={parseFloat(pageUserData.evaluation)} />
					</div>

					<div className='row row-cols-1 row-cols-md-2 col-12 col-md-6 col-lg-4 mx-auto mb-2'>
						<div className='destination d-flex align-items-center justify-content-center'>
							<span className='material-symbols-outlined card-icon me-2'>
								directions_car
							</span>
							<p className='details'>{pageData.destinationLocation}</p>
						</div>
						<div className='seats-available d-flex align-items-center justify-content-center'>
							<span className='material-symbols-outlined card-icon me-2'>
								person
							</span>
							<p className='details'>
								{parseInt(pageData.numOfSeats) - pageData.passengerNum} seats
								available
							</p>
						</div>
					</div>
					<div className='col-12 mb-2'>
						<p className='details'>
							{pageData.rideDate} - {pageData.rideTime}
						</p>
					</div>
					<div className='col-12'>
						<h2 className='text-title'>
							$
							{pageData.passengerNum === 0
								? parseFloat(pageData.price).toFixed(2)
								: (parseFloat(pageData.price) / pageData.passengerNum).toFixed(
										2
								  )}{' '}
							<span className='small'>each</span>
							<span className='total-price'>
								| ${parseFloat(pageData.price).toFixed(2)}
							</span>
						</h2>
					</div>

					{userData.accountType === 'Driver' ? driverBtnStart : <></>}
				</div>
				<hr className='mt-5 mb-5' />
				<div>
					<h2 className='text-title'>Ride details</h2>
					<p>{pageData.rideDetails}</p>
				</div>
				<hr className='mt-5 mb-5' />
				<div>
					<h2 className='text-title mb-3'>Passengers</h2>

					<div className='passenger d-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>
						{passengers.map((p, index) => {
							return (
								<div className='d-flex align-items-center' key={index}>
									<PassengerCard image={p.photo} name={p.fullName} />
								</div>
							);
						})}
					</div>
				</div>
				<hr className='mt-5 mb-5' />
				<div>
					<h2 className='text-title mb-3'>Reviews</h2>

					<div className='passenger d-flex row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
						{reviews.map((r, index) => {
							return (
								<div key={index}>
									<ReviewCard
										image={r.photo}
										name={r.fullName}
										rating={r.rating}
										comment={r.comment}
									/>
								</div>
							);
						})}
					</div>
				</div>
				<hr className='mt-5 mb-5' />
				{userData.accountType === 'Driver'
					? driverBtnEnd
					: isPassengerInRide === true
					? passengerContactBtn
					: passengerBtnEnd}
			</div>
		</>
	);
};

export default RideInfo;
