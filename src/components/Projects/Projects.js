import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import prime from "../../Assets/Projects/prime.png"
import glamm from "../../Assets/Projects/glamm.png"
import travelocity from "../../Assets/Projects/travelocity.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prime}
              isBlog={false}
              title="Amazon Prime"
              description="A Streaming & Entertainment service offered by Amazon which serve different type of shows , movies etc.Sign-in/Sign-up & Payment page made for smooth functionality of website.HTML , CSS & JavaScript used in it."
              link="https://github.com/huzaifa621/primeVideoProject"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glamm}
              isBlog={false}
              title="My Glamm"
              description=" An eCommerce website that caters to shopping for Makeup & Beauty products.Way of showcasing the products is really upto the mark.HTML , CSS & JavaScript used in it."
              link="https://github.com/sam12125/myGlamm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelocity}
              isBlog={false}
              title="Travelocity"
              description="An online travel agency used for booking of holiday trips , flights , hotels etc.Used api for fetching the data of diffrent cities.HTML , CSS , JavaScript & React used in it"
              link="https://github.com/AmanJaiswal0612/React_Travelocity_Clone"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
