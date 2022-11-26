import React, { useState } from 'react';
import ButtonPrimary from '../components/ButtonPrimary';


const UserAccountEdit = () => {
	const [values, setValues] = useState('');

import InputMask from 'react-input-mask';
import User from '../controllers/User';

// Canadian postal code mask
const firstLetter = /(?!.*[DFIOQU])[A-VXY]/i;
const letter = /(?!.*[DFIOQU])[A-Z]/i;
const digit = /[0-9]/;
const zipMask = [firstLetter, digit, letter, ' ', digit, letter, digit];

const UserAccountEdit = () => {
	const [values, setValues] = useState('');
	const [user, setUser] = React.useState([]);
	const [address, setAddress] = React.useState([]);
	const [payment, setPayment] = React.useState([]);

	const getUserInfo = async () => { 
		const user = await User.getUser(); 
		setUser(user); 
		if(user.hasOwnProperty('address'))
			setAddress(user.address[0]);
		if(user.hasOwnProperty('payment'))
			setPayment(user.payment[0]);
	};
	(user.length === 0) && getUserInfo();
	console.log(values);


	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	return (
		<>
			<h2 className='text-title text-center mb-4'>Edit account</h2>
			<form className='row col-12 col-md-6 g-4 mb-5 mx-auto'>
				<div className='col-md-6'>
					<input
						type='text'
						id='firstName'
						placeholder='First Name'
						className='form-control'
						onChange={(e) => handleChange(e)}

						value={user.firstname}

					/>
				</div>

				<div className='col-md-6'>
					<input
						type='text'
						id='lastName'
						placeholder='Last Name'
						className='form-control'
						onChange={(e) => handleChange(e)}

						value={user.lastname}

					/>
				</div>

				<div className='col-12'>
					<input
						type='email'
						id='email'
						placeholder='Email'
						className='form-control'
						onChange={(e) => handleChange(e)}

						value={user.email}

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

						value={user.phone}
					/>
				</div>

				<div className='col-md-6'>
					<input
						type='text'
						id='address'
						placeholder='Address'
						className='form-control'
						onChange={(e) => handleChange(e)}
						value={address.address}

					/>
				</div>

				<div className='col-md-6'>
					<input
						type='text'
						id='city'
						placeholder='City'
						className='form-control'
						onChange={(e) => handleChange(e)}

						value={address.city}

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

						value={address.province}
					/>
				</div>

				<div className='col-md-6'>
					<InputMask
						mask={zipMask}
						maskPlaceholder='___ ___'
						type='text'
						id='zip'
						placeholder='ZIP Code'
						className='form-control'
						onChange={(e) => handleChange(e)}
						value={address.zip}

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

			<h2 className='text-title text-center mb-4'>Payment Information</h2>
			<form className='row col-12 col-md-6 g-4 mb-4 mx-auto'>
				<div className='col-12'>
					<input
						type='text'
						id='nameCard'
						placeholder='Name on card'
						className='form-control'
						onChange={(e) => handleChange(e)}

						value={payment.name}

					/>
				</div>

				<div className='col-12'>


					<InputMask
						mask='9999 9999 9999 9999'
						maskPlaceholder='-'
						type='text'
						id='pan'
						placeholder='Card Number'
						className='form-control'
						onChange={(e) => handleChange(e)}
						value={payment.pan}

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

						value={payment.expiration}

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
			</form>

			<ButtonPrimary
				text='Save'
				className='col-6 col-md-3 mx-auto d-block'
				link='/user-account'
				clickAction=''
			/>
		</>
	);
};

export default UserAccountEdit;
