import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "../styles/App.css";

// sign in page
export default function Signin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    //checks if user is logged in. if not, redirects to sig in page
    async function submit(e) {
        e.preventDefault();

        const response = await fetch(
            "http://localhost:3000/api/auth/signin", {
                method: "POST",
                headers: {
                    "Content-Type":"application/json",
                    "Authorization":
                    `Bearer ${localStorage.getItem("token")}`
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
    }

    //come bacn and apply css
    return (

        <form onSubmit = { submit }>

            <input 
                onChange = {e=>setEmail(e.target.value)}
            />

            <input 
                type= "password"
                onChange = {e=>setPassword(e.target.value)}
            />

            <button>
                Login
            </button>

        </form>
    )

}