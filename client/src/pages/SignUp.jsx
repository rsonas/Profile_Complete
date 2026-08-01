import { useNavigate } from "react-router-dom";
import { useState, useEffect  } from "react";
import { useParams} from "react-router-dom";
import "../styles/App.css";
import "../styles/SignUp.css";

export default function Signup () {

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
                    "Content-Type":"application/json"
                },

                body:JSON.stringify(user)
            });

            //if it is submitting a new user
            }else {
                const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/users`, {
                    method: "POST",
                    headers: {
                        "Content-Type":"application/json"
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
            navigate("/");

        }catch (err) {
            console.error(err);
            alert("Unable to create new user");
        }

        
    }

    return(
    <div>
        <h1>Create an Account</h1>
        <div className = "signUpContent">
            <form onSubmit = {handleSubmit}>
                <div className = "signupInput">
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
    </div>
    );
}