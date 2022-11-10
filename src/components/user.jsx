import { useState, useEffect } from "react";
import axios from 'axios';

const USER_API = process.env.REACT_APP_BACKEND_URL+"user/";

function User() {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () =>{
            try {
                const response = await axios.get(USER_API+ 'viewall');
                setUsers(response.data);
            }catch (error) {
                console.log(`URL: ${USER_API+ 'viewall'}\nERROR: ${error}`);
                return "Error retrieving user data from DB"
            }
        };
        getUsers();
    }, []);
    console.log(users);
    return (
        <>
            <h2>Users</h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">FIRSTNAME</th>
                            <th scope="col">LASTNAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">PHONE</th>
                        </tr>
                    </thead>
                    <tbody>
                    { 
                        users && users.length>0 && (
                            users.map(
                                (user,index) => 
                                (
                                    <tr key={index}>
                                        <td>{user._id}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.lastname}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                )
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </>
   )
}
 
export default User;
