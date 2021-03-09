import React, { Component } from 'react';
import './UserProfile.css';

class UserProfile extends Component {
    state = { 
        user : null,
        isFollowed:false,
        isPublic:false,
        view:"FOLLOWING",
        posts:[],
        followers:[],
        following:[]
    }

     

    render() { 
        // let user = this.props.user;
        // console.log(user);
        return ( 
            <div className="profile">
                <div className="profile-user-info">
                    <div className="profile-user-image">
                        <img src="" alt=""/>
                    </div>
                    <div className="profile-user-detail-info">
                        <div className="profile-user-details">
                            <div className="profile-user-username">username</div>
                            <div className="profile-user-name">name</div>
                            <div className="profile-user-bio">bio</div>
                        </div>
                        <div className="profile-stats">
                            <div className="no-of-posts" ><strong>5</strong> Posts</div>
                            <div className="no-of-followers" ><strong>6</strong> Followers</div>
                            <div className="no-of-following" ><strong>3</strong> Following</div>
                        </div>
                    </div>
                </div>
                    {
                        this.state.isPublic || this.state.isFollowed ? 
                        (
                        <div className="profile-user-view-info">
                           <div className="profile-view-head">{this.state.view}</div> 
                           {
                            this.state.view === "POSTS" && (
                            <div className="profile-view-body">
                                <div className="post-entity">
                                    User post
                                </div>
                            {
                                this.state.posts.map( post =>{
                                return <div className="post-entity">
                                    USER POST
                                </div>
                                })
                            }
                            </div>
                            )
                         } 
                         {
                            this.state.view === "FOLLOWERS" && (
                            <div className="follow-view-body">
                                <div className="follow-view-list">
                                    follower view list
                                </div>
                            {
                                this.state.followers.map( follower =>{
                                return <div className="follow-entity">
                                    followers
                                </div>
                                })
                            }
                            </div>
                            )
                         } 
                         {
                            this.state.view === "FOLLOWING" && (
                            <div className="follow-view-body">
                                <div className="follow-view-list">
                                    following view list
                                </div>
                            {
                                this.state.following.map( following =>{
                                return <div className="follow-entity">
                                    following
                                </div>
                                })
                            }
                            </div>
                            )
                         } 


                        </div>

                        )
                        :(<h1>This account is private</h1>)
                    }
            </div>
         );
    }
}
 
export default UserProfile ;