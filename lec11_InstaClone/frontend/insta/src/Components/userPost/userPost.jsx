import React, { Component } from 'react';
import './userPost.css'

class UserPost extends Component {
    state = { 
        user:""
     }

     componentDidMount(){
        let username = this.props.user.username;
        this.setState({
            username
        })
     }

    render() { 
        let username = this.state;
        return (  
            <div className="profile-user-post">
                <img src="" alt=""/>
                <div className="profile-caption-footer">
                    <div className="profile-caption-username">{username}</div>
                    <div className="profile-post-image-caption">lalala</div>
                </div>
            </div>
        );
    }
}
 
export default UserPost;