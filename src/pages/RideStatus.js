import React from 'react';
import RequestImage from '../images/request.svg';
import CarConfirmedImage from '../images/car-confirmed.svg';
import ButtonPrimary from '../components/ButtonPrimary';

const RideStatus = ({ status }) => {
	const waitingDriver = {
		image: 'RequestImage',
		altImage: 'Illustration of two people sitted in a car',
		title: 'Your request was sent to the driver.',
		text: 'Please, wait until the driver confirms your ride.',
		buttonText: 'Ok',
		buttonLink: '/main-passenger',
	};

	const rideAccepted = {
		image: 'CarConfirmedImage',
		altImage: 'Illustration of two people sitted in a car',
		title: 'accepted your request',
		text: 'Good news! Your ride was confirmed.',
		buttonText: 'Ok',
		buttonLink: '/main-passenger',
	};

	let statusPage = checkStatus();

	const requestImg = (
		<img src={RequestImage} className='img-fluid' alt={statusPage.altImage} />
	);

	const carConfirmedImg = (
		<img
			src={CarConfirmedImage}
			className='img-fluid'
			alt={statusPage.altImage}
		/>
	);

	function checkStatus() {
		if (status === 'waiting') {
			return waitingDriver;
		} else if (status === 'confirmed') {
			return rideAccepted;
		}
	}

	function getImage() {
		switch (statusPage.image) {
			case 'RequestImage':
				return requestImg;
			case 'CarConfirmedImage':
				return carConfirmedImg;
			default:
				return requestImg;
		}
	}

	checkStatus();

	return (
		<>
			<div className=' col-10 col-xs-6 col-md-6 col-lg-6 text-center mx-auto'>
				<figure className='mb-5'>{getImage()}</figure>

				<h2 className='text-title'>Mathew {statusPage.title}</h2>
				<p className='mb-4'>{statusPage.text}</p>

				<ButtonPrimary
					text={statusPage.buttonText}
					className='col-8 col-xs-10 col-sm-6 col-md-4 col-lg-3 mx-auto d-block'
					link={statusPage.buttonLink}
					clickAction=''
				/>
			</div>
		</>
	);
};

export default RideStatus;
