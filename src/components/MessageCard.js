import React from 'react';
import { Link } from 'react-router-dom';
import '../css/MessageCard.css';

const MessageCard = ({
	driverPhoto,
	driverName,
	destination,
	date,
	time,
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

					<div className='destination d-flex align-items-center'>
						<span className='material-symbols-outlined card-icon me-2'>
							directions_car
						</span>
						<p className='details'>{destination}</p>
					</div>
				</div>
				<div className='ride-info'>
					<p className='details new-message'>
						<span className='material-symbols-outlined me-1'>circle</span>
						New
					</p>
					<p className='ride-details'>{date}</p>
					<p className='ride-details'>{time}</p>
				</div>
			</div>
		</Link>
	);
};

export default MessageCard;
