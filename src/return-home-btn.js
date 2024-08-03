import React from "react";
import { Link } from 'react-router-dom'

export default class ReturnButton extends React.Component{
    render(){

    return(
    <div className="return">
        <Link to="/" className="return-link">
            <span className="arrow">&#8676;</span><span className="return-text"> Return to Home</span>
        </Link>
    </div>
    )}
}