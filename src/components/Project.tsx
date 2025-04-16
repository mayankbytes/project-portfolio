import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
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