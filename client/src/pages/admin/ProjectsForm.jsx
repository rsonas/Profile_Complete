import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { useParams} from "react-router-dom";
import "../../styles/Admin.css";

//projects form
export default function ProjectForm() {

    const navigate = useNavigate();
    const { id } = useParams();

    //creates blank array for content
    const [project, setProject] = useState({
        title:"",
        description:"",
        completion:""
    });

    //gets a project by its id
    async function getProject() {
        try {
            const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/projects/${id}`
            );

            const result = await response.json();

            setProject(result.data);
        }

        catch(error) {
            console.error(error);
        }
    }
    useEffect(() => {
        if (id) {
            getProject();
        }
    }, [id]);

    //handles any input
    function handleChange(event) {
        
        setProject({

            ...project,
            [event.target.name]:event.target.value
        });
    }

    //handles submitting information
    async function handleSubmit(event) {
        event.preventDefault();
        
        //console.log(project);

        //if it is updating a project
        if (id) {
            await fetch(
            `${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },

            body:JSON.stringify(project)
        });
        //if it is submitting a new project
        }else {
            await fetch(
            `${import.meta.env.VITE_API_URL}/api/projects`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },

            body:JSON.stringify(project)
        });
        }
        navigate("/admin/projects");
    }

    return(
    <div className = "adminContainer">
        <form onSubmit = {handleSubmit}>
            <h1>
                {id ? "Edit Project" : "Add Project"}
            </h1>

            <div className = "formContainer">
                <label>Title </label>
                <input name = "title"
                required
                value = {project.title}
                onChange={handleChange}
                />

                <label>Description </label>
                <input name = "description"
                value = {project.description}
                onChange={handleChange}
                />

                <label>Date COmpleted </label>
                <input name = "completion"
                value = {project.completion}
                onChange={handleChange}
                />

                <div className = "submitButton">
                    <button type = "submit">
                    Save Project
                    </button>
                </div>
                
            </div>
        </form>
        </div>
    );

}