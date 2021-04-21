import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";

//projects
import L_ReactToDoList from "../../assets/img/projects/React_ToDo_List.webp";
import L_MernTipCalc from "../../assets/img/projects/mern_tip_calc.webp";
import L_GetGitHubInfo from "../../assets/img/projects/get_github_info.webp";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_RoboFriends from "../../assets/img/projects/Robofriends.webp";
import L_ProductHuntClone from "../../assets/img/projects/product_hunt_clone.webp";
import L_PortfolioUsingDjango from "../../assets/img/projects/portfolioUsingDjango.webp";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

import './projects-timeline.style.css';



const ProjectTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: Todo List With MUI */}
                    <ImageEvent
                        date="01/10/2020"
                        className="text-center"
                        text="React ToDo App"
                        src={L_ReactToDoList}
                        alt="React ToDo App"
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
                                                <strong>Description:</strong> This is a Todo App created with React and Material UI that keeps a track of your Todos
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Keeps track of your Todos</li>
                                                    <li>Powered by React and Material UI</li>
                                                    <li>Respoisive Design</li>
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
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              React
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MATERIALUI}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Material-UI
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
                                    href="https://akjha96.github.io/Todo-List-React/"
                                    target="_blank"
                                >
                                    SEE LIVE
                </UrlButton>
                                <UrlButton
                                    href="https://github.com/akjha96/Todo-List-React"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>
                                <UrlButton
                                    href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                                    target="_blank"
                                >
                                    WATCH VIDEO
                </UrlButton>
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: MERN Tip Calculator */}
                    <ImageEvent
                        date="16/09/2020"
                        className="text-center"
                        text="MERN Tip Calculator"
                        src={L_MernTipCalc}
                        alt="MERN Tip Calculator"
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
                                                <strong>Description:</strong> This app calculates Tip for the amount entered and percentage of tip to be given.
                        It uses MERN stack build to acomplish the same.
                        <hr />
                                                <strong>Features:</strong>
                                                <ul className="list-styles pt-1">
                                                    <li>Enter amount upto your desire</li>
                                                    <li>Real-time API calls with Backend features</li>
                                                    <li>Styled with  Material-UI</li>
                                                </ul>
                                                <hr />
                                                <strong>Tech used:</strong>
                                                <ul>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              React
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_NODE_JS}
                                                                alt="Node.js"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Node.js
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_EXPRESS}
                                                                alt="Express"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Express
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MONGODB}
                                                                alt="MongoDB"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              MongoDB
                            </span>
                                                    </li>
                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_MATERIALUI}
                                                                alt="Material-UI"
                                                                rounded
                                                                className="image-style1 m-1"
                                                            ></Image>{" "}
                              Material-UI
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
                                    href="https://github.com/akjha96/MernTipCaculator-FrontEnd"
                                    target="_blank"
                                >
                                    SOURCE CODE
                </UrlButton>
                                <UrlButton
                                    href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-nodejs-expressjs-activity-6712281977107603456-oH6t"
                                    target="_blank"
                                >
                                    WATCH VIDEO
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
