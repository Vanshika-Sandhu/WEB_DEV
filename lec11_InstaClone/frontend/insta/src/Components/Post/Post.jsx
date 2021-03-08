import React, { Component } from 'react';
import "./Post.css";
import axios from "axios";
import uid from "../../uid";

class Post extends Component {
    state = { 
        userPhoto:"",
        username:"",
        caption:"",
        postImage:"",
        comments:[],
        likes:[],
        commentInput:""
     };

     componentDidMount(){
         let postUserUid = this.props.post.uid;
         let post = this.props.post;
         axios.get(`/api/user/${postUserUid}`).then(obj=>{
            let postUser = obj.data.user;
            this.setState({
                userPhoto: postUser.profilePic,
                username:postUser.username,
                caption: post.caption,
                postImage: post.postImage,
                comments: post.comments,
                likes: post.likes,
                commentInput:""
            })
         });
     }

     onLikeHandler = () =>{
        let pid = this.props.post["_id"];
        axios.get(`api/post/like/${uid}/${pid}`).then(obj=>{
            let updatePost = obj.data.updatedPost;
            this.setState({
                likes:updatePost.likes
            });

        });
     };

     onCommentTypeHandler = (value) =>{
        this.setState({
            commentInput:value
        })
    }



    render() { 
        let {username, userPhoto , caption, postImage, comments, likes} = this.state;
        return ( 
        <div className="post">
            <div className="post-header">
                <div className="user-photo"><img src={userPhoto} alt=""/></div>
                <div className="username">{username}</div>
            </div>
            <div className="post-image">
                <img src={postImage} alt=""/>
            </div>
            <div className="post-footer">
                <div className="reactions">
                    <div className="icons">
                        <div className="like-icon" onClick={this.onLikeHandler} ><i className="far fa-heart"></i></div>
                        <div className="comment-icon"><i className="far fa-comment"></i></div>
                    </div>
                    <div className="numbers">
                        <div className="like-no" >{likes.length} Likes</div>
                        <div className="comment-no">{comments.length} Comments</div>
                    </div>
                </div>
                <div className="caption-info">
                        <div className="username">{username}</div>
                        <div className="caption">{caption}</div>
                </div>
                <div className="comment-box">
                    <div className="comment-info">
                            <div className="user-commented username">ABCD:</div>
                            <div className="comment">AHAHAHA hope it does!</div>
                    </div>
                    <div className="comment-input">
                        <input type="text" placeholder="Add a comment" value={this.state.commentInput} onChange={ (e) => {this.onCommentTypeHandler(e.target.value)}}/>
                        <div className="add-comment">POST</div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Post;