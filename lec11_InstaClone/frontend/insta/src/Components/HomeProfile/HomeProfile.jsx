import axios from 'axios';
import React, { Component } from 'react';
import "./HomeProfile.css";
import {Link} from "react-router-dom";

class HomeProfile extends Component {
    state = {  
        suggestions:[]
    }
    componentDidMount(){
        //suggestions
        let uid = this.props.user["_id"]
        axios.get(`/api/request/suggestions/${uid}`).then( obj =>{
            let suggestions = obj.data.suggestions;
            this.setState({
                suggestions:suggestions
            })
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
                        this.state.suggestions.length ? 
                        <div className="suggestion-body">
                            {
                            this.state.suggestions.map( suggestionList => {
                                return <div key={suggestionList["_id"]} className="suggested-user user-info">
                                    <div className="sugg-img user-image">
                                        <img src={suggestionList.profilePic} alt=""/>
                                    </div>
                                    <div className="name-info">
                                    <div className="username"><strong>{suggestionList.username}</strong></div>
                                        <div className="name">{suggestionList.name}</div>
                                    </div>
                                    <div className="follow">
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