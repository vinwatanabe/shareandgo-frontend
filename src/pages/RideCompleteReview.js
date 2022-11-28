import React, { useState, useEffect, useContext } from 'react';
import RatingStars from '../components/RatingStars';
import ButtonPrimary from '../components/ButtonPrimary';
import ButtonSecondary from '../components/ButtonSecondary';
import '../css/RideCompleteReview.css';
import DriverImage from '../images/profile-picture-mockup.jpg';
import { Context } from '../context/AuthContext';

const RideCompleteReview = () => {
	const [values, setValues] = useState('');
	const [stars, setStars] = useState(0);

	const { userData } = useContext(Context);

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	// Delete after implementation
	const ride = {
		driverName: 'Mathew Pitts',
		evaluation: '4.2',
		destinationLocation: 'Abbotsford, BC',
		availableSeats: '1',
		totalSeats: '5',
		rideDate: '10/04/2022',
		rideTime: '9:30am',
		rideTotalPrice: '222.48',
	};

	// Star selector
	useEffect(() => {
		let selectedStar = document.getElementsByClassName('star');
		for (let i = 0; i < selectedStar.length; i++) {
			selectedStar.item(i).addEventListener('click', (event) => {
				const idClicked = parseInt(event.target.id) + 1;
				if (stars === idClicked) {
					setStars(0);
				} else {
					setStars(idClicked);
				}
			});
		}
	}, [stars]);

	const btnPassenger = (
		<div className='row'>
			<div className='col'>
				<ButtonPrimary
					text='Send'
					className='col-12'
					link='/main-passenger'
					clickAction=''
				/>
			</div>

			<div className='col'>
				<ButtonSecondary
					text='Skip'
					className='col-12'
					link='/main-passenger'
					clickAction=''
				/>
			</div>
		</div>
	);

	const btnDriver = (
		<div className='row'>
			<div className='col'>
				<ButtonPrimary
					text='Send'
					className='col-12'
					link='/main-driver'
					clickAction=''
				/>
			</div>

			<div className='col'>
				<ButtonSecondary
					text='Skip'
					className='col-12'
					link='/main-driver'
					clickAction=''
				/>
			</div>
		</div>
	);

	return (
		<>
			<div className='mb-5 text-center'>
				<h2 className='text-title'>Your ride is complete.</h2>
				<p>Send a review about your driver.</p>
			</div>

			<div className='ride-complete text-center col-12 col-sm-8 col-lg-6 mx-auto'>
				<figure className='driver-picture mx-auto mb-3'>
					<img src={DriverImage} alt='Name' />
				</figure>

				<h2 className='text-title'>{ride.driverName}</h2>
				<div className='star-select'>
					<RatingStars rating={stars} />
				</div>

				<form className='mt-4 mb-4'>
					<div className='form-floating'>
						<textarea
							className='form-control'
							placeholder='Review your ride'
							id='review-ride'
							onChange={(e) => handleChange(e)}></textarea>
						<label htmlFor='review-ride'>Review your ride</label>
					</div>
				</form>

				{userData.accountType === 'Passenger' ? btnPassenger : btnDriver}
			</div>
		</>
	);
};

export default RideCompleteReview;
