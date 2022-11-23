import React, { useState } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';
import InputMask from 'react-input-mask';
import axios from 'axios';

// Canadian postal code mask
const firstLetter = /(?!.*[DFIOQU])[A-VXY]/i;
const letter = /(?!.*[DFIOQU])[A-Z]/i;
const digit = /[0-9]/;
const mask = [firstLetter, digit, letter, ' ', digit, letter, digit];
// Session and page-transition variables
const localStorage = window.localStorage;

const Registration = () => {
	const [values, setValues] = useState('');
	const [error, setError] = useState('');

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Fields Validation
		if (!values.firstName) setError('Please enter your first name');
		else if (!values.lastName) setError('Please enter your last name');
		else if (!values.email) setError('Please enter an email address');
		else if (!values.phone) setError('Please enter your phone number');
		else if (!values.accountType) setError('Please select an account type');
		else if (!values.password) setError('Please enter a password');
		else if (!values.confirmPassword) setError('Please confirm your password');
		else if (values.confirmPassword !== values.password)
			setError('Passwords do not match');
		else {
			setError('');
			// Prepare user object
			const user = {
				firstname: values.firstName,
				lastname: values.lastName,
				email: values.email,
				phone: values.phone,
				city: values.city,
				province: values.province,
				accounttype: values.accountType,
				password: values.password,
			};
			try {
				// Send user object to server
				const res = await axios.post(
					process.env.REACT_APP_BACKEND_URL + 'user/create',
					user
				);
				if (res.data.error) {
					// If error, display error message
					setError(res.data.error);
				} else {
					// If no error, save user data to session storage
					localStorage.setItem('userToken', res.data.token);
					localStorage.setItem('userID', res.data._id);
					localStorage.setItem('userFirstName', values.firstName);
					localStorage.setItem('userType', values.accountType);
				}
			} catch (err) {
				setError(err.response.data.error);
			}
			// Validate existing payment data: if exists, register payment method, if not, move forward
			let payment = {};
			if (values.accountType === 'passenger') {
				if (
					values.nameCard &&
					values.numberCard &&
					values.expirationDate &&
					values.csc &&
					values.zipCode
				) {
					payment = {
						type: 'card',
						name: values.nameCard,
						pan: values.numberCard,
						expiration: values.expirationCard,
						csc: values.csc,
						address_id: values.zipCard,
					};
				}
			} else {
				if (
					values.bankName &&
					values.institutionNumber &&
					values.transitNumber &&
					values.accountNumber
				) {
					payment = {
						type: 'bank',
						name: values.bankName,
						pan: values.accountNumber,
						institution: values.institutionNumber,
						transit: values.transitNumber,
					};
				}
				try {
					const res = await axios.post(
						process.env.REACT_APP_BACKEND_URL + 'payment/create/',
						payment
					);
					console.log(res);
				} catch (err) {
					console.log(err.response.data.error);
				}
			}
			// Check Session Storage
			if (localStorage.getItem('userToken')) {
				// redirect to main page
				values.accountType === 'driver'
					? (window.location.href = '/main-driver')
					: (window.location.href = '/main-passenger');
			}
		}
	};

	const passengerBank = (
		<div>
			<h2 className='text-title text-center mb-4'>Payment Information</h2>
			<form className='row col-12 col-md-6 g-4 mb-4 mx-auto'>
				<div className='col-12'>
					<input
						type='text'
						id='nameCard'
						placeholder='Name on card'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-12'>
					<InputMask
						mask='9999 9999 9999 9999'
						maskPlaceholder='-'
						type='text'
						id='cardNumber'
						placeholder='Card Number'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-md-6'>
					<InputMask
						mask='99/99'
						maskPlaceholder='mm/yy'
						type='text'
						id='expirationDate'
						placeholder='Expiration Date'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-md-6'>
					<InputMask
						mask='9999'
						maskPlaceholder=' '
						type='text'
						id='csc'
						placeholder='CSC'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-md-6'>
					<InputMask
						mask={mask}
						maskPlaceholder='___ ___'
						type='text'
						id='zipCode'
						placeholder='ZIP Code'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className='text-danger text-center' role='alert'>
					{error}
				</div>
			</form>

			<ButtonPrimary
				text='Register'
				className='col-6 col-md-3 mx-auto d-block'
				// link='/main-passenger'
				clickAction={handleSubmit}
			/>
		</div>
	);

	const driverBank = (
		<div>
			<h2 className='text-title text-center mb-4'>Bank Information</h2>
			<form className='row col-12 col-md-6 g-4 mb-4 mx-auto'>
				<div className='col-12'>
					<input
						type='text'
						id='bankName'
						placeholder='Bank name'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-md-6'>
					<InputMask
						mask='999'
						maskPlaceholder=' '
						type='text'
						id='institutionNumber'
						placeholder='Institution #'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-md-6'>
					<InputMask
						mask='99999'
						maskPlaceholder=' '
						type='text'
						id='transitNumber'
						placeholder='Transit #'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-12'>
					<InputMask
						mask='999999999999'
						maskPlaceholder=' '
						type='text'
						id='accountNumber'
						placeholder='Account Number'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className='text-danger text-center' role='alert'>
					{error}
				</div>
			</form>

			<ButtonPrimary
				text='Register'
				className='col-6 col-md-3 mx-auto d-block'
				//link='/main-passenger'
				clickAction={handleSubmit}
			/>
		</div>
	);

	return (
		<>
			<h2 className='text-title text-center mb-4'>Registration</h2>
			<form className='row col-12 col-md-6 g-4 mb-5 mx-auto'>
				<div className='col-md-6'>
					<input
						type='text'
						id='firstName'
						placeholder='First Name'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-md-6'>
					<input
						type='text'
						id='lastName'
						placeholder='Last Name'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-12'>
					<input
						type='email'
						id='email'
						placeholder='Email'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-12'>
					<InputMask
						mask='999-999-9999'
						maskPlaceholder='_'
						type='text'
						id='phone'
						placeholder='Phone Number'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-md-6'>
					<input
						type='text'
						id='city'
						placeholder='City'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-md-6'>
					<InputMask
						mask='aa'
						maskPlaceholder='-'
						type='text'
						id='province'
						placeholder='Province'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-12'>
					<select
						name='accountType'
						id='accountType'
						className='form-select'
						onChange={(e) => handleChange(e)}>
						<option value='not-selected'>Select account type...</option>
						<option value='passenger'>Passenger</option>
						<option value='driver'>Driver</option>
					</select>
				</div>

				<div className='col-md-6'>
					<input
						type='password'
						id='password'
						placeholder='Password'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className='col-md-6'>
					<input
						type='password'
						id='confirmPassword'
						placeholder='Confirm Password'
						className='form-control'
						onChange={(e) => handleChange(e)}
					/>
				</div>
			</form>

			{values.accountType === 'passenger'
				? passengerBank
				: values.accountType === 'driver'
				? driverBank
				: ''}
		</>
	);
};

export default Registration;
