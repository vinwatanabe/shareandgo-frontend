
import axios from 'axios';
const localStorage = window.localStorage;
 
// function to delete a address
// Parameters: address object
// example object:
// {
//     "name": "Tracey House",
//     "address": "76 123 Street",
//     "address2": "Apt 123",
//     "city": "Vancouver",
//     "province": "BC",
//     "zip": "V2B4L1",
//     "isdefault": true
// }
const createAddress = async (address) => {
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
// Parameters: none
const getAllAddresss = async () => {
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
// Parameters: id of address
// example id: 5f9f1b0b0b9b0c0b0b0b0b0b
const    getOneAddress = async (id) => {
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
// Parameters: id (string), address (object)
// example id: 5f9f1b0b0b9b0c0b0b0b0b0b
// example object:
// {
//     "name": "Tracey House",
//     "address": "76 123 Street",
//     "address2": "Apt 123",
//     "city": "Vancouver",
//     "province": "BC",
//     "zip": "V2B4L1",
//     "isdefault": true
// }
const    updateAddress = async (id, address) => {
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
// function to delete a address
// Parameters: address id (string)
// example id: 5f9f1b0b0b9b0c0b0b0b0b0b
const    deleteAddress = async (id) => {
    try {
        // Send user object to server
        const res = await axios.delete(
            process.env.REACT_APP_BACKEND_URL + 'address/delete/' + id,
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


export { createAddress, getAllAddresss, getOneAddress, updateAddress, deleteAddress };


 
