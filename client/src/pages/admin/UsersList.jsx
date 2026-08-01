import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin.css";
import { useEffect } from "react";

//users ;list
export default function UsersList() {

    const navigate = useNavigate();
    const [users, setUsers] = useState([]); 
    
    //retrieves current list of users
    async function fetchUsers() {
        try {
            const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/users`);

            const result = await response.json();

            setUsers(result.data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchUsers();
    }, []);

    //deletes a user by id
    async function deleteUser(id) {
        await fetch(
            `${import.meta.env.VITE_API_URL}/api/users/${id}`, {
            method: "DELETE"
            }
        );
    fetchUsers();
    }

    return (
         <div className = "List">

            <h1>Manage Users</h1>

            <div>
                <button onClick={() => navigate("/admin/users/add")} className = "addNew">
                    Add User
                </button>

            </div>

            {
                users.map(user => (
                    <div key ={user.id} className = "adminContent">
                        <p>{user.fName}</p>
                        <p>{user.lName}</p>
                        <p>{user.email}</p>
                        <p>Registered: {new Date(user.created).toLocaleDateString()}</p>
                        <p>Updated: {new Date(user.updated).toLocaleDateString()}</p>
                        <p>{user.password}</p>
                        
                    <div className = "editAndDelete">
                        <button onClick={() => navigate(`/admin/users/edit/${user.id}`)}>
                            Edit
                        </button>

                        <button onClick={() => deleteUser(user.id)}>
                            Delete
                        </button>

                    </div>
                        
                    </div>

                ))
            }

         </div>
    );


}