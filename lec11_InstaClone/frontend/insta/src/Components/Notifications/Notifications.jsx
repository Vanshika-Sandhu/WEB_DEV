import React, { Component } from 'react';
import Follow from '../Follow/Follow';
import "./Notifications.css";
import HomeProfile from "../HomeProfile/HomeProfile";
import axios from "axios";

class Notifications extends Component {
    state = { 
        user : null,
        followRequests : []
     }

    componentDidMount(){
        let uid = this.props.user["_id"];
        this.setState({
            user: this.props.user,
            uid,
            followRequests : []
        });

        axios.get(`/api/request/${uid}`).then(obj=>{
            let myFollowRequests = obj.data.requests;
            if(myFollowRequests.length){
                this.followReq = myFollowRequests;
            }
            this.setState({
                followRequests:this.followReq
            });
        })
    }
    
    render() { 

        let action = "Accept";
        return (
        <div className="notifications-page">
            { 
            this.state.user ? 
                (
                <div className="notifications">
                    <div className="notifications-body">
                        <div className="follow-requests">
                            <div className="follow-request-header">
                                <div className="profile-view-head">Follow Requests</div>
                                <div className="follow"><i className="fas fa-user-plus"></i></div>
                            </div>
                            <div className="follow-view-body">
                                 {
                                    this.state.followRequests.length ? 
                                    <div className="follow-view-list">
                                            {
                                            this.state.followRequests.map( followReq =>{
                                            return <Follow follow={followReq} action={action}/>
                                            })
                                            }
                                    </div>
                                    :<div className="follow-view-body">You have no follow requests!</div>    
                                }
                            </div>
                        </div>
                    </div>   
                    <HomeProfile user = {this.state.user}/> 
                </div>
                )
                : (<h1>Loading Data</h1> )
                }  
                </div>
        );
    }
}
 
export default Notifications;