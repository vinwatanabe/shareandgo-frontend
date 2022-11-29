import React, { useContext, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import RideCard from '../components/RideCard';
import DriverImage from '../images/profile-picture-mockup.jpg'; //delete after implementation
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Context } from '../context/AuthContext';

const MainPassenger = () => {
	const { loggedUser, userData } = useContext(Context);

	const [rides, setRides] = useState([]);

	useEffect(() => {
		const rideArray = [];

		const userObj = {
			firstName: userData.firstName,
			fullName: userData.firstName + ' ' + userData.lastName,
			lastName: userData.lastName,
			photo: userData.photo,
			uid: loggedUser.uid,
		};

		const q = query(
			collection(db, 'rides'),
			where('passengers', 'array-contains', userObj)
		);

		const execQuery = async () => {
			try {
				const querySnapshot = await getDocs(q);
				querySnapshot.forEach((doc) => {
					rideArray.push(doc.data());
				});
				setRides(rideArray);
			} catch (err) {
				console.log(err.message);
			}
		};

		execQuery();
	}, [
		loggedUser.uid,
		userData.firstName,
		userData.lastName,
		userData.photo,
		userData.evaluation,
	]);

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

	for (let i = 0; i < 8; i++) {
		allUsers.push(user);
	}

	return (
		<>
			<SearchBar link='/driver-destination' />

			<div>
				<h2 className='text-title mb-4 text-center'>Next scheduled rides</h2>

				<div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3'>
					{rides.map((r, index) => {
						return (
							<div className='col' key={index}>
								<RideCard
									driverPhoto={r.driver.photo}
									driverName={r.driver.firstName + ' ' + r.driver.lastName}
									driverRating={r.driver.rating}
									pickupLocation={r.currentLocation}
									destination={r.destinationLocation}
									date={r.rideDate}
									time={r.rideTime}
									price={(
										parseFloat(r.price) / parseInt(r.passengerNum)
									).toFixed(2)}
									link={`/ride-info/${r.uid}`}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default MainPassenger;
