import axios from 'axios';
const localStorage = window.localStorage;

// function to create a ride
// call syntax: Ride.create(values);
//Parameters: Ride (object)
//Example object:
// {
//     "origin": "Burnaby, BC",
//     "destination": "Whistler, BC",
//     "waypoint": "49.0, -123.0",
//     "direction": "",
//     "frequency": "once",
//     "departure_date": "2022-12-25T16:00:00",
//     "seats": 2,
//     "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.",
//     "price": 132.84,
//     "status": "open",
//     "user": "5f9f1b9b9b9b9b9b9b9b9b9b"",
//     "car": "5f9f1b9b9b9b9b9b9b9b9b9b"
// }
const createRide = async (objRide) => {
	try {
		// Send ride object to server
		const res = await axios.post(
			process.env.REACT_APP_BACKEND_URL + 'ride/create',
			objRide,
			{ headers: { 'x-access-token': localStorage.getItem('userToken') } }
		);
		if (res.data.error) {
			// If error, return error message
			return res.data.error;
		} else {
			return 'success';
		}
	} catch (err) {
		return err.response.data.error;
	}
};

// function to get all user's rides
// Parameters: none
const getRides = async () => {
	try {
		// Send ride object to server
		const res = await axios.get(
			process.env.REACT_APP_BACKEND_URL +
				'ride/viewall/' +
				localStorage.getItem('userID'),
			{ headers: { 'x-access-token': localStorage.getItem('userToken') } }
		);
		if (res.data.error) {
			// If error, display error message
			console.log(res.data.error);
			return [];
		} else {
			// If no error, return ride data
			return res.data;
		}
	} catch (err) {
		console.log(err.response.data.error);
	}
};

// function to get single ride data
// Parameters: ride id
// Example id: 5f9f1b9b9b9b9b9b9b9b9b9b
const getRideData = async (id) => {
	try {
		// Send ride object to server
		const res = await axios.get(
			process.env.REACT_APP_BACKEND_URL + 'ride/viewone/' + id,
			{ headers: { 'x-access-token': localStorage.getItem('userToken') } }
		);
		if (res.data.error) {
			// If error, display error message
			console.log(res.data.error);
			return [];
		} else {
			// If no error, return ride data
			return res.data;
		}
	} catch (err) {
		console.log(err.response.data.error);
	}
};

// function to update ride data
// Parameters: ride id(string), ride object
// Example id: 5f9f1b9b9b9b9b9b9b9b9b9b
// Example object:
// {
//     "destination": "Whistler, BC",
// }
const updateRide = async (id, objRide) => {
	try {
		// Send ride object to server
		const res = await axios.put(
			process.env.REACT_APP_BACKEND_URL +
				'ride/update/' +
				localStorage.getItem('rideID'),
			{ headers: { 'x-access-token': localStorage.getItem('userToken') } }
		);
		if (res.data.error) {
			// If error, send back error message
			return res.data.error;
		} else {
			return 'success';
		}
	} catch (err) {
		return err.response.data.error;
	}
};

// function to delete ride
const deleteRide = async (id) => {
	try {
		// Send ride object to server
		const res = await axios.delete(
			process.env.REACT_APP_BACKEND_URL + 'ride/delete/' + id,
			{ headers: { 'x-access-token': localStorage.getItem('userToken') } }
		);
		if (res.data.error) {
			// If error, send back error message
			return res.data.error;
		} else {
			return 'success';
		}
	} catch (err) {
		return err.response.data.error;
	}
};

export { createRide, getRides, getRideData, updateRide, deleteRide };
