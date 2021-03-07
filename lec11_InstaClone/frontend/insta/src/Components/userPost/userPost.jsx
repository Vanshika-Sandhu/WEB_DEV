import React, { Component } from 'react';
import './userPost.css';
import axios from "axios";

class UserPost extends Component {
    state = { 
        caption:"",
        postImage:""
     }

     componentDidMount(){
        let caption = this.props.post.caption;
        let postImage = this.props.post.postImage;
        let postId = this.props.post["_id"];
        this.setState({
            postImage,
            caption,
            postId
        })
     }

     onDeleteHandler=()=>{
        let pid = this.state.postId;
        //console.log(pid);
        //console.log("delete button clicked");

        axios.delete(`/api/post/${pid}`).then( obj => {
            //console.log(obj);
            if(obj.data.deletedPost){
                console.log("deleted post successfully");
                this.componentDidMount();
            }     
        });
     }

    render() { 
        let { caption, postImage} = this.state;
        return (  
            <div className="profile-user-post">
                <img src={postImage} alt=""/>
                <div className="profile-caption-footer">
                    <div className="profile-caption-username">Caption</div>
                    <div className="profile-post-image-caption">{caption}</div>
                    <div className="profile-post-delete" onClick={this.onDeleteHandler}>Delete</div>
                </div>
            </div>
        );
    }
}
 
export default UserPost;