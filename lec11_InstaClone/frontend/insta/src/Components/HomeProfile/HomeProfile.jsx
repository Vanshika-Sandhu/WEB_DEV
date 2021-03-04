import React, { Component } from 'react';
import "./HomeProfile.css";

class HomeProfile extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="home-profile">
                <div className="user-info">
                    <div className="user-image">
                        <img src="default.jpg" alt=""/>
                    </div>
                    <div className="name-info">
                        <div className="username"><strong>insta_user</strong></div>
                        <div className="name">Instagrammer</div>
                    </div>
                </div>
                <div className="user-suggestions">

                </div>
            </div>
         );
    }
}
 
export default HomeProfile;