import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin.css";
import { useEffect } from "react";

//services ;list
export default function ServicesList() {

    const navigate = useNavigate();
    const [services, setServices] = useState([]); 
    
    //retrieves current list of services
    async function fetchServices() {
        try {
            const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/services`);

            const result = await response.json();

            setServices(result.data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchServices();
    }, []);

    //deletes a service by id
    async function deleteService(id) {
        await fetch(
            `${import.meta.env.VITE_API_URL}/api/services/${id}`, {
            method: "DELETE"
            }
        );
    fetchServices();
    }

    return (
         <div className = "List">

            <h1>Manage Services</h1>

            <div>
                <button onClick={() => navigate("/admin/services/add")} className = "addNew">
                    Add Service
                </button>

            </div>

            {
                services.map(service => (
                    <div key ={service.id} className = "adminContent">
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        { /* Improves format of date */ }
                        <p>Completed: {new Date(service.completion).toLocaleDateString()}</p>

                    <div className = "editAndDelete">
                        <button onClick={() => navigate(`/admin/services/edit/${service.id}`)}>
                            Edit
                        </button>

                        <button onClick={() => deleteService(service.id)}>
                            Delete
                        </button>

                    </div>
                        
                    </div>

                ))
            }

         </div>
    );


}