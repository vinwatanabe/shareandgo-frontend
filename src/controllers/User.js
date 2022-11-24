import { Component } from 'react';
import axios from 'axios';

// Using local storage to store session and page-transition variables
// as they persist in different tabs and even after closing the browser
const localStorage = window.localStorage;

class User extends Component {
	// function to register a user
	// call syntax: User.register(values);
	register = async (objUser) => {
		try {
			// Send user object to server
			const res = await axios.post(
				process.env.REACT_APP_BACKEND_URL + 'user/create',
				objUser
			);
			if (res.data.error) {
				// If error, return error message
				return res.data.error;
			} else {
				// If no error, save user data to session storage
				localStorage.setItem('userToken', res.data.token);
				localStorage.setItem('userID', res.data._id);
				localStorage.setItem('userFirstName', objUser.firstName);
				localStorage.setItem('userType', objUser.accountType);
			}
			return 'success';
		} catch (err) {
			return err.response.data.error;
		}
	};

	// function to check if user is logged in
	isLoggedIn = async () => {
		if (localStorage.getItem('userToken') && localStorage.getItem('userID')) {
			return true;
		} else {
			return false;
		}
	};

	// function to get user data
	getUserData = async () => {
		try {
			// Send user object to server
			const res = await axios.get(
				process.env.REACT_APP_BACKEND_URL +
					'user/viewone/' +
					localStorage.getItem('userID'),
				{
					headers: {
						// Get user token from session storage
						'x-access-token': localStorage.getItem('userToken'),
					},
				}
			);
			if (res.data.error) {
				// If error, display error message
				console.log(res.data.error);
				return [];
			} else {
				// If no error, return user data
				return res.data;
			}
		} catch (err) {
			console.log(err.response.data.error);
		}
	};

	// function to update user data
	updateUser = async (objUser) => {
		try {
			// Send user object to server
			const res = await axios.put(
				process.env.REACT_APP_BACKEND_URL +
					'user/update/' +
					localStorage.getItem('userID'),
				objUser,
				{
					headers: {
						// Get user token from session storage
						'x-access-token': localStorage.getItem('userToken'),
					},
				}
			);
			if (res.data.error) {
				// If error, send back error message
				return res.data.error;
			} else {
				// If no error, save user data to session storage
				localStorage.setItem('userToken', res.data.token);
				localStorage.setItem('userID', res.data._id);
				localStorage.setItem('userFirstName', objUser.firstName);
				localStorage.setItem('userType', objUser.accountType);
			}
		} catch (err) {
			return err.response.data.error;
		}
	};

	// function to logout a user
	logout = async () => {
		//remove localStorage items
		localStorage.removeItem('userToken');
		localStorage.removeItem('userID');
		localStorage.removeItem('userFirstName');
		localStorage.removeItem('userType');
		window.location.href = '/';
	};

	// function to login a user
	async login(objUser) {
		try {
			// Send user object to server
			const res = await axios.post(
				process.env.REACT_APP_BACKEND_URL + 'user/login',
				objUser
			);
			if (res.data.error) {
				// If error, send back error message
				console.log(res);
				return res.data.error;
			} else {
				// If no error, save user data to session storage
				console.log(res);
				localStorage.setItem('userToken', res.data.token);
				localStorage.setItem('userID', res.data._id);
				localStorage.setItem('userFirstName', res.data.firstname);
				localStorage.setItem('userType', res.data.accounttype);
				return 'success';
			}
		} catch (err) {
			//
			return err.response.data.error;
		}
	}

	// function to get a user's evaluations
	async getEvaluation() {
		try {
			// Send user object to server
			const res = await axios.get(
				process.env.REACT_APP_BACKEND_URL +
					'review/getrating/' +
					localStorage.getItem('userID'),
				{ headers: { 'x-access-token': localStorage.getItem('userToken') } }
			);
			if (res.data.error) {
				// If error, send back error message
				console.log(res);
				return res.data.error;
			} else {
				// If no error, return evaluations
				console.log(res);
				return res.data.evaluation;
			}
		} catch (err) {
			//
			return err.response.data.error;
		}
	}
}
export default new User();
