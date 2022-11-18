import React from 'react';
import '../css/ReviewCard.css';
import RatingStars from './RatingStars';

const ReviewCard = ({ image, name, rating, comment }) => {
	return (
		<div>
			<div className='d-flex align-items-center mb-2'>
				<figure className='passenger-picture'>
					<img src={image} alt={name} />
				</figure>

				<div className='ms-2'>
					<p>{name}</p>
					<RatingStars rating={rating} />
				</div>
			</div>

			<div className='col-12'>
				<p>{comment}</p>
			</div>
		</div>
	);
};

export default ReviewCard;
