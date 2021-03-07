import React, { Component } from 'react';
import './userPost.css';

class UserPost extends Component {
    state = { 
        caption:"",
        postImage:""
     }

     componentDidMount(){
        let caption = this.props.post.caption;
        let postImage = this.props.post.postImage;
        this.setState({
            postImage,
            caption
        })
     }

    render() { 
        let { caption, postImage} = this.state;
        return (  
            <div className="profile-user-post">
                <img src={postImage} alt=""/>
                <div className="profile-caption-footer">
                    <div className="profile-caption-username">Caption</div>
                    <div className="profile-post-image-caption">{caption}</div>
                    <div className="profile-post-delete">Delete</div>
                </div>
            </div>
        );
    }
}
 
export default UserPost;