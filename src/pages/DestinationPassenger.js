import React, { useState } from 'react';
import ScheduleIcon from '../images/schedule.png';
import ButtonPrimary from '../components/ButtonPrimary';

const DestinationPassenger = () => {
	const [values, setValues] = useState('');

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	return (
		<>
			<div className='text-center'>
				<figure>
					<img src={ScheduleIcon} alt='Schedule illustration' />
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
				</form>

				<ButtonPrimary
					text="Let's go"
					className='col-6 col-md-3 mx-auto d-block'
					link='/available-drivers'
					clickAction=''
				/>
			</div>
		</>
	);
};

export default DestinationPassenger;
