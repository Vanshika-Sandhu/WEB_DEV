import React, { Component } from 'react';
import './UserProfile.css';
import axios from "axios";
import UserPost from '../userPost/userPost';
import Follow from '../Follow/Follow';


class UserProfile extends Component {
    state = { 
        isFollowed:false,
        isPublic:true,
        view:"POSTS",
        posts:[],
        followers:[],
        following:[]
    }


    componentDidMount(){
        console.log("inside user profile");
        let uid = this.props.profileUser["_id"];
         console.log(uid);
         let posts=[];
         let followers=[];
         let following=[];

         axios.get(`/api/post/${uid}`).then(obj=>{
            // console.log(obj);
            let Userposts = obj.data.myposts;
            console.log(Userposts);
            if(Userposts){
                posts= Userposts;
                let sortedPosts = posts.sort( (a,b)=>{
                    return new Date(b.createdOn) - new Date(a.createdOn) ;
                })
                posts= sortedPosts;
            }
            let followerObjecPromise = axios.get(`/api/request/follower/${uid}`);
            return followerObjecPromise;
         })
         .then(obj=>{
            let Userfollowers = obj.data.myFollowers;
            if(Userfollowers){
                followers = Userfollowers;
            }
            let followingObjecPromise = axios.get(`/api/request/following/${uid}`);
            return followingObjecPromise;
         })
         .then(obj=>{
            let Userfollowing = obj.data.myFollowing;
            if(Userfollowing){
                following = Userfollowing;
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
        // let user = this.props.user;
        // console.log(user);
        let {name, username, profilePic, bio} = this.props.profileUser;
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
                            <div className="no-of-followers" onClick={()=>{this.onFollowerClickHandler()}}  ><strong>{this.state.followers.length}</strong> Followers</div>
                            <div className="no-of-following" onClick={()=>{this.onFollowingClickHandler()}} ><strong>{this.state.following.length}</strong> Following</div>
                        </div>
                    </div>
                    <div className="profile-follow-action-button">
                        <div className="action-btn">FOLLOW</div>
                    </div>
                </div>

                    {
                        this.state.isPublic || this.state.isFollowed ? 
                        (
                        <div className="profile-user-view-info">
                           <div className="profile-view-head">{this.state.view}</div> 
                           {
                            this.state.view === "POSTS" && (
                                this.state.posts.length ? 
                                <div className="profile-view-body">
                                {
                                    this.state.posts.map( post =>{
                                    return <div className="post-entity">
                                        <UserPost post={post} key={post["_id"]}/>
                                    </div>
                                    })
                                }
                                </div>
                                : <div className="profile-view-body">NO POSTS YET</div>    
                            )
                         } 
                         {
                            this.state.view === "FOLLOWERS" && (
                                this.state.followers.length ? 
                                <div className="follow-view-body">
                                    <div className="follow-view-list">
                                        {
                                        this.state.followers.map( follower =>{
                                        return <div className="follow-entity">
                                            <Follow follow={follower} key={follower["_id"]}/>
                                        </div>
                                        })
                                        }
                                    </div>
                                </div>
                                : <div className="follow-view-body">NO FOLLOWERS</div>    
                             )
                         } 
                         {
                            this.state.view === "FOLLOWING" && (
                                this.state.following.length ? 
                                <div className="follow-view-body">
                                    <div className="follow-view-list">
                                        {
                                            this.state.following.map( following =>{
                                            return <div className="follow-entity">
                                                <Follow follow={following} key={following["_id"]} />
                                            </div>
                                            })
                                            }
                                        </div>
                                </div>
                                : <div className="follow-view-body">NO FOLLOWING</div>    
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