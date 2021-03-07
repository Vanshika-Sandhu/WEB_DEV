import React, { Component } from 'react';
import axios from "axios";
import "./Profile.css";
import UserPost from '../userPost/userPost';
import Follow from '../Follow/Follow';

class Profile extends Component {
    state = { 
        view:"POSTS",
        posts:[],
        followers:[],
        following:[]
     };

     componentDidMount(){
         let uid = this.props.user["_id"];
         let posts=[];
         let followers=[];
         let following=[];

         axios.get(`/api/post/${uid}`).then(obj=>{
            let Myposts = obj.data.myposts;
            if(Myposts){
                posts= Myposts;
                console.log(posts);
            }
            let followerObjecPromise = axios.get(`/api/request/follower/${uid}`);
            return followerObjecPromise;
         })
         .then(obj=>{
            let Myfollowers = obj.data.myFollowers;
            if(Myfollowers){
                followers = Myfollowers;
            }
            let followingObjecPromise = axios.get(`/api/request/following/${uid}`);
            return followingObjecPromise;
         })
         .then(obj=>{
            let Myfollowing = obj.data.myFollowing;
            if(Myfollowing){
                following = Myfollowing;
            }
            this.setState({
                posts,
                followers,
                following
            });
         });
     }

     onPostClickHandler=()=>{
         this.setState({
             view:"POSTS"
         });
     };

     onFollowerClickHandler=()=>{
         this.setState({
             view:"FOLLOWERS"
         });
     };

     onFollowingClickHandler=()=>{
        this.setState({
            view:"FOLLOWING"
        });
    }

    render() { 
        let {name, username, profilePic, bio} = this.props.user;
        let followerAction = "Remove";
        let followingAction = "Following";
        return ( 
            <div className="profile">
                <div className="profile-user-info">
                    <div className="profile-user-image">
                        <img src={profilePic} alt=""/>
                    </div>
                    <div className="profile-user-detail-info">
                        <div className="profile-user-details">
                            <div className="profile-user-username">{username}</div>
                            <div className="profile-user-name">{name}</div>
                            <div className="profile-user-bio">{bio}</div>
                        </div>
                        <div className="profile-stats">
                            <div className="no-of-posts" onClick={()=>{ this.onPostClickHandler()}} ><strong>{this.state.posts.length}</strong> Posts</div>
                            <div className="no-of-followers" onClick={()=>{this.onFollowerClickHandler()}} ><strong>{this.state.followers.length}</strong> Followers</div>
                            <div className="no-of-following" onClick={()=>{this.onFollowingClickHandler()}} ><strong>{this.state.following.length}</strong> Following</div>
                        </div>
                    </div>
                </div>
                <div className="profile-user-view-info">
                    <div className="profile-view-head">{this.state.view}</div>
                    {
                        this.state.view == "POSTS" && (
                            this.state.posts.length ? 
                            <div className="profile-view-body">
                            {
                                this.state.posts.map( post =>{
                                return <UserPost post={post} key={post["_id"]}/>
                                })
                            }
                            </div>
                            : <div className="profile-view-body">SORRY! You have no post!</div>    
                        )
                    }
                    {
                        this.state.view == "FOLLOWERS" && (
                            this.state.followers.length ? 
                            <div className="follow-view-body">
                                <div className="followe-view-list">
                                    {
                                    this.state.followers.map( follower =>{
                                    return <Follow follow={follower} action={followerAction}/>
                                    })
                                    }
                                </div>
                            </div>
                            : <div className="follow-view-body">You have no follower!</div>    
                        )
                    }
                    {
                        this.state.view == "FOLLOWING" && (
                            this.state.following.length ? 
                            <div className="follow-view-body">
                                <div className="follow-view-list">
                                    {
                                     this.state.following.map( followingUsers =>{
                                     return <Follow follow={followingUsers} action={followingAction}/>
                                     })
                                    }
                                </div>
                            </div>
                            : <div className="follow-view-body">You do not follow any user!</div>    
                        )
                    }




                   </div>
            </div>
         );
    }
}
 
export default Profile;