import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Contact.css";
import Card from "../components/Card";
import phoneIcon from "../assets/phoneIcon.png";
import emailIcon from "../assets/emailIcon.png";
import personIcon from "../assets/personIcon.png";

//contact page
export default function Contact() {

    //creates function for button to send user back to homepage when submit is clicked
    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        console.log(formData);
        navigate("/");
    }

    //creates and populates an object to store users information
    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        contactNumber: "",
        email: "",
        message: ""
    });

    //runs when user enters any ipnut
    const handleChange = (event) => {
        const {name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //array holding data for card
    const personalInfoData = [
        {
            title: "Aislinn Richardson",
            phone: "Phone: 9054418895",
            email: "Email: richardsonaislinn@gmail.com",
        }
    ];
    
    return (
    <div>
        <h1>My Information</h1> 

        { /* Creates an interactable form for the user to submit information*/}
        <div className = "contactContainer">
            <div className = "field">
                <form onSubmit={handleSubmit}>
                    <div className = "formRow">
                        <div className = "formGroup">
                            <label>First Name </label>
                                <input
                                    name="fName"
                                    value={formData.fName}
                                    onChange={handleChange}
                                    placeholder="First Name"/>
                        </div>

                        <div className = "formGroup">
                            <label>Last Name </label>
                                <input
                                    name="lName"
                                    value={formData.lName}
                                    onChange={handleChange}
                                    placeholder="Last Name"/>
                        </div>

                    </div>

                    <div className = "formRow">
                        <div className = "formGroup">
                            <label>Phone Number: </label>
                                <input
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="Phone Number"/>
                        </div>

                        <div className = "formGroup">
                            <label>Email:</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"/>
                        </div>

                    </div>

                    <label>Message</label>
                        <textarea className = "textArea"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message"
                            />

                    <button className = "submitButton" type="submit">
                        Submit
                    </button>

                </form>

            </div>



            <div className = "personalInfo">
                <div className="infoRow">
                    <div className="imageTitle">
                        <img src={personIcon} alt="phone" />
                        <div>
                        <p className="label">Aislinn Richardson</p>
                        </div>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="imageTitle">
                        <img src={phoneIcon} alt="phone" />
                        <div>
                        <p className="label">CALL ME</p>
                        </div>
                        <p>905-441-8895</p>
                    </div>
                </div>
                <div className="infoRow">
                    <div className="imageTitle">
                        <img src={emailIcon} alt="email" />
                        <div>
                        <p className="label">EMAIL</p>
                        </div>
                        <p>richardsonaislinn@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}