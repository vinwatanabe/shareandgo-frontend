import { Component } from 'react';
import axios from 'axios';
const localStorage = window.localStorage;
 
class Address extends Component {
    // function to create a address
    async createAddress (address) {
        try {
            // Send address object to server
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + 'address/create' + localStorage.getItem('userID'),
                address,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return address data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to get all addresss
    async getAllAddresss () {
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'address/viewall/' + localStorage.getItem('userID'),
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return address data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to get one address
    async getOneAddress (id) {
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'address/viewone/' + localStorage.getItem('userID') + id,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return address data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to update a address
    async updateAddress (id, address) {
        try {
            // Send user object to server
            const res = await axios.put(
                process.env.REACT_APP_BACKEND_URL + 'address/update/' + id,
                address,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return address data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
}

 
export default Address;
