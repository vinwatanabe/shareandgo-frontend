
import axios from 'axios';
const localStorage = window.localStorage;

// function to create a car
// Parameters: car object
// Example: createCar({make: 'Toyota', model: 'Camry', year: 2019, color: 'red', plate: 'ABC123'})
const createCar = async (car) =>{
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
const getAllCars = async () => {
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
// Parameters: carID
// Example: getOneCar('5e7b5b9b9c9d440000a1b1b1')
const getOneCar = async (carID) => {
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
// Parameters: id(string), car (object)
// Example: updateCar('5e7b5b9b9c9d440000a1b1b1', {make: 'Toyota', model: 'Camry', year: 2019, color: 'red', plate: 'ABC123'})
const updateCar = async (carID,car) => {
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
const deleteCar = async (carID) => {
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

export {createCar, getAllCars, getOneCar, updateCar, deleteCar};

