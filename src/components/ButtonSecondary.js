import React from 'react';
import { Link } from 'react-router-dom';

const ButtonSecondary = ({ text, className, link, clickAction }) => {
	return (
		<Link
			to={link}
			onClick={clickAction}
			className={`btn btn-secondary ${className}`}>
			{text}
		</Link>
	);
};

export default ButtonSecondary;
