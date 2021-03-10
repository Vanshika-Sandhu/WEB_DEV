import axios from 'axios';
import React, { Component } from 'react';
import "./HomeProfile.css";
import {Link} from "react-router-dom";

class HomeProfile extends Component {
    state = { 
        clickedUser:null
     }
    
     onclickHandler=(suggestion)=>{
        console.log("Inside on clicked handler");
        let clickedUser =  suggestion;
        this.props.UserClickedHandler(clickedUser);
        this.setState({
            clickedUser
        })
     }

    sendRequestHandler=(suggestion)=>{
        let uid = this.props.user["_id"];
        console.log("Inside send request handler");
        let followId = suggestion["_id"];
        // clickedUser = suggestion;
        // console.log(clickedUser);
        axios.post(`/api/request`, {uid, followId}).then( obj =>{
            console.log(obj);
            // this.componentDidMount();
            console.log("request sent");
        });
    }

    render() { 
        let { name , username, profilePic} = this.props.user;
        return ( 
            <div className="home-profile">
                <div className="user-info">
                    <Link to="/profile">
                    <div className="user-image">
                        <img src={profilePic} alt=""/>
                    </div>
                    </Link>
                    <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <div className="name-info">
                        <div className="username"><strong>{username}</strong></div>
                        <div className="name">{name}</div>
                    </div>
                    </Link>
                </div>
                <div className="user-suggestions">
                    <div className="suggestion-head">Suggestions for you</div>
                    {
                        this.props.suggestions.length ? 
                        <div className="suggestion-body">
                            {
                            this.props.suggestions.map( suggestionList => {
                                return <div key={suggestionList["_id"]} className="suggested-user user-info">
                                    <Link to="/userProfile" style={{ textDecoration: 'none' }} >
                                    <div className="sugg-img user-image" onClick = {()=>this.onclickHandler(suggestionList)}>
                                        <img src={suggestionList.profilePic} alt=""/>
                                    </div>
                                    </Link>
                                    <Link to="/userProfile" style={{ textDecoration: 'none' }} >
                                    <div className="name-info" onClick = {()=>this.onclickHandler(suggestionList)}>
                                        <div className="username"><strong>{suggestionList.username}</strong></div>
                                        <div className="name">{suggestionList.name}</div>
                                    </div>
                                    </Link>
                                    <div className="follow" onClick={()=>this.sendRequestHandler(suggestionList)}>
                                        <i className="fas fa-user-plus"></i>
                                    </div>
                                </div>
                            })
                            }
                        </div> 
                        : <div className="suggestion-body">SORRY! No suggestions found for you!</div>
                    }
                </div>
            </div>
         );
    }
}
 
export default HomeProfile;