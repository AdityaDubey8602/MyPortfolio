import React from 'react';
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from 'react-bootstrap/Container';

//Components
import MyNavbar from "./components/my-navbar/mynavbar.component.jsx";
import MyCarousel from "./components/my-carousel/mycarousel.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Skills from "./pages/skills/skills.component";
import Experience from "./pages/experience/experience.component";
import Projects from "./components/projects-timeline/projects-timeline.component";
import Contact from "./pages/contact-form/contact-form.component";
import Footer from "./components/footer/footer.component";

import './App.css';


const App = () => {

  return (

    <div style={{ position: "relative" }}>
      {/* <Particles
        className="particles-canvas"
        params={
          {
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                }
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 6,
                  color: "#f9ab00"
                }
              }
            }
          }
        }
      /> */}
      <MyNavbar />
      <MyCarousel />
      <TitleMessage />


      {/* about me section */}
      <div>
        <Parallax blur={{ min: -1000, max: 1000 }} bgImage={require('./assets/img/parallex/background.webp')} bgImageAlt="" strength={-200}>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <hr />
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>

      {/* Skills Section */}
      <div>
        <Container className="skills-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>

      {/* Experience Section */}
      <div>
        <Container className="skills-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>

      {/* Projects Section */}
      <div>
        <Container className="skills-box rounded">
          <Slide bottom duration={200}>
            <hr />
            <Projects />
          </Slide>
        </Container>
      </div>

      {/* Contact Section */}
      <div>
        <Container className="skills-box rounded">
          <Fade duration={500}>
            <hr />
            <Contact />
          </Fade>
        </Container>
      </div>

      <hr />
      <Footer />

    </div>

  );

}

export default App;
