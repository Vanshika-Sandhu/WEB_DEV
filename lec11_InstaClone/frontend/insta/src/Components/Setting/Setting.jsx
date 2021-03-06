import React, { Component } from 'react';
import './Setting.css';

class Settings extends Component {
    state = { 
        name:"",
        username:"",
        bio:"",
        email:"",
        password:"",
        profilePic:"",
        disabled:true
     }

     onChangeHandler = (e) =>{
         let type = e.target.id;
         let value = e.target.value;
         this.setState({
            [type] : value 
         });
     };

     onEditHandler = () =>{
        this.setState({
            disabled:false
        });
     };

     onCancelHandler = () =>{
        this.setState({
            disabled:true
        });
     };

     onSaveHandler =() =>{

     };

     componentDidMount(){
         let {name, username, bio, email, password, profilePic} = this.props.user;
        this.setState({
            name,
            username,
            bio,
            email,
            password,
            profilePic,
        });
     }


    render() { 
        return ( 
            <div className="setting">
                <div className="photo-edit">
                    <div className="photo-edit-header">Update Profile Picture</div>
                    <div className="userimage">
                        <img src={this.state.profilePic} alt="" className="profile-photo"/>
                    </div>
                    <div className="upload-photo">
                        <input type="file" id="photo-image" ref = ""/>
                        <div className="upload-btn"><i className="fas fa-file-upload"></i></div>
                    </div>
                </div>
                <div className="form-edit">
                    <div className="user-info">
                        <div className="key">Name</div>
                        <input type="text" id="name"  value ={this.state.name} onChange={(e)=>{this.onChangeHandler(e)}} disabled={this.state.disabled} />
                    </div>
                    <div className="user-info">
                        <div className="key">Username</div>
                        <input type="text" id="username" value={this.state.username} onChange={(e)=>{this.onChangeHandler(e)}} disabled={this.state.disabled} />
                    </div>
                    <div className="user-info">
                        <div className="key">Bio</div>
                        <input type="text" id="bio" value={this.state.bio} onChange={(e)=>{this.onChangeHandler(e)}} disabled={this.state.disabled} />
                    </div>
                    <div className="user-info">
                        <div className="key">email</div>
                        <input type="text" id="email"  value={this.state.email} onChange={(e)=>{this.onChangeHandler(e)}} disabled={this.state.disabled} />
                    </div>
                    <div className="user-info">
                        <div className="key">Password</div>
                        <input type="password" id="password"  value={this.state.password} onChange={(e)=>{this.onChangeHandler(e)}} disabled={this.state.disabled} />
                    </div>
                    <div className="options">
                        {
                            this.state.disabled ?
                            (<div className="edit"><button onClick={this.onEditHandler}>EDIT</button></div>):
                            (<div className="action">
                                <div className="save"><button onClick={this.onSaveHandler} >SAVE</button></div>
                                <div className="cancel"><button onClick={this.onCancelHandler} >CANCEL</button></div>
                             </div> )
                        }   
                    </div>
                </div>
                
            </div>
         );
    }
}
 
export default Settings;