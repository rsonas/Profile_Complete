import Card from '../components/Card';
import "../styles/References.css";
import { useState, useEffect } from "react";

//References page
export default function References() {

   const [references, setReference] = useState([]);
   
       useEffect(() => {
           async function loadReferences() {
               const response = await fetch (
                   `${import.meta.env.VITE_API_URL}/api/references`
               );
   
               const data = await response.json();
   
               if (response.ok) {
                   setReferences(data.data);
                   console.log(data.data);
               }
           }
   
           loadReferences();
   
       }, []);

    return (
        <div>
            <h1>References</h1>
            <div className = "referenceContainer">
                {references.map((reference, index) => (
                    <Card
                        key = {index}
                        header = {reference.name}
                        body = {reference.job}
                        footer = {reference.testimonial}
                />
                ))}

            </div>

        </div>
        
    );
}