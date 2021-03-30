import React, { Component } from 'react';
import "./LandingPage.css";
import {Link} from "react-router-dom";

class LandingPage extends Component {
    state = {  }

    onCLickHandler =() =>{

    };


    render() { 
        return ( 
            <div className="landing-page">
            <div className="landing">
                <div className="bg-image">
                    <img src="/Images/bgImage.jpg" alt=""/>
                </div>
                <div className="landing-content">
                    <h1>Resume Templates</h1>
                    <p>Pick a resume template, fill it out, and format. Create a professional resume in a few clicks. Just choose one of 10 resume templates below, add ready-made content, download, and get the job.</p>
                </div>
                <div className="choose-templates">
                        <Link to="/templates">
                            <button className="btn">Choose Templates</button>
                        </Link>
                </div>
            </div> 
            </div>
        );
    }
}
 
export default LandingPage;