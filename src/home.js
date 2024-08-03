import React from "react";
import MyNavbar from "./navbar";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

function Home() {
    return(
    <div id="home-link">
        
        <div className="home">
            
            <h1 className="home-text">
                <div className="hi">Hi!</div>My Name is <span className="name">Ethan Bushman</span><br/> I'm a Front-End Web Developer
            </h1>
            <a href="#projects-link" className="btn btn-light">View Portfolio {">"}</a>
        </div>
            <MyNavbar />
            <br />
            <Projects />
            <About />
            <br/>
            <Contact />
            <br />
            <br/>
        
    </div>
    )
}

export default Home;