import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/MessageContent.css';
import PassengerCard from '../components/PassengerCard';
import DriverImage from '../images/profile-picture-mockup.jpg';

const MessageContent = () => {
	const [values, setValues] = useState('');

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	// Delete this part and adapt to the backend calls
	const otherPersonMessage = (
		<div className='other-person d-flex'>
			<div className='message-picture me-3'>
				<figure>
					<img src={DriverImage} alt='driver name' />
				</figure>
			</div>

			<div className='message-content col-10 col-md-4'>
				<p>
					Hello, I already arrived. I've parked in front of your house in the
					other side of the street.
				</p>
				<p className='time'>Today - 9:30 am</p>
			</div>
		</div>
	);

	const personMessage = (
		<div className='person d-flex justify-content-end'>
			<div className='message-picture ms-3 order-2'>
				<figure>
					<img src={DriverImage} alt='driver name' />
				</figure>
			</div>

			<div className='message-content col-10 col-md-4 order-1'>
				<p>
					Hello, I already arrived. I've parked in front of your house in the
					other side of the street.
				</p>
				<p className='time'>Today - 9:30 am</p>
			</div>
		</div>
	);

	return (
		<>
			<div>
				<div className='d-flex align-items-center justify-content-start'>
					<div className='col-2'>
						<Link to='/messages'>
							<p className='back-arrow'>
								<span className='material-symbols-outlined'>
									arrow_back_ios
								</span>
							</p>
						</Link>
					</div>
					<div className='col-8 d-flex justify-content-center'>
						<div className='d-flex align-items-center'>
							<PassengerCard image={DriverImage} name='Betty Wallace' />
						</div>
					</div>
				</div>
				<hr className='mb-5' />
			</div>

			<div className='row g-4'>
				{personMessage}
				{personMessage}
				{otherPersonMessage}
				{personMessage}
				{otherPersonMessage}
				{personMessage}
				{personMessage}
			</div>

			<div className='type-bar mt-4 d-flex'>
				<div className='flex-grow-1'>
					<textarea
						className='form-control message-text-box'
						placeholder=''
						id='message'
						onChange={(e) => handleChange(e)}></textarea>
				</div>

				<div className='ms-3'>
					<p className='send-button'>
						<span class='material-symbols-outlined'>send</span>
					</p>
				</div>
			</div>
		</>
	);
};

export default MessageContent;
