import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";
import "../../styles/Admin.css";

//users form
export default function UserForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    //creates blank array for content
    const [user, setUser] = useState({
        fName:"",
        lName:"",
        email:"",
        created:"",
        updated:"",
        password:""
    });

    //gets a user by its id
    async function getUser() {
        try {
            const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/users/${id}`
            );

            const result = await response.json();

            setUser(result.data);
        }

        catch(error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if (id) {
            getUser();
        }
    }, [id]);

    //handles any input
    function handleChange(event) {
        
        setUser({

            ...user,
            [event.target.name]:event.target.value
        });
    }

    //handles submitting information
    async function handleSubmit(event) {
        event.preventDefault();
        
        //console.log(user);

        //if it is updating a user
        if (id) {
            await fetch(
            `${import.meta.env.VITE_API_URL}/api/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },

            body:JSON.stringify(user)
        });
        //if it is submitting a new user
        }else {
            await fetch(
            `${import.meta.env.VITE_API_URL}/api/users`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },

            body:JSON.stringify(user)
        });
        }
        navigate("/admin/users");
    }

    return(
    <div className = "adminContainer">
        <form onSubmit = {handleSubmit}>
            <h1>
                {id ? "Edit User" : "Add User"}
            </h1>

            <div className = "formContainer">
                <label>First Name </label>
                <input name = "fName"
                value = {user.fName}
                onChange={handleChange}
                />

                <label>Last NAme </label>
                <input name = "lName"
                value = {user.lName}
                onChange={handleChange}
                />

                <label>Email</label>
                <input name = "email"
                value = {user.email}
                onChange={handleChange}
                />

                <label>Created </label>
                <input name = "created"
                value = {user.created}
                onChange={handleChange}
                />

                <label>Updated</label>
                <input name = "updated"
                value = {user.updated}
                onChange={handleChange}
                />

                <label>Password</label>
                <input name = "password"
                value = {user.password}
                onChange={handleChange}
                />

                <div className = "submitButton">
                    <button type = "submit">
                    Save User
                    </button>
                </div>
                
            </div>
        </form>
        </div>
    );

}