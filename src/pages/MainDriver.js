import React, { useContext, useState } from 'react';
import SearchBar from '../components/SearchBar';
import RideCard from '../components/RideCard';
import { db } from '../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Context } from '../context/AuthContext';

const MainDriver = () => {
	const { loggedUser, userData } = useContext(Context);

	const [rides, setRides] = useState([]);

	const rideArray = [];

	const q = query(
		collection(db, 'rides'),
		where('driver', '==', loggedUser.uid)
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
	console.log(userData);

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
									driverPhoto={userData.photo}
									driverName={userData.firstName + ' ' + userData.lastName}
									driverRating={userData.evaluation}
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
