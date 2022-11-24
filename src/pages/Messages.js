import React from 'react';
import MessageCard from '../components/MessageCard';
import DriverImage from '../images/profile-picture-mockup.jpg';

const Messages = () => {
	// Delete after implementation
	const messages = [
		{
			name: 'Mathew Pitts',
			destination: 'Abbotsford, BC',
			date: '10/15/2022',
			time: '9:45am',
		},
		{
			name: 'Betty Wallace',
			destination: 'New Westminster, BC',
			date: '10/12/2022',
			time: '4:22pm',
		},
		{
			name: 'Harvey Specter',
			destination: 'Mapple Ridge, BC',
			date: '10/02/2022',
			time: '11:18am',
		},
	];

	return (
		<>
			<div>
				<h2 className='text-title text-center mb-4'>Your messages(2)</h2>
				{messages.map((user, index) => {
					return (
						<div
							className='col-12 col-sm-10 col-md-8 col-lg-5 col-xl-4 mx-auto mb-3'
							key={index}>
							<MessageCard
								driverPhoto={DriverImage}
								driverName={user.name}
								destination={user.destination}
								date={user.date}
								time={user.time}
								link='/message-content'
							/>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Messages;
