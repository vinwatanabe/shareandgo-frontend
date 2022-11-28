import React from 'react';
import { Link } from 'react-router-dom';
import '../css/RideCard.css';
import RatingStars from './RatingStars';

const RideCard = ({
	driverPhoto,
	driverName,
	driverRating,
	pickupLocation,
	destination,
	date,
	time,
	price,
	link,
}) => {
	return (
		<Link to={link}>
			<div className='ride-card'>
				<div className='photo'>
					<figure className='driver-picture'>
						<img src={driverPhoto} alt={driverName} />
					</figure>
				</div>
				<div className='driver-info'>
					<p className='text-important'>{driverName}</p>

					<RatingStars rating={driverRating} />

					<p className='ride-details'>From: {pickupLocation}</p>
					<p className='ride-details'>To: {destination}</p>
				</div>
				<div className='ride-info'>
					<p className='ride-details'>{date}</p>
					<p className='ride-details'>{time}</p>
					<br></br>
					<p className='text-important'>${price}</p>
				</div>
			</div>
		</Link>
	);
};

export default RideCard;
