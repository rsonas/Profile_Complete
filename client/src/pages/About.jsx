import "../styles/About.css";
import headshot from "../assets/headshot.png";

//About page
export default function About() {

    //imports resume to display later in page
    const resume = new URL("../assets/Aislinn_Richardson_Resume.pdf", import.meta.url).href;
    
    return (

        <div> 
            <h1>Aislinn Richardson</h1>

            <div className = "aboutContainer">
                <div className = "content">
                    <div className = "text">
                        <p>My name is AIslinn and I am a third semester student in the Software Engineering program with a specialization in AI</p>
                        <p>I have been programming for almost ten years and have always loved working with computers both software and hardware. My favourite languages are Java, Python, and SQL</p>
                        <p>Outside of programming I am also an avid cook/baker, and i enjoy going for daily runs. </p>
                    </div>

                <img src = {headshot} className = "headshot"></img>

            {/*Creates frame to allow user to view and scroll through pdf */}
            </div>
            <iframe
                src = {resume}
                title = "Resume"
                width = "800px"
                height = "900px" />
            </div>
            
        </div>
        
    );
}