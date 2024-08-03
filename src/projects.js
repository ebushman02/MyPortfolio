import React from "react";
import MyNavbar from "./navbar";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useRouteMatch,
  } from 'react-router-dom';

function Projects() {
    return (
        <div id="projects-link">
            
            <br/><br/><br/>
            <div className="row" id="projects">
            <h1>Projects</h1>
            <ul className="projects">
                <span className="col-sm">
                <li className="project-container">
                    <img 
                        src="/images/weather-react-app.png" 
                        alt="Image of Weather Application Created through REACT.JS" 
                        className="project-image"
                    />
                    <div className="project-image-text">
                        <div className="text">REACT Weather App</div>
                        <a href="https://github.com/ebushman02/weather-app" className="btn btn-outline-dark" target="_blank">GitHub</a>
                        <Link to="/weather" className="btn btn-outline-dark">Run Project</Link>
                    </div>
                </li>
                </span>
                <span className="col-sm">
                <li className="project-container">
                    <img 
                        src="/images/movie-react-app.png" 
                        alt="Image of Movie Review Application Created through REACT.JS" 
                        className="project-image"
                    />
                    <div className="project-image-text">
                        <div className="text">REACT Movie App</div>
                        <a href="https://github.com/ebushman02/Movie-Review" className="btn btn-outline-dark" target="_blank" >GitHub</a>
                        <Link to="/movie" className="btn btn-outline-dark">Run Project</Link>
                    </div>
                </li>
                </span>
                <span className="col-sm">
                <li className="project-container">
                    <img 
                        src="/images/blank-white-page.jpg"  
                        className="project-image"
                    />
                    <div className="project-image-text">
                        <div className="text">Unfinished Project</div>
                        <a href="" className="btn btn-outline-dark">GitHub</a>
                        <Link to="/unfinished" className="btn btn-outline-dark">Run Project</Link>
                    </div>
                </li>
                </span>
                
                
            </ul>
            </div>
        </div>
    );
}

export default Projects;
