import React, { useState } from 'react';
import ShareGoIcon from '../images/ShareGo-icon.svg';
import ButtonPrimary from '../components/ButtonPrimary';
import axios from 'axios';

const Login = () => {
	const [values, setValues] = useState('');
	const [error, setError] = useState("");

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	// submit form
	const handleSubmit = async (e) => {
		e.preventDefault();
		// Fields Validation
		if(!values.email) 
			setError('Please enter an email address');
		else if(!values.password) 
			setError('Please enter a password');
		else {
			setError('');
			// Prepare user object
			const user = {
				email: values.email,
				password: values.password
			};
			try {
				// Send user object to server
				const res = await axios.post(process.env.REACT_APP_BACKEND_URL+"user/login", user);
				if(res.data.error) {
					// If error, display error message
					console.log(res);
					setError(res.data.error);
				}
				else{
					// If no error, save user data to session storage
					localStorage.setItem("userToken",res.data.token);
					localStorage.setItem("userID",res.data._id);
					localStorage.setItem("userFirstName",res.firstname);
					localStorage.setItem("userType",res.accounttype);
					values.accountType === 'driver' ? window.location.href = '/main-driver' : window.location.href = '/main-passenger';
				}
			} catch (err) {
				setError(err.response.data.error);
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
					<div className="text-danger text-center" role="alert">
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
