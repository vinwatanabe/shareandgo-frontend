import { Component } from 'react';
import axios from 'axios';
const localStorage = window.localStorage;

class Ride extends Component {

    // function to create a ride
    // call syntax: Ride.create(values);
    create = async(objRide) => {
        try {
            // Send ride object to server
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + 'ride/create',
                objRide,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, return error message
                return (res.data.error);
            } else {
                return "success";
            }
        } catch (err) {
            return(err.response.data.error);
        }
    }

    // function to get all user's rides
    getRides = async() =>{
        try {
            // Send ride object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'ride/viewall/' + localStorage.getItem('userID'),
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
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
    }


    // function to get single ride data
    getRideData = async(id) =>{
        try {
            // Send ride object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'ride/viewone/' + id,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
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
    }

    // function to update ride data
    updateRide = async (id,objRide) =>{
        try {
            // Send ride object to server
            const res = await axios.put(
                process.env.REACT_APP_BACKEND_URL + 'ride/update/' + localStorage.getItem('rideID'),
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, send back error message
                return (res.data.error);
            } else {    
                return "success";
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }

    // function to delete ride
    deleteRide = async (id) =>{
        try {
            // Send ride object to server
            const res = await axios.delete(
                process.env.REACT_APP_BACKEND_URL + 'ride/delete/' + id,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, send back error message
                return (res.data.error);
            } else {    
                return "success";
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
}
export default new Ride();