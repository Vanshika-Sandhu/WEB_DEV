import React, { Component } from 'react';
import "./Follow.css";

class Follow extends Component {
    state = { 
        username:"",
        name:"",
        profilePic:""
     }

     componentDidMount(){
         let username = this.props.follow.username;
         let name = this.props.follow.name;
         let profilePic = this.props.profilePic;
         this.setState({
             username,
             name,
             profilePic
         });
     }

    render() { 
        
        let {username, name, profilePic} = this.props.follow;
        return ( 
            <div className="follow-component-body">
                <div className="follow-user-image">
                    <img src={profilePic} alt=""/>
                </div>
                <div className="follow-user-info">
                    <div className="follow-user-name">{username}</div>
                    <div className="follow-user-username">{name}</div>
                </div>
            </div>
          );
    }
}
 
export default Follow;