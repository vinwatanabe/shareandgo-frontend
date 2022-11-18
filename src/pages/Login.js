import React, { useState } from 'react';
import ShareGoIcon from '../images/ShareGo-icon.svg';
import ButtonPrimary from '../components/ButtonPrimary';

const Login = () => {
	const [values, setValues] = useState('');

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	return (
		<>
			<div className='text-center'>
				<figure className='mb-5'>
					<img src={ShareGoIcon} alt='Share & Go icon' />
				</figure>
				<form className='row col-12 col-md-6 g-4 mb-4 mx-auto'>
					<div className='col-md-12'>
						<input
							type='email'
							id='email'
							placeholder='Email'
							className='form-control'
							onChange={(e) => handleChange(e)}
						/>
					</div>

					<div className='col-md-12'>
						<input
							type='password'
							id='password'
							placeholder='Password'
							className='form-control'
							onChange={(e) => handleChange(e)}
						/>
					</div>
				</form>

				<ButtonPrimary
					text='Login'
					className='col-6 col-md-3 mx-auto d-block'
					link='/main-passenger'
					clickAction=''
				/>
			</div>
		</>
	);
};

export default Login;
