import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
  faMedapps,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Angular",
  "Node",
  "SQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Linux",
  "Jenkins",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

const labelFourth = [
  "FHIR",
  "SMART on FHIR",
  "OAuth2",
  "Epic Sandbox",
  "Chrome Extension",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies such as React, Angular and Node. I have a strong
              proficiency in the SDLC process and frontend + backend
              development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Once the application is built, I help clients set up DevOps
              testing, CI/CD pipelines, and deployment automation to support the
              successful Go-Live.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              Stay relevant in the market by leveraging the latest AI models in
              your projects. I have professional experience building enterprise
              grade GenAI-enabled solutions to empower intelligent decision
              making.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faMedapps} size="3x" />
            <h3>Epic FHIR</h3>
            <p>
              Accelerate clinical interoperability with ready-to-deploy FHIR
              integrations. I bring hands-on experience building
              production-grade browser extensions and tools that
              retrieve Medical documents (prescriptions) and FHIR Bundles
              directly from major EMRs like Epic using
              SMART on FHIR and OAuth2 flows. 
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelFourth.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
