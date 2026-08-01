import { Link } from 'react-router-dom';
import icon from "../assets/icon.png";
import "../styles/Navbar.css";
import { useNavigate } from "react-router-dom";

//creates navigation bar to allow user to navigate through the website 
export default function Navbar () {

    //adds sign out button and only displays if user is logged in
    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    function signOut() {
        localStorage.removeItem("token");
        navigate("/signin", {replace: true});
    }

    return ( 

        <p className = "navbar">

            <Link to = "/">
                <img className = "logo" src ={icon} alt ="logo"></img>
            </Link>

            <nav className="nav-links">
                <Link to ="/">Home</Link>
                <Link to ="/about">About</Link>
                <Link to ="/contact">Contact</Link>
                <Link to ="/projects">Projects</Link>
                <Link to ="/references">References</Link>
                <Link to ="/services">Services</Link>
                <Link to ="/signup">Sign Up</Link>
                <Link to ="/admin">Admin</Link>
                { token ? (
                    <button onClick= {signOut}>
                        Sign Out
                    </button>
                ) : (
                    <Link to="/signin">
                        Sign In
                    </Link>
                )}
            </nav>

        </p>
        
    );
}

