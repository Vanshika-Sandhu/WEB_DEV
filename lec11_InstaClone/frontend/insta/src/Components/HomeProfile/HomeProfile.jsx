import React, { Component } from 'react';
import "./HomeProfile.css";

class HomeProfile extends Component {
    state = {  }
    render() { 
        let { name , username, profilePic} = this.props.user;
        return ( 
            <div className="home-profile">
                <div className="user-info">
                    <div className="user-image">
                        <img src={profilePic} alt=""/>
                    </div>
                    <div className="name-info">
                        <div className="username"><strong>{username}</strong></div>
                        <div className="name">{name}</div>
                    </div>
                </div>
                <div className="user-suggestions">
                    <div className="suggestion-head">Suggestions for you</div>
                </div>
            </div>
         );
    }
}
 
export default HomeProfile;