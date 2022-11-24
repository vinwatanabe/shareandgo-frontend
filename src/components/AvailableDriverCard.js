import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';

const AvailableDriverCard = ({
	driverPhoto,
	driverName,
	driverRating,
	destination,
	availableSeats,
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

					<div className='destination d-flex align-items-center'>
						<span className='material-symbols-outlined card-icon me-2'>
							directions_car
						</span>
						<p className='details'>{destination}</p>
					</div>
					<div className='seats-available d-flex align-items-center'>
						<span className='material-symbols-outlined card-icon me-2'>
							person
						</span>
						<p className='details'>{availableSeats} seats available</p>
					</div>
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

export default AvailableDriverCard;
