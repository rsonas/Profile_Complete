import Card from '../components/Card';
import "../styles/References.css";

//References page
export default function References() {

    //array of information with past references stored
    //NOTE: currently do not have information to populate this, I have left this in to demonstrate i am able to create these. Will populate in future
    const referenceData = [
        {
            name: "First Name",
            job: "First Job/Position",
            testimonial: "First Testimonial",
        },
        {
            name: "Second Name",
            job: "Second Job/Position",
            testimonial: "Second Testimonial",
        },
        {
            name: "Third Name",
            job: "Third Job/Position",
            testimonial: "Third Testimonial",
        },
        {
            name: "Fourth Name",
            job: "Fourth Job/Position",
            testimonial: "Fourth Testimonial",
        },
    ];

    return (
        <div>
            <h1>References</h1>
            <div className = "referenceContainer">
                {referenceData.map((reference, index) => (
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