import React, { useContext, useState, useEffect } from 'react';
import AvailableDriverCard from '../components/AvailableDriverCard';
import { Context } from '../context/AuthContext';

const DriversAvailable = () => {
	const { rideData, rideSelection } = useContext(Context);
	const [availableRides, setAvailableRides] = useState([]);

	useEffect(() => {
		let selectedRides = [];

		rideData.forEach((ride) => {
			if (rideSelection.rideDate === ride.rideDate) {
				if (rideSelection.currentLocation === ride.currentLocation) {
					selectedRides.push(ride);
				}
			}
		});

		setAvailableRides(selectedRides);
	}, [rideData, rideSelection.currentLocation, rideSelection.rideDate]);

	const rideCards = availableRides.map((r, index) => {
		return (
			<div className='col' key={index}>
				<AvailableDriverCard
					driverPhoto={r.driver.photo}
					driverName={r.driver.firstName + ' ' + r.driver.lastName}
					driverRating={r.driver.rating}
					destination={r.destinationLocation}
					availableSeats={r.numOfSeats}
					date={r.rideDate}
					time={r.rideTime}
					price={(parseFloat(r.price) / (parseInt(r.passengerNum) + 1)).toFixed(
						2
					)}
					link={`/ride-info/${r.uid}`}
				/>
			</div>
		);
	});

	return (
		<>
			<div>
				<h2 className='text-title mb-4 text-center'>Available Drivers</h2>

				<div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3'>
					{availableRides.length === 0 ? (
						<h2 className='text-title'>No rides available</h2>
					) : (
						rideCards
					)}
				</div>
			</div>
		</>
	);
};

export default DriversAvailable;
