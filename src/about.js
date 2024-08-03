import React from "react";
import MyNavbar from "./navbar";


function About() {
    return(
    <div id="about-link">
        
            <br/> <br/>
    <div className="row" id="about-main">
        <br/><br/>
        <div className="col-8" id="about">
            
        <h1 className="about-me">About Me</h1>
        <br/>
        <p>
        <ul>
            <li>Frontend Developer</li>
            <li>loren ipsum</li>
            <li>loren ipsum</li>
            <li>loren ipsum</li>
            <li>loren ipsum</li>
            <li>loren ipsum</li>
            <li>loren ipsum</li>
            <li>loren ipsum</li>
            <li>loren ipsum</li>
        </ul>
        </p>
        </div>
        <div className="col-sm" id="profile-image">
        <img src="/images/ethan-bushman.jpg" className="ethan"/>
        </div>
    </div>
    </div>
    )
}

export default About;