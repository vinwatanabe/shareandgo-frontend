import React from 'react';
import '../css/RatingStars.css';

const RatingStars = ({ rating }) => {
	let starsRating = [];

	function getStars() {
		const filledStars = Math.round(rating);
		for (let i = 0; i < filledStars; i++) {
			starsRating.push(1);
		}

		const outlineStars = 5 - filledStars;
		for (let i = 0; i < outlineStars; i++) {
			starsRating.push(0);
		}
	}

	getStars();

	return (
		<div>
			{starsRating.map((boolStar, index) => {
				//return boolStar === 1 ? starFilled : starOutline;
				if (boolStar === 1) {
					return (
						<i className='star' key={index}>
							<span className='material-symbols-outlined filled'>star</span>
						</i>
					);
				} else {
					return (
						<i className='star' key={index}>
							<span className='material-symbols-outlined'>star</span>
						</i>
					);
				}
			})}
		</div>
	);
};

export default RatingStars;
