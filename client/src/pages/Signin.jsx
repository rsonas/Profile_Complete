import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/App.css";
import "../styles/Signin.css";

// sign in page
export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    //checks if user is logged in. if not, redirects to sig in page
    async function submit(e) {
        e.preventDefault();

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/auth/signin`, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({
                    email,
                    password
                })
            })

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        localStorage.setItem("token", data.token);

        navigate('/admin');

        console.log(import.meta.env.VITE_API_URL);
    }

    //come bacn and apply css
    return (
        <div>
            <h1>Sign In</h1>
            <div className = "signInContent">
                <form onSubmit = { submit }>
                    <div className = "loginInput">
                        <label>Email: </label>
                            <input 
                                name="email"
                                onChange = {e=>setEmail(e.target.value)}
                            />

                        <label>Password: </label>
                            <input 
                            name="password"
                                type= "password"
                                onChange = {e=>setPassword(e.target.value)}
                            />
                    </div>
                

                    <button>
                        Log In
                    </button>

                </form>
            </div>
        </div>
    )

}