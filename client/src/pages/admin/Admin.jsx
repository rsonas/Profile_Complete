import { useNavigate } from "react-router-dom";
import "../../styles/App.css";
import "../../styles/Admin.css";

//admin page
export default function Admin() {

    const navigate = useNavigate() 
    
    return (
        <div>
        <h1>Admin</h1>

        {/*Buttons for user to navigate through pages */}
            <div className = "redirects">
                <button onClick={() => navigate("/admin/projects")}>
                    Manage Previous Projects
                </button>
                <button onClick={() => navigate("/admin/references")}>
                    Manage References
                </button>
                <button onClick={() => navigate("/admin/services")}>
                    Manage Other Services Offered
                </button>
                <button onClick={() => navigate("/admin/users")}>Manage Users</button>

                </div>
            
        </div>
        
    );
}