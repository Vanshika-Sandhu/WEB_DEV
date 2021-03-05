import React, { Component } from 'react';
import "./Post.css";

class Post extends Component {
    state = { 
        userPhoto:"",
        username:"",
        caption:"",
        postPhoto:"",
        comment:[],
        likes:[]
     };

     componentDidMount(){
         //props => post => caption
         //uid se user fetch
         //this.setState({})
     }

    render() { 
        return ( 
        <div className="post">
            <div className="post-header">
                <div className="user-photo"><i className="far fa-user-circle"></i></div>
                <div className="username">DWIGHT</div>
            </div>
            <div className="post-image">
                <img src="/backend/public/images/posts/1614940879982.jpg" alt=""/>
            </div>
            <div className="post-footer">
                <div className="reactions">
                    <div className="icons">
                        <div className="like-icon"><i className="far fa-heart"></i></div>
                        <div className="comment-icon"><i className="far fa-comment"></i></div>
                    </div>
                    <div className="numbers">
                        <div className="like-no">123 Likes</div>
                        <div className="comment-no">5 Comments</div>
                    </div>
                </div>
                <div className="caption-info">
                        <div className="username">Username</div>
                        <div className="caption">The pumpkin will rot of from my head in a month or two</div>
                </div>
                <div className="comment-box">
                    <div className="comment-info">
                            <div className="user-commented username">ABCD:</div>
                            <div className="comment">AHAHAHA hope it does come out!</div>
                    </div>
                    <div className="comment-input">
                        <input type="text" placeholder="Add a comment"/>
                        <div className="add-comment">POST</div>
                    </div>
                </div>
            </div>
        </div>
         );
    }
}
 
export default Post;