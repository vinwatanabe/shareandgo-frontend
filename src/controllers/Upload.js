import { Component } from 'react';
import axios from 'axios';
const localStorage = window.localStorage;

class Upload extends Component {
    // function to upload a file
    // file is a file object
    // id is the id of the object the file is associated with
    // will return an object with the file path
    upload = async (id, file) => {
        try {
            // Send file to server
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + 'upload/image/' + id,
                file,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return file data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
}