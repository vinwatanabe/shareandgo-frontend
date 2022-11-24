import { Component } from 'react';
import axios from 'axios';
const localStorage = window.localStorage;

class Chat extends Component {
    // function to create a chat
    create = async (chat) => {
        try {
            // Send chat object to server
            const res = await axios.post(
                process.env.REACT_APP_BACKEND_URL + 'chat/create/' + localStorage.getItem('userID'),
                chat,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return chat data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to get all chats of a user
    getAll = async () =>{
        try {
            // Send user object to server
            const res = await axios.get(
                process.env.REACT_APP_BACKEND_URL + 'chat/viewall/' + localStorage.getItem('userID'),
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return chat data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
    // function to delete a chat
    delete = async (chatID) => {
        try {
            // Send chat object to server
            const res = await axios.delete(
                process.env.REACT_APP_BACKEND_URL + 'chat/delete/' + chatID,
                {headers: {'x-access-token': localStorage.getItem('userToken')}}
            );
            if (res.data.error) {
                // If error, display error message
                return (res.data.error);
            } else {
                // If no error, return chat data
                return res.data;
            }
        } catch (err) {
            return (err.response.data.error);
        }
    }
}