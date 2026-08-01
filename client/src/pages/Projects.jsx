import Card from '../components/Card';
import "../styles/Projects.css";
import "../styles/Card.css";
import circularlyLinkedLists from "../assets/circularlylinkedlist.png";
import debugJava from "../assets/debugjava.png";
import pythonPizza from "../assets/pythonpizza.png";

//projects page
export default function Projects() {

    //array of information with previous projects completed
    const projectData = [
        {
            title: "Java: Circularly Linked Lists",
            image: circularlyLinkedLists,
            description: "In this program our task was to create a circularly linked list, duplicate it, and rotate it so the starting position was not the same. We then needed to create a method in order to test if these two linked lists were the same. When creating the method if you do not take the different starts into account, your method will give the wrong answer as the starting element is different. This method first searches through both lists and loops comparing the first element of the first list to each element in the second. Once it finds a match, it will then loop through the lists and compare both elements to check if they are in the same order. If they are all the same, the Boolean method returns true. if not, it returns false",
            dateCompleted: "Completed: May 31st, 2026"
        },
        {
            title: "Java Code Cleanup",
            image: debugJava,
            description: "In this exercise our task was to take existing code, and use eclipses debugging functions to test the code for error. The programs purpose is to book flights for passengers. This program gives the option of business/economy, checking if they are a frequent flyer (no benefits in this version yet, will come in another update), and check to see if they are eligible for an employee discount. The program had many issues, mainly in the sellTIcket() function like not adding the discount correctly, repeating prompts multiple times in the same line, and not saving any inputted passenger information which allowed you to endlessly buy and never save seats. The method was tested and now runs as intended",
            dateCompleted: "Completed: June 5th, 2026"
        },
        {
            title: "Python Pizza Exercise",
            image: pythonPizza,
            description: "This was an exercise in familiarizing ourslves with the structure of classes in python. We were given expected output and needed to write a program in python that replicated that output exactly. In the class Pizza we are able to create objects to modify the topings and size to get different prices. We can also create mew instances if we want to make another pizza, as well as change attributes about the one we have created",
            dateCompleted: "May 23, 2023"
        },
    ]; 

    return (
        <div>
            <h1>Projects I've Worked on</h1>
            <div className = "projectsContainer">
            <div className = "projectsGrid">
                {/*loops through items in array projetDasta and rrturns card components */}
                {projectData.map((project, index) => (
                <Card
                    key = {index}
                    header = {project.title}
                    media = {<img src={project.image}/>}
                    body = {project.description}
                    footer = {project.dateCompleted}
                    />
                ))}

                </div>

            </div>

        </div>
        
    );
}