import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";


//My Projects
import L_Todo from "../../assets/img/projects/todo.png";
import L_Weather from "../../assets/img/projects/weather.png";
import L_Pipboy from "../../assets/img/projects/pipboy.png";
import L_Grade from "../../assets/img/projects/grade.png";
import L_Confusion from "../../assets/img/projects/Confusion.png";
import L_Chat from "../../assets/img/projects/chat.jpg";
import L_CGS from "../../assets/img/projects/CGS.jpeg";


// skills
import L_Javascipt from "../../assets/img/skills/javascript.svg";
import L_XML from "../../assets/img/skills/xml.png";
import L_Flutter from "../../assets/img/skills/flutter.png";
import L_Dart from "../../assets/img/skills/dart.svg";
import L_Firebase from "../../assets/img/skills/firebase.png";
import L_Java from "../../assets/img/skills/java.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_Ajax from "../../assets/img/skills/ajax.png";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";

import './projects-timeline.style.css';



const ProjectTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>

                    {/* Project: Chat App */}
                    <ImageEvent
                        date="15/03/2021"
                        className="text-center"
                        text="Chat App UI"
                        src={L_Chat}
                        alt="Chat App UI"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A Hard Coded Chat application just for learning widgets to gain more hands on experience.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Helps understanding how to chat app UI can be made.</li>
                                                    <li>Static Chat App</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Flutter}
                                                                alt="Flutter"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              Flutter
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Dart}
                                                                alt="Dart"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              Dart
                            </span>

                                                    </li>


                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">

                                <UrlButton
                                    href="https://github.com/AdityaDubey8602/Chat_App"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Restaurant Website */}
                    <ImageEvent
                        date="19/12/2020"
                        className="text-center"
                        text="ConFusion"
                        src={L_Confusion}
                        alt="ConFusion"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> A restaurant website I built from a Coursera course just to learn the concepts of bootstrap 4.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>You can learn about so many concepts regarding Bootstrap4</li>
                                                    <li>Use of npm can be understand from making this website.</li>

                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              HTML 5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              CSS 3
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascipt}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Javascript
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="Bootstrap 4"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Bootstrap 4
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt="Node JS"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Node Js
                            </span>

                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/AdityaDubey8602/ConFusion"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Weather App */}
                    <ImageEvent
                        date="25/10/2020"
                        className="text-center"
                        text="Weather App"
                        src={L_Weather}
                        alt="Weather App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> Its a weather showing application I created using Ajax.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>You can search weather of any place in this app.</li>
                                                    <li>Use of Ajax makes it super easy to check weather conditions of places.</li>

                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              HTML 5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              CSS 3
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascipt}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Javascript
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="Bootstrap 4"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Bootstrap 4
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Ajax}
                                                                alt="Ajax"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Ajax
                            </span>

                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/AdityaDubey8602/Weather-app"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Student Grade Calculator */}
                    <ImageEvent
                        date="23/10/2020"
                        className="text-center"
                        text="Student Grade Calculator"
                        src={L_Grade}
                        alt="Student Grade Calculator"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This app calculates grade of student and describe if the student passes or not.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Enter marks and you'll get your results</li>
                                                    <li>Complete use of javascript can be seen here.</li>

                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              HTML 5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              CSS 3
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascipt}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Javascript
                            </span>

                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                    href="https://github.com/AdityaDubey8602/StudentGradeCalculator"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Todo List With Javascript */}
                    <ImageEvent
                        date="20/10/2020"
                        className="text-center"
                        text="ToDo App"
                        src={L_Todo}
                        alt="ToDo App"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a Todo App created with Javascript UI that keeps a track of your Todos.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Keeps track of your Todos</li>
                                                    <li>Responsive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              HTML5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              CSS3
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascipt}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Javascript

                            </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">

                                <UrlButton
                                    href="https://github.com/AdityaDubey8602/ToDoList"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: CGS using Java */}
                    <ImageEvent
                        date="8/09/2020"
                        className="text-center"
                        text="Career Guidance System"
                        src={L_CGS}
                        alt="Career Guidance System"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a website based on game UI, built just to understand the concepts of Bootstrap4.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Helps students to decide which career path they should choose.</li>
                                                    <li>Simple UI</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Java}
                                                                alt="Java"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              Java
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_XML}
                                                                alt="XML"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              XML
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Firebase}
                                                                alt="Firebase"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Firebase

                            </span>
                                                    </li>


                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">

                                <UrlButton
                                    href="https://github.com/AdityaDubey8602/Career-Guidance-System"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Pipboy With Bootstrap */}
                    <ImageEvent
                        date="7/08/2020"
                        className="text-center"
                        text="Pipboy"
                        src={L_Pipboy}
                        alt="Pipboy"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                    <Card>
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            className="p-2 text-center accordian-main"
                                        >
                                            PROJECT DETAILS
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0" className="text-left">
                                            <Card.Body>
                                                <strong>Description:</strong> This is a website based on game UI, built just to understand the concepts of Bootstrap4.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Clears all the basic concepts regarding Bootstrap 4</li>
                                                    <li>Responsive Design</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML 5"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              HTML5
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS 3"
                                                                rounded
                                                                className="image-style m-1"
                                                            ></Image>{" "}
                              CSS3
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_Javascipt}
                                                                alt="Javascript"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Javascript

                            </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_BOOTSTRAP4}
                                                                alt="Bootstrap 4"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Bootstrap 4

                            </span>
                                                    </li>

                                                </ul>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">

                                <UrlButton
                                    href="https://github.com/AdityaDubey8602/Pipboy"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>

                            </div>
                        </div>
                    </ImageEvent>

                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline
