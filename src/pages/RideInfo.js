import React from 'react';
import '../css/RideInfo.css';
import DriverImage from '../images/profile-picture-mockup.jpg';
import RatingStars from '../components/RatingStars';
import PassengerCard from '../components/PassengerCard';
import ReviewCard from '../components/ReviewCard';
import ButtonPrimary from '../components/ButtonPrimary';

const RideInfo = () => {
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
		rideDetails:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis est sit amet velit dapibus pharetra. Aliquam non ullamcorper lectus. Proin ultricies orci nisi, non scelerisque metus fringilla eget.',
		passengers: [
			'Daron Reilly',
			'Karina Durnham',
			'Esmeralda Gill',
			'Bruno Jarvis',
		],
		reviews: {
			passenger: [
				{
					name: 'Daron Reilly',
					rating: '3',
					comment:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis est sit.',
				},
				{
					name: 'Cara Moon',
					rating: '4',
					comment:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis est sit.',
				},
				{
					name: 'Robert Deniro',
					rating: '2',
					comment:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis est sit.',
				},
				{
					name: 'Sylverster Stalone',
					rating: '4',
					comment:
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis est sit.',
				},
			],
		},
	};

	return (
		<>
			<div className='ride-info-card col-12'>
				<div className='driver-info text-center'>
					<figure className='driver-picture mx-auto mb-3'>
						<img src={DriverImage} alt={ride.driverName} />
					</figure>

					<h2 className='text-title'>{ride.driverName}</h2>

					<div className='rating'>
						<RatingStars rating={ride.evaluation} />
					</div>

					<div className='row row-cols-1 row-cols-md-2 col-12 col-md-6 col-lg-4 mx-auto mb-2'>
						<div className='destination d-flex align-items-center justify-content-center'>
							<span className='material-symbols-outlined card-icon me-2'>
								directions_car
							</span>
							<p className='details'>{ride.destinationLocation}</p>
						</div>
						<div className='seats-available d-flex align-items-center justify-content-center'>
							<span className='material-symbols-outlined card-icon me-2'>
								person
							</span>
							<p className='details'>{ride.availableSeats} seat available</p>
						</div>
					</div>
					<div className='col-12 mb-2'>
						<p className='details'>
							{ride.rideDate} - {ride.rideTime}
						</p>
					</div>
					<div className='col-12'>
						<h2 className='text-title'>
							{ride.rideTotalPrice / (ride.totalSeats - ride.availableSeats)}{' '}
							<span className='small'>each</span>
							<span className='total-price'>| {ride.rideTotalPrice}</span>
						</h2>
					</div>
				</div>

				<hr className='mt-5 mb-5' />

				<div>
					<h2 className='text-title'>Ride details</h2>
					<p>{ride.rideDetails}</p>
				</div>

				<hr className='mt-5 mb-5' />

				<div>
					<h2 className='text-title mb-3'>Passengers</h2>

					<div className='passenger d-flex row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>
						{ride.passengers.map((passenger, index) => {
							return (
								<div className='d-flex align-items-center' key={index}>
									<PassengerCard image={DriverImage} name={passenger} />
								</div>
							);
						})}
					</div>
				</div>

				<hr className='mt-5 mb-5' />

				<div>
					<h2 className='text-title mb-3'>Reviews</h2>

					<div className='passenger d-flex row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4'>
						{ride.reviews.passenger.map((passenger, index) => {
							return (
								<div key={index}>
									<ReviewCard
										image={DriverImage}
										name={passenger.name}
										rating={passenger.rating}
										comment={passenger.comment}
									/>
								</div>
							);
						})}
					</div>
				</div>

				<hr className='mt-5 mb-5' />

				<ButtonPrimary
					text='Request Ride'
					className='col-8 col-xs-10 col-sm-6 col-md-4 col-lg-3 mx-auto d-block'
					link='/ride-status'
					clickAction=''
				/>
			</div>
		</>
	);
};

export default RideInfo;
