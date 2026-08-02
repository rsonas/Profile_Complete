import Card from '../components/Card';
import "../styles/Projects.css";
import "../styles/Card.css";
import circularlyLinkedLists from "../assets/circularlylinkedlist.webp";
import debugJava from "../assets/debugjava.webp";
import pythonPizza from "../assets/pythonpizza.webp";
import { useState, useEffect } from "react";

//projects page
export default function Projects() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            const response = await fetch (
                `${import.meta.env.VITE_API_URL}/api/projects`
            );

            const data = await response.json();

            if (response.ok) {
                setProjects(data.data);
                console.log(data.data);
            }
        }

        loadProjects();

    }, []);

    return (
        <div>
            <h1>Projects I've Worked on</h1>
            <main>
                <div className = "projectsContainer">
                    <div className = "projectsGrid">
                        {projects.map((project, index) => (
                        <Card
                            key = {index}
                            header = {project.title}
                            body = {project.description}
                            footer = {project.completion}
                            />
                        ))}

                    </div>

            </div>

        </main>
            
     </div>
        
    );
}