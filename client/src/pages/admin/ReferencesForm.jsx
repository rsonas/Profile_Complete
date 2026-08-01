import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";
import "../../styles/Admin.css";

//references form
export default function ReferenceForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    //creates blank array for content
    const [reference, setReference] = useState({
        name:"",
        testimonial:"",
        company:""
    });

    //gets a reference by its id
    async function getReference() {
        try {
            const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/references/${id}`
            );

            const result = await response.json();

            setReference(result.data);
        }

        catch(error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if (id) {
            getReference();
        }
    }, [id]);

    //handles any input
    function handleChange(event) {
        
        setReference({

            ...reference,
            [event.target.name]:event.target.value
        });
    }

    //handles submitting information
    async function handleSubmit(event) {
        event.preventDefault();
        
        //console.log(reference);

        //if it is updating a reference
        if (id) {
            await fetch(
            `${import.meta.env.VITE_API_URL}/api/references/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },

            body:JSON.stringify(reference)
        });
        //if it is submitting a new reference
        }else {
            await fetch(
            `${import.meta.env.VITE_API_URL}/api/references`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },

            body:JSON.stringify(reference)
        });
        }
        navigate("/admin/references");
    }

    return(
    <div className = "adminContainer">
        <form onSubmit = {handleSubmit}>
            <h1>
                {id ? "Edit Reference" : "Add Reference"}
            </h1>

            <div className = "formContainer">
                <label>Name </label>
                <input name = "name"
                value = {reference.name}
                onChange={handleChange}
                />

                <label>Testimonial </label>
                <input name = "testimonial"
                value = {reference.testimonial}
                onChange={handleChange}
                />

                <label>Company </label>
                <input name = "company"
                value = {reference.company}
                onChange={handleChange}
                />

                <div className = "submitButton">
                    <button type = "submit">
                    Save Reference
                    </button>
                </div>
                
            </div>
        </form>
        </div>
    );

}