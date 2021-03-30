import React, { Component } from 'react';
import firebaseApp from '../../firebase/firebaseConfig';
import"./Profile.css";

class Profile extends Component {
    state = { 
        email:"",
        fname:"",
        lname:"",
        password:"",
        myResumeList:[],
        disabled:true
     }


     
     onEditHandler = () =>{
        this.setState({
            disabled:false
        });
     };

     onCancelHandler = () =>{
        firebaseApp.firestore().collection("Users").doc(this.props.uid).get().then(obj =>{
            let fname = obj.data()["First Name"];
            let lname = obj.data()["Last Name"];
            let email = obj.data().Email;
            let password = obj.data().Password;
            this.setState({
                email:email,
                fname:fname,
                lname:lname,
                password:password,
                disabled:true
            });
        })
     };

     onSaveHandler = async () =>{
         console.log("inside save handler");
         await firebaseApp.firestore().collection("Users").doc(this.props.uid).update({
            Email : this.state.email,
            Password: this.state.password,
            ["First Name"]: this.state.fname,
            ["Last Name"]:this.state.lname
        });
        this.setState({
            disabled:true
        });
     };

     onChangeHandler = (e) =>{
        let type = e.target.id;
        let value = e.target.value;
        this.setState({
           [type] : value 
        });
    };



    async componentDidMount(){
        let userInfo = await firebaseApp.firestore().collection("Users").doc(this.props.uid).get();
            let fname = userInfo.data()["First Name"];
            let lname = userInfo.data()["Last Name"];
            let email = userInfo.data().Email;
            let password = userInfo.data().Password;
            let myResumes = userInfo.data().Resumes;
            let myResumeList =[];
            for(let i=0 ; i<myResumes.length ; i++){
                let {isSelected, resumeId} = myResumes[i];
                let resumeInfo = await firebaseApp.firestore().collection("Resumes").doc(resumeId).get();
                    let resumeDetails = resumeInfo.data();
                    myResumeList.push({isSelected, resumeId, resumeDetails});
            };
            console.log(myResumeList);
            this.setState({
                email:email,
                fname:fname,
                lname:lname,
                password:password,
                disabled:true,
                myResumeList:myResumeList
            });
    }
    render() { 
        // console.log(this.state.myResumeList);
        return ( 
        <div className="profile-page">
            <div className="bg-image">
                <img src="/Images/bgImage.jpg" alt=""/>
            </div>
            <div className="profile-page-info">
                <h1 className="profile-page-heading">Welcome back Vanshika!</h1>
                <div className="profile-user-info">
                    <div className="form-main-element">
                        <div className="form-element">
                            <label htmlFor="">Name</label>
                            <input type="text" id="fname" value={this.state.fname} disabled={this.state.disabled} onChange={ (e) => this.onChangeHandler(e)}/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="">Surname</label>
                            <input type="text" id="lname" value={this.state.lname} disabled={this.state.disabled} onChange={ (e) => this.onChangeHandler(e)}/>
                        </div>
                    </div>
                    <div className="form-main-element">
                        <div className="form-element">
                            <label htmlFor="">Email</label>
                            <input type="text" id="email" value={this.state.email} disabled={this.state.disabled} onChange={ (e) => this.onChangeHandler(e)}/>
                        </div>
                        <div className="form-element">
                            <label htmlFor="">Password</label>
                            {
                            this.state.disabled
                            ?                            
                            <input type="password" id="password" value={this.state.password} disabled={this.state.disabled} onChange={ (e) => this.onChangeHandler(e)}/>
                            :
                            <input type="text" id="password" value={this.state.password} disabled={this.state.disabled} onChange={ (e) => this.onChangeHandler(e)}/>
                        }                        
                        </div>
                    </div>
                </div>
           
                {
                    this.state.disabled
                    ? 
                    <div className="btn edit" onClick={this.onEditHandler}>Edit</div>
                    :
                    <div className="edit-options">
                        <div className="btn cancel" onClick={this.onCancelHandler}>Cancel</div>
                        <div className="btn save" onClick={this.onSaveHandler}>Save</div>
                    </div>
                }
                <h1 className="profile-page-heading your-resumes">Your Resumes</h1>
                <div className="profile-user-resumes">
                    {
                        this.state.myResumeList.map(Resume=>{
                            return <div key={Resume.resumeId} className="template">
                                <div className="template-image">
                                    <img src={`Images/${Resume.resumeDetails.skinId}.png`} alt=""/>
                                </div>
                                {
                                    Resume.isSelected?<div className="selected-icon"><i class="fas fa-check-circle"></i></div>: <div></div>
                                }
                                {/* <div className="choose-template"  onClick={(e)=>this.handleChooseTemplate(e)}>Choose template</div> */}
                            </div>
                        })
                    }
                </div>
            </div>
        </div>    
        );
    }
}
 
export default Profile;