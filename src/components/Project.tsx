import React from "react";
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://yoga-shastra.com/" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://yoga-shastra.com/" target="_blank" rel="noreferrer"><h2>Yoga Sastra</h2></a>
                <p>Developed yoga sastra app with to provide users information on yoga; along with option to connect with provider</p>
            </div>
            <div className="project">
                <a href="https://www.kiet.edu/" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.kiet.edu/" target="_blank" rel="noreferrer"><h2>KIET</h2></a>
                <p>Developed KIET College website</p>
            </div>
        </div>
    </div>
    );
}

export default Project;