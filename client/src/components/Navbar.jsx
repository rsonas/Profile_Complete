import { Link } from 'react-router-dom';
import icon from "../assets/icon.png";
import "../styles/Navbar.css";

//creates navigation bar to allow user to navigate through the website 
export default function Navbar () {
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
                <Link to ="/admin">Admin</Link>
            </nav>

        </p>
        
    );
}

