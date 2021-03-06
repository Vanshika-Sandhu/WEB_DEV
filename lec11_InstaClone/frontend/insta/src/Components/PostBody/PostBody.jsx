import React, { Component } from 'react';
import UserPost from '../userPost/userPost';
import './PostBody.css';

class PostBody extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="profile-post-body">
                <UserPost user={this.user}/>
                <UserPost user={this.user}/>
                <UserPost user={this.user}/>
            </div>
         );
    }
}
 
export default PostBody;