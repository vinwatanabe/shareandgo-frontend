import React, { useContext } from 'react';
import RequestImage from '../images/request.svg';
import CarConfirmedImage from '../images/car-confirmed.svg';
import ButtonPrimary from '../components/ButtonPrimary';
import { Context } from '../context/AuthContext';

const RideStatus = ({ status }) => {
	const { setupRide, handleCreateRide } = useContext(Context);

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

	const creatingRide = {
		image: 'RequestImage',
		altImage: 'Illustration of two people sitted in a car',
		title: `The total of your ride is $${setupRide.price}`,
		text: 'The price will be divide between all the passenger of your ride',
		buttonText: 'Accept and create ride',
		buttonLink: '',
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
		} else if (status === 'creating') {
			return creatingRide;
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

	const btnCreate = (
		<ButtonPrimary
			text={statusPage.buttonText}
			className='col-12 col-xs-10 col-sm-10 col-md-10 col-lg-6 mx-auto d-block'
			link={statusPage.buttonLink}
			clickAction={(e) => handleCreateRide(e, setupRide)}
		/>
	);

	const btnAwaiting = (
		<ButtonPrimary
			text={statusPage.buttonText}
			className='col-12 col-xs-10 col-sm-10 col-md-10 col-lg-6 mx-auto d-block'
			link={statusPage.buttonLink}
			clickAction=''
		/>
	);

	const btnConfirmed = (
		<ButtonPrimary
			text={statusPage.buttonText}
			className='col-12 col-xs-10 col-sm-10 col-md-10 col-lg-6 mx-auto d-block'
			link={statusPage.buttonLink}
			clickAction=''
		/>
	);

	return (
		<>
			<div className=' col-10 col-xs-6 col-md-6 col-lg-6 text-center mx-auto'>
				<figure className='mb-5'>{getImage()}</figure>

				<h2 className='text-title'>{statusPage.title}</h2>
				<p className='mb-4'>{statusPage.text}</p>

				{status === 'waiting'
					? btnAwaiting
					: status === 'confirmed'
					? btnConfirmed
					: btnCreate}
			</div>
		</>
	);
};

export default RideStatus;
