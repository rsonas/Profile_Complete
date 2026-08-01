import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

//home page
export default function Home() {

    const navigate = useNavigate() 
    
    return (
        <div>
        <h1>Home</h1>
        <div className = "homeContainer">
            <div className = "content">
                <p>The purpose of this website is to showcase some of the projects i've worked on for prospective employers, and demonstrate my abilities using React</p>
            </div>

            {/*Buttons for user to navigate through pages */}
            <div className = "redirects">
                <button onClick={() => navigate("/about")}>
                    About Me
                </button>
                <button onClick={() => navigate("/projects")}>
                    My Previous Projects
                </button>
                <button onClick={() => navigate("/contact")}>
                    Contact Me
                </button>
                <button onClick={() => navigate("/references")}>
                    My References
                </button>
                <button onClick={() => navigate("/services")}>
                    Other Services Offered
                </button>

                </div>

            </div>
            
        </div>
        
    );
}