import React from 'react';
import RideCard from '../components/RideCard';
import DriverImage from '../images/profile-picture-mockup.jpg'; //delete after implementation

const DriversAvailable = () => {
	// Delete after implementation
	const user = [
		{ DriverImage },
		'Mathew Pitts',
		'700 Royal Street',
		'31254 Charlotte Avenue',
		'10/15/2022',
		'9:45am',
		'$58.42',
		'/ride-info',
	];

	const allUsers = [];

	for (let i = 0; i < 20; i++) {
		allUsers.push(user);
	}

	return (
		<>
			<div>
				<h2 className='text-title mb-4 text-center'>Available Drivers</h2>

				<div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3'>
					{allUsers.map((userData) => {
						return (
							<div className='col'>
								<RideCard
									driverPhoto={DriverImage}
									driverName={userData[1]}
									pickupLocation={userData[2]}
									destination={userData[3]}
									date={userData[4]}
									time={userData[5]}
									price={userData[6]}
									link={userData[7]}
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
