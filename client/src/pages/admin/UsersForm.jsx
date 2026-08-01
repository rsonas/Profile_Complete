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

        try {

            //if it is updating a user
            if (id) {
                await fetch(
                `${import.meta.env.VITE_API_URL}/api/users/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type":"application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },

                body:JSON.stringify(user)
            });

            //if it is submitting a new user
            }else {
                const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/users`, {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },

                body:JSON.stringify(user)
            });

                const result = await response.json() 

                // stops rerouting if user entry is not suvcesful 
                if (!response.ok) {
                    alert(result.message);
                    return;
                }

            }
        
            // if successful
            navigate("/admin/users");

        }catch (err) {
            console.error(err);
            alert("Unable to create new user");
        }

        
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
                required
                />

                <label>Last Name </label>
                <input name = "lName"
                value = {user.lName}
                onChange={handleChange}
                required
                />

                <label>Email</label>
                <input name = "email"
                type = "email"
                value = {user.email}
                onChange={handleChange}
                required
                />

                <label>Password</label>
                <input name = "password"
                type= "password"
                value = {user.password}
                onChange={handleChange}
                required
                minLength = {8}
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