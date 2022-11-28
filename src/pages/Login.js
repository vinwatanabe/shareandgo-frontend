import React, { useState, useContext } from 'react';
import ShareGoIcon from '../images/ShareGo-icon.svg';
import ButtonPrimary from '../components/ButtonPrimary';
import { Context } from '../context/AuthContext';

const Login = () => {
	const [values, setValues] = useState('');
	const [error, setError] = useState('');
	const { handleSignIn } = useContext(Context);

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	// submit form
	const handleSubmit = async (e) => {
		e.preventDefault();
		// Fields Validation
		if (!values.email) setError('Please enter an email address');
		else if (!values.password) setError('Please enter a password');
		else {
			handleSignIn(values);
		}
	};

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
					<div className='text-danger text-center' role='alert'>
						{error}
					</div>
				</form>

				<ButtonPrimary
					text='Login'
					className='col-6 col-md-3 mx-auto d-block'
					// link='/main-passenger'
					clickAction={handleSubmit}
				/>
			</div>
		</>
	);
};

export default Login;
