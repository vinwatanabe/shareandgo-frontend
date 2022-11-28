import React, { useState, useContext } from 'react';
import { Context } from '../context/AuthContext';
import '../css/SearchBar.css';
import ButtonPrimary from './ButtonPrimary';

const SearchBar = ({ link }) => {
	const [values, setValues] = useState('');
	const { setDestination } = useContext(Context);

	function handleChange(event) {
		const auxValues = { ...values };
		auxValues[event.target.id] = event.target.value;
		setValues(auxValues);
	}

	function handleDestination() {
		setDestination(values.searchDestination);
	}

	return (
		<div className='search-destination col-12 col-md-8 mb-5 mx-auto'>
			<form>
				<div>
					<input
						type='text'
						id='searchDestination'
						placeholder='Where are you going?'
						className='form-control search-input'
						onChange={(e) => handleChange(e)}
					/>

					<ButtonPrimary
						text={<span className='material-symbols-outlined'>search</span>}
						className='btn-search'
						link={link}
						clickAction={handleDestination}
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
