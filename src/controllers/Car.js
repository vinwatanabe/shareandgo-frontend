import { Component } from 'react';
import axios from 'axios';
const localStorage = window.localStorage;

class Car extends Component {
    // function to create a car
    create = async (car) =>{
        try {
            // Send car object to server
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + 'car/create/' + localStorage.getItem('userID'),
                car,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return car data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to get all cars of a user
    getAll = async () => {
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'car/viewall/' + localStorage.getItem('userID'),
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return car data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to get one car
    getOne = async (carID) => {
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'car/viewone/' + localStorage.getItem('userID') + '/' + carID,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return car data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to update a car
    update = async (carID,car) => {
        try {
            // Send car object to server
            const res = await axios.put(
                process.env.REACT_APP_BACKEND_URL + 'car/update/' + localStorage.getItem('userID') + '/' + carID,
                car,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return car data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to delete a car
    delete = async (carID) => {
        try {
            // Send car object to server
            const res = await axios.delete(
                process.env.REACT_APP_BACKEND_URL + 'car/delete/' + localStorage.getItem('userID') + '/' + carID,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return car data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }

}