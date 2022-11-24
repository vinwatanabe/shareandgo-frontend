import React from 'react';
import AvailableDriverCard from '../components/AvailableDriverCard';
import DriverImage from '../images/profile-picture-mockup.jpg'; //delete after implementation

const DriversAvailable = () => {
	// Delete after implementation
	const driver = {
		name: 'Mathew Pitts',
		rating: '4',
		destination: 'Abbotsford, BC',
		totalAvailableSeats: '5',
		availableSeats: '3',
		rideDate: '10/15/2022',
		rideTime: '9:45am',
		rideTotalPrice: '128.95',
	};

	const allUsers = [];

	for (let i = 0; i < 20; i++) {
		allUsers.push(driver);
	}

	return (
		<>
			<div>
				<h2 className='text-title mb-4 text-center'>Available Drivers</h2>

				<div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3'>
					{allUsers.map((userData, index) => {
						return (
							<div className='col' key={index}>
								<AvailableDriverCard
									driverPhoto={DriverImage}
									driverName={driver.name}
									driverRating={driver.rating}
									destination={driver.destination}
									availableSeats={driver.availableSeats}
									date={driver.rideDate}
									time={driver.rideTime}
									price={(
										driver.rideTotalPrice /
										(driver.totalAvailableSeats - driver.availableSeats + 1)
									).toFixed(2)}
									link='/ride-info'
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default DriversAvailable;
