import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin.css";
import { useEffect } from "react";

//projects ;list
export default function ProjectsList() {

    const navigate = useNavigate();
    const [projects, setProjects] = useState([]); 
    
    //retrieves current list of projects
    async function fetchProjects() {
        try {
            const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/projects`);

            const result = await response.json();

            setProjects(result.data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchProjects();
    }, []);

    //deletes a project by id
    async function deleteProject(id) {
        await fetch(
            `${import.meta.env.VITE_API_URL}/api/projects/${id}`, {
            method: "DELETE"
            }
        );
    fetchProjects();
    }

    return (
         <div className = "List">

            <h1>Manage Projects</h1>

            <div>
                <button onClick={() => navigate("/admin/projects/add")} className = "addNew">
                    Add Project
                </button>

            </div>

            {
                projects.map(project => (
                    <div key ={project.id} className = "adminContent">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        { /* Improves format of date */ }
                        <p>Completed: {new Date(project.completion).toLocaleDateString()}</p>

                    <div className = "editAndDelete">
                        <button onClick={() => navigate(`/admin/projects/edit/${project.id}`)}>
                            Edit
                        </button>

                        <button onClick={() => deleteProject(project.id)}>
                            Delete
                        </button>

                    </div>
                        
                    </div>

                ))
            }

         </div>
    );


}