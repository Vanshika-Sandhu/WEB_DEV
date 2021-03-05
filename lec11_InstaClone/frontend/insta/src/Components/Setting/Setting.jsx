import React, { Component } from 'react';
import axios from "axios";
import './Setting.css';

class Settings extends Component {
    state = { 
        name:"",
        username:"",
        bio:"",
        email:"",
        password:"",
        profilePic:""
     };

    render() { 
        return ( 
            <div className="setting">
                <div className="photo-edit">
                    <div className="photo-edit-header">Update Profile Picture</div>
                    <div className="userimage">
                        <img src="../../../public/default.jpg" alt="" className="profile-photo"/>
                    </div>
                    <div className="upload-photo">
                        <input type="file" id="photo-image" ref = ""/>
                        <div className="upload-btn"><i className="fas fa-file-upload"></i></div>
                    </div>
                </div>
                <div className="form-edit">
                    <div className="user-info">
                        <div className="key">Name</div>
                        <input type="text" disabled value="ABCD"/>
                    </div>
                    <div className="user-info">
                        <div className="key">Username</div>
                        <input type="text" disabled value="ABCD"/>
                    </div>
                    <div className="user-info">
                        <div className="key">Bio</div>
                        <input type="text" disabled value="this is my bio"/>
                    </div>
                    <div className="user-info">
                        <div className="key">email</div>
                        <input type="text" disabled value="abcd@gmail.com"/>
                    </div>
                    <div className="user-info">
                        <div className="key">Password</div>
                        <input type="text" disabled value="12345"/>
                    </div>
                    <div className="options">
                    <div className="edit"><button>EDIT</button></div>
                    <div className="save"><button>SAVE</button></div>
                    <div className="cancel"><button>CANCEL</button></div>
                </div>
                </div>
                
            </div>
         );
    }
}
 
export default Settings;