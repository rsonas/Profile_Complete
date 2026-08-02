import "../styles/Services.css"
import Card from '../components/Card';
import { useState, useEffect } from "react";

//services pages
export default function Services() {

    const [services, setServices] = useState([]);
   
       useEffect(() => {
           async function loadServices() {
               const response = await fetch (
                   `${import.meta.env.VITE_API_URL}/api/services`
               );
   
               const data = await response.json();
   
               if (response.ok) {
                   setServices(data.data);
                   console.log(data.data);
               }
           }
   
           loadServices();
   
       }, []);


    return (
        <div>
            <h1>Services Offered</h1>

            <div className = "serviceContainer">
                {services.map((service, index) => (
                    <Card
                        key = {service.id}
                        header = {service.title}
                        body = {service.description} 
                />
                ))}

            </div>
            
        </div>

    );
}