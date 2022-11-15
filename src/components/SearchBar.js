import React, { useState } from 'react';
import '../css/SearchBar.css';
import ButtonPrimary from './ButtonPrimary';

const SearchBar = () => {
	const [values, setValues] = useState('');

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	return (
		<div className='search-destination col-12 col-md-8 mb-5 mx-auto'>
			<form>
				<div>
					<input
						type='text'
						id='search-destination'
						placeholder='Where are you going?'
						className='form-control search-input'
						onChange={(e) => handleChange(e)}
					/>

					<ButtonPrimary
						text={<span class='material-symbols-outlined'>search</span>}
						className='btn-search'
						link='/drivers-available'
						clickAction=''
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
