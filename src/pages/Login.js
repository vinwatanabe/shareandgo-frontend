import React, { useState } from 'react';
import ShareGoIcon from '../images/sharego-icon.png';
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

				<form className='d-grid col-10 col-md-6 gap-4 mb-4 mx-auto'>
					<div className=''>
						<input
							type='email'
							id='email'
							placeholder='Email'
							className='form-control'
							onChange={(e) => handleChange(e)}
						/>
					</div>

					<div className=''>
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
					className='col-10 col-md-4 mx-auto d-block'
					link='/main-passenger'
					clickAction=''
				/>
			</div>
		</>
	);
};

export default Login;
