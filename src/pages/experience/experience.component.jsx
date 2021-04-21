import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import L_INSELLERS from "../../assets/img/experience/insellers_logo.jpeg";
import Tilt from 'react-tilt';

import './experience.style.css';

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className='jumbo-style'>
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_INSELLERS} alt="Insellers logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">Intern</Card.Title>
                                </div>
                                <div>

                                    <Card.Text className="text-center style">
                                        <strong className="body-title-style ">Front-end Developer</strong>
                                        <br />
                                        <strong>Technology:</strong> Html5, CSS3, JQuery, Bootstrap, Flutter, Dart
                                        <br />
                                        <strong>Duration:</strong> Jan 2021 - Mar 2021
                                        <br />
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                            <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                                            <li><strong>Developed</strong> a flutter application which will run on both the platforms i.e. android and ios.
                                            </li>
                                        </ul>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience
