import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin.css";
import { useEffect } from "react";

//references ;list
export default function ReferencesList() {

    const navigate = useNavigate();
    const [references, setReferences] = useState([]); 
    
    //retrieves current list of references
    async function fetchReferences() {
        try {
            const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/references`);

            const result = await response.json();

            setReferences(result.data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchReferences();
    }, []);

    //deletes a reference by id
    async function deleteReference(id) {
        await fetch(
            `${import.meta.env.VITE_API_URL}/api/references/${id}`, {
            method: "DELETE"
            }
        );
    fetchReferences();
    }

    return (
         <div className = "List">

            <h1>Manage References</h1>

            <div>
                <button onClick={() => navigate("/admin/references/add")} className = "addNew">
                    Add Reference
                </button>

            </div>

            {
                references.map(reference => (
                    <div key ={reference.id} className = "adminContent">
                        <h2>{reference.name}</h2>
                        <p>{reference.testimonial}</p>
                        <p>{reference.company}</p>

                    <div className = "editAndDelete">
                        <button onClick={() => navigate(`/admin/references/edit/${reference.id}`)}>
                            Edit
                        </button>

                        <button onClick={() => deleteReference(reference.id)}>
                            Delete
                        </button>

                    </div>
                        
                    </div>

                ))
            }

         </div>
    );


}