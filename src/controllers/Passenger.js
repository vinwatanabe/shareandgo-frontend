
import axios from 'axios';
const localStorage = window.localStorage;


// function to create a passenger in a ride
const createPassenger = async (rideID,passenger) => {
    try {
        // Send passenger object to server
        const res = await axios.post(
            process.env.REACT_APP_BACKEND_URL + 'passenger/create/' + rideID,
            passenger,
            {headers: {'x-access-token': localStorage.getItem('userToken')}}
        );
        if (res.data.error) {
            // If error, display error message
            return (res.data.error);
        } else {
            // If no error, return passenger data
            return res.data;
        }
    } catch (err) {
        return (err.response.data.error);
    }
}
// function to get all passengers of a ride
const getAllPassengers = async (rideID) => {
    try {
        // Send user object to server
        const res = await axios.get(
            process.env.REACT_APP_BACKEND_URL + 'passenger/viewall/' + rideID,
            {headers: {'x-access-token': localStorage.getItem('userToken')}}
        );
        if (res.data.error) {
            // If error, display error message
            return (res.data.error);
        } else {
            // If no error, return passenger data
            return res.data;
        }
    } catch (err) {
        return (err.response.data.error);
    }
}
// function to get one passenger
const getOnePassenger = async (rideID,passengerID) =>{
    try {
        // Send user object to server
        const res = await axios.get(
            process.env.REACT_APP_BACKEND_URL + 'passenger/viewone/' + rideID + '/' + passengerID,
            {headers: {'x-access-token': localStorage.getItem('userToken')}}
        );
        if (res.data.error) {
            // If error, display error message
            return (res.data.error);
        } else {
            // If no error, return passenger data
            return res.data;
        }
    } catch (err) {
        return (err.response.data.error);
    }
}
// function to update a passenger in a ride
const updatePassenger = async (rideID,passengerID,passenger) => {
    try {
        // Send passenger object to server
        const res = await axios.put(
            process.env.REACT_APP_BACKEND_URL + 'passenger/update/' + rideID + '/' + passengerID,
            passenger,
            {headers: {'x-access-token': localStorage.getItem('userToken')}}
        );
        if (res.data.error) {
            // If error, display error message
            return (res.data.error);
        } else {
            // If no error, return passenger data
            return res.data;
        }
    } catch (err) {
        return (err.response.data.error);
    }
}
// function to delete a passenger from a ride
const deletePassenger = async (rideID,passengerID) => {
    try {
        // Send user object to server
        const res = await axios.delete(
            process.env.REACT_APP_BACKEND_URL + 'passenger/delete/' + rideID + '/' + passengerID,
            {headers: {'x-access-token': localStorage.getItem('userToken')}}
        );
        if (res.data.error) {
            // If error, display error message
            return (res.data.error);
        } else {
            // If no error, return passenger data
            return res.data;
        }
    } catch (err) {
        return (err.response.data.error);
    }
}

export {createPassenger,getAllPassengers,getOnePassenger,updatePassenger,deletePassenger};
