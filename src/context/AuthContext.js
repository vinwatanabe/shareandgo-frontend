import React, { createContext, useState, useEffect } from 'react';

const Context = createContext();

const AuthContext = ({ children }) => {
	const [authenticated, setAuthenticated] = useState(false);
	const [loading, setLoading] = useState(true);
	const [userData, setUserData] = useState({});

	useEffect(() => {
		const token = localStorage.getItem('userToken');

		if (token) {
			setAuthenticated(true);
		}

		setLoading(false);
	}, []);

	return (
		<Context.Provider
			value={{
				authenticated,
				setAuthenticated,
				loading,
				setLoading,
				userData,
				setUserData,
			}}>
			{children}
		</Context.Provider>
	);
};

export { Context, AuthContext };
