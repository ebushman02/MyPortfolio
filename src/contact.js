import React, { Component } from "react";

export default class Contact extends Component{
    render(){

        return(
        
            <div className="contact">
                <strong>Social Media and Email</strong>
                <a href="mailto:ethanjbushman@gmail.com">
                    <img src="/images/email-logo.png" className="contact-image"/>
                </a>
                <a href="https://www.linkedin.com/in/ethan-bushman" target="_blank">
                    <img src="/images/linked-in-logo.png" className="contact-image" />
                </a>
                <a href="https://www.facebook.com/ethan.bushman.39/" target="_blank"  >
                    <img src="/images/facebook-logo.png" className="contact-image" />
                </a>
            </div>
        )
    }
        
}