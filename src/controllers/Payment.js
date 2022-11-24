import { Component } from 'react';
import axios from 'axios';
const localStorage = window.localStorage;

class Payment extends Component {
    // function to create a payment
    async createPayment (payment) {
        try {
            // Send payment object to server
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + 'payment/create' + localStorage.getItem('userID'),
                payment
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return payment data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to get all payments
    async getAllPayments () {
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'payment/viewall/' + localStorage.getItem('userID')
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return payment data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to get one payment
    async getOnePayment (id) {
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'payment/viewone/' + localStorage.getItem('userID') + id
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return payment data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to update a payment
    async updatePayment (id, payment) {
        try {
            // Send user object to server
            const res = await axios.put(
                process.env.REACT_APP_BACKEND_URL + 'payment/update/' + id,
                payment
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return payment data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
}

 
export default Payment;
