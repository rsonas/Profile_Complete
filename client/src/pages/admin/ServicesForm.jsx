import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";
import "../../styles/Admin.css";

//services form
export default function ServiceForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    //creates blank array for content
    const [service, setService] = useState({
        title:"",
        description:""
    });

    //gets a service by its id
    async function getService() {
        try {
            const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/services/${id}`
            );

            const result = await response.json();

            setService(result.data);
        }

        catch(error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if (id) {
            getService();
        }
    }, [id]);

    //handles any input
    function handleChange(event) {
        
        setService({

            ...service,
            [event.target.name]:event.target.value
        });
    }

    //handles submitting information
    async function handleSubmit(event) {
        event.preventDefault();
        
        //console.log(service);

        //if it is updating a service
        if (id) {
            await fetch(
            `${import.meta.env.VITE_API_URL}/api/services/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },

            body:JSON.stringify(service)
        });
        //if it is submitting a new service
        }else {
            await fetch(
            `${import.meta.env.VITE_API_URL}/api/services`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },

            body:JSON.stringify(service)
        });
        }
        navigate("/admin/services");
    }

    return(
    <div className = "adminContainer">
        <form onSubmit = {handleSubmit}>
            <h1>
                {id ? "Edit Service" : "Add Service"}
            </h1>

            <div className = "formContainer">
                <label>Title </label>
                <input name = "title"
                value = {service.title}
                onChange={handleChange}
                />

                <label>Description </label>
                <input name = "description"
                value = {service.description}
                onChange={handleChange}
                />

                <div className = "submitButton">
                    <button type = "submit">
                    Save Service
                    </button>
                </div>
                
            </div>
        </form>
        </div>
    );

}