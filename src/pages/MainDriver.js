import React, { useContext, useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import RideCard from '../components/RideCard';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Context } from '../context/AuthContext';

const MainDriver = () => {
	const { loggedUser } = useContext(Context);

	const [rides, setRides] = useState([]);

	useEffect(() => {
		const rideArray = [];

		const q = query(
			collection(db, 'rides'),
			where('driver.uid', '==', loggedUser.uid)
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
	}, [loggedUser.uid]);

	return (
		<>
			<SearchBar link='/driver-destination' />

			<div>
				<h2 className='text-title mb-4 text-center'>Next scheduled rides</h2>

				<div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3'>
					{rides.map((data, index) => {
						return (
							<div className='col' key={index}>
								<RideCard
									driverPhoto={data.driver.photo}
									driverName={
										data.driver.firstName + ' ' + data.driver.lastName
									}
									driverRating={data.driver.evaluation}
									pickupLocation={data.currentLocation}
									destination={data.destinationLocation}
									date={data.rideDate}
									time={data.rideTime}
									price={
										data.passengerNum === 0
											? parseFloat(data.price).toFixed(2)
											: (parseFloat(data.price) / data.passengerNum).toFixed(2)
									}
									link={`/ride-info/${data.uid}`}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default MainDriver;
