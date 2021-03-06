import React, { Component } from 'react';
import "./Profile.css";

class Profile extends Component {
    state = {  }
    render() { 
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
                            <div className="profile-user-bio">this is my bio</div>
                        </div>
                        <div className="profile-stats">
                            <div className="no-of-posts"><strong>5 </strong> Posts</div>
                            <div className="no-of-followers"><strong>150 </strong> Following</div>
                            <div className="no-of-following"><strong>100 </strong> Followers</div>
                        </div>
                    </div>
                </div>
                <div className="profile-user-posts">
                    <div className="profile-user-post">
                        <img src="" alt=""/>
                        <div className="profile-caption-footer">
                            <div className="profile-caption-username">username</div>
                            <div className="profile-post-image-caption">lalala</div>
                        </div>
                    </div>
                    <div className="profile-user-post">
                        <img src="" alt=""/>
                        <div className="profile-caption-footer">
                            <div className="profile-caption-username"></div>
                            <div className="profile-post-image-caption"></div>
                        </div>
                    </div>
                    <div className="profile-user-post">
                        <img src="" alt=""/>
                        <div className="profile-caption-footer">
                            <div className="profile-caption-username"></div>
                            <div className="profile-post-image-caption"></div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Profile;