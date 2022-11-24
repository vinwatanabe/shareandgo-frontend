import { Component } from 'react';
import axios from 'axios';
const localStorage = window.localStorage;

class Seat extends Component {
    // function to create a new seat request for a ride
    createSeat = async (rideID,seat) => {
        try {
            // Send seat object to server
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + 'seat/create/' + rideID,
                seat,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return seat data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to return all seats requests of one ride
    getAllSeats = async (rideID) => {
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'seat/viewall/' + rideID,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return seat data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to get one seat
    getOneSeat = async (rideID, seatID) => {
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'seat/viewone/' + rideID + '/' + seatID,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return seat data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to delete a seat request
    deleteSeat = async (rideID, seatID) => {
        try {
            // Send seat object to server
            const res = await axios.delete(
                process.env.REACT_APP_BACKEND_URL + 'seat/delete/' + rideID + '/' + seatID,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return seat data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to update a seat request
    updateSeat = async (rideID, seatID, seat) => {
        try {
            // Send seat object to server
            const res = await axios.put(
                process.env.REACT_APP_BACKEND_URL + 'seat/update/' + rideID + '/' + seatID,
                seat,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return seat data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
}

export default Seat;