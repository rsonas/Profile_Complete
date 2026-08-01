import "../styles/Services.css"

//services pages
export default function Services() {
    return (
        <div>
            <h1>Services Offered</h1>

            <div className="servicesContainer">

                <div className="serviceCategory">
                    <h2>Java</h2>
                    <p>Creating functional programs using java to store information</p>
                </div>

                <div className="serviceCategory">
                    <h2>SQL</h2>
                    <p>Building databases using SQL and sorting, find, and assembling the contents wihtin them</p>
                </div>

                <div className="serviceCategory">
                    <h2>Javascript</h2>
                    <p>Using Javascript to create functional websites</p>
                </div>

            </div>
            
        </div>

    );
}