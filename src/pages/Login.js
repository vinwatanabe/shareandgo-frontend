import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShareGoIcon from '../images/ShareGo-icon.svg';
import ButtonPrimary from '../components/ButtonPrimary';
import User from '../controllers/User';
import { Context } from '../context/AuthContext';

const Login = () => {
	const [values, setValues] = useState('');
	const [error, setError] = useState('');
	const { setAuthenticated } = useContext(Context);
	let navigate = useNavigate();

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
			setError('');
			// Prepare user object
			const user = {
				email: values.email,
				password: values.password,
			};

			// call login controller with user data
			const res = await User.login(user);
			if (res !== 'success') {
				setError(res);
			} else {
				const accountType = localStorage.getItem('userType');
				setAuthenticated(true);

				if (accountType === 'driver') {
					return navigate('/main-driver');
				} else if (accountType === 'passenger') {
					return navigate('/main-passenger');
				}
			}
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
