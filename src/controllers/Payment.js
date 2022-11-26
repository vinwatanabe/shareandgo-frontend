import axios from 'axios';
const localStorage = window.localStorage;

// function to create a payment
const createPayment = async (payment) => {
    try {
        // Send payment object to server
        const res = await axios.post(
            process.env.REACT_APP_BACKEND_URL + 'payment/create' + localStorage.getItem('userID'),
            payment,
            {headers: {'x-access-token': localStorage.getItem('userToken')}}
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
const getAllPayments = async () => {
    try {
        // Send user object to server
        const res = await axios.get(
            process.env.REACT_APP_BACKEND_URL + 'payment/viewall/' + localStorage.getItem('userID'),
            {headers: {'x-access-token': localStorage.getItem('userToken')}}
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
const getOnePayment = async (paymentID) => {
    try {
        // Send user object to server
        const res = await axios.get(
            process.env.REACT_APP_BACKEND_URL + 'payment/viewone/' + localStorage.getItem('userID') + paymentID,
            {headers: {'x-access-token': localStorage.getItem('userToken')}}
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
const updatePayment = async (id, payment) => {
    try {
        // Send user object to server
        const res = await axios.put(
            process.env.REACT_APP_BACKEND_URL + 'payment/update/' + id,
            payment,
            {headers: {'x-access-token': localStorage.getItem('userToken')}}
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
// function to delete a payment
const deletePayment = async (id) => {
    try {
        // Send user object to server
        const res = await axios.delete(
            process.env.REACT_APP_BACKEND_URL + 'payment/delete/' + id,
            {headers: {'x-access-token': localStorage.getItem('userToken')}}
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
};

export {createPayment, getAllPayments, getOnePayment, updatePayment, deletePayment};
