import React from 'react';
import '../css/RideCard.css';

const RideCard = ({
	driverPhoto,
	driverName,
	pickupLocation,
	destination,
	date,
	time,
	price,
}) => {
	return (
		<div className='ride-card'>
			<div className='photo'>
				<figure className='driver-picture'>
					<img src={driverPhoto} alt={driverName} />
				</figure>
			</div>
			<div className='driver-info'>
				<p className='text-important'>{driverName}</p>

				<i className='star'>
					<span class='material-symbols-outlined filled'>star</span>
				</i>
				<i className='star'>
					<span class='material-symbols-outlined filled'>star</span>
				</i>
				<i className='star'>
					<span class='material-symbols-outlined filled'>star</span>
				</i>
				<i className='star'>
					<span class='material-symbols-outlined filled'>star</span>
				</i>
				<i className='star'>
					<span class='material-symbols-outlined'>star</span>
				</i>

				<p className='ride-details'>From: {pickupLocation}</p>
				<p className='ride-details'>To: {destination}</p>
			</div>
			<div className='ride-info'>
				<p className='ride-details'>{date}</p>
				<p className='ride-details'>{time}</p>
				<br></br>
				<p className='text-important'>{price}</p>
			</div>
		</div>
	);
};

export default RideCard;
