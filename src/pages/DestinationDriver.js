import React, { useState, useContext } from 'react';
import ScheduleIcon from '../images/schedule.svg';
import ButtonPrimary from '../components/ButtonPrimary';
import { Context } from '../context/AuthContext';

const DestinationDriver = () => {
	const [values, setValues] = useState('');
	const { destination, userData, handlesetUpRide } = useContext(Context);

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	const driverDetails = (
		<>
			<div className='col-md-12'>
				<input
					type='text'
					id='numOfSeats'
					placeholder='Number of seats available'
					className='form-control'
					onChange={(e) => handleChange(e)}
				/>
			</div>

			<div className='form-floating'>
				<textarea
					className='form-control'
					placeholder='Add more details about your ride'
					id='rideDetails'
					onChange={(e) => handleChange(e)}></textarea>
				<label htmlFor='review-ride'>Add more details about your ride</label>
			</div>
		</>
	);

	const driverBtn = (
		<ButtonPrimary
			text="Let's go"
			className='col-6 col-md-3 mx-auto d-block'
			link='/create-ride'
			clickAction={(e) => handlesetUpRide(e, values)}
		/>
	);

	const passengerBtn = (
		<ButtonPrimary
			text="Let's go"
			className='col-6 col-md-3 mx-auto d-block'
			link=''
			clickAction=''
		/>
	);

	return (
		<>
			<div className='text-center'>
				<figure>
					<img
						src={ScheduleIcon}
						className='img-fluid'
						alt='Schedule illustration'
					/>
				</figure>
			</div>

			<div className='text-center mt-5'>
				<h2 className='text-title mb-4'>Let's schedule your ride</h2>

				<form className='row col-12 col-md-6 g-4 mb-4 mx-auto'>
					<div className='col-md-12'>
						<input
							type='text'
							id='currentLocation'
							placeholder='Where are you now?'
							className='form-control'
							onChange={(e) => handleChange(e)}
						/>
					</div>

					<div className='col-md-12'>
						<input
							type='text'
							id='destinationLocation'
							placeholder='Where are you going?'
							className='form-control'
							value={destination || values.destinationLocation}
							onChange={(e) => handleChange(e)}
						/>
					</div>

					<div className='col-md-6'>
						<input
							type='date'
							id='rideDate'
							placeholder='Select date'
							className='form-control'
							onChange={(e) => handleChange(e)}
						/>
					</div>

					<div className='col-md-6'>
						<input
							type='time'
							id='rideTime'
							placeholder='Select time'
							className='form-control'
							onChange={(e) => handleChange(e)}
						/>
					</div>

					{userData.accountType === 'Driver' ? driverDetails : <></>}
				</form>

				{userData.accountType === 'Driver' ? driverBtn : passengerBtn}
			</div>
		</>
	);
};

export default DestinationDriver;
