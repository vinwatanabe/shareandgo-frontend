import React from 'react';
import '../css/PassengerCard.css';

const PassengerCard = ({ image, name }) => {
	return (
		<>
			<figure className='passenger-picture'>
				<img src={image} alt={name} />
			</figure>
			<p className='ms-2'>{name}</p>
		</>
	);
};

export default PassengerCard;
