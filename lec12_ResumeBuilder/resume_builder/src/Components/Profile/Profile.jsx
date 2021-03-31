import React, { Component } from 'react';
import firebaseApp from '../../firebase/firebaseConfig';
import"./Profile.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faEye, faEdit} from "@fortawesome/free-solid-svg-icons";


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

     handleSelectResume = async (e) =>{
        let selectedResumeId = e.target.id;
        console.log(selectedResumeId);
        let allResumes = this.state.myResumeList;

        for(let i=0 ;  i<allResumes.length ; i++){
            let {isSelected , resumeId} = allResumes[i];
            if(isSelected == true && this.props.resumeId == selectedResumeId){
                allResumes[i].isSelected = false;
            }
            else if(resumeId == selectedResumeId){
                allResumes[i].isSelected = true ;
            }
            else{
                allResumes[i].isSelected = false ;
            }
        };

        await firebaseApp.firestore().collection("Users").doc(this.props.uid).update({
            Resumes:allResumes
        });

        this.setState({
            myResumeList:allResumes
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
                    let resumeSkinId = resumeDetails.skinId;
                    myResumeList.push({isSelected, resumeId, resumeSkinId});
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
                <h1 className="profile-page-heading">Welcome back {this.state.fname}!</h1>
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
                {
                    this.state.myResumeList.length
                    ?
                    <div className="profile-user-resumes">
                    {
                        this.state.myResumeList.map(Resume=>{
                            return <div key={Resume.resumeId} id={Resume.resumeId} className="template">
                                <div className="template-image">
                                    <img src={`Images/${Resume.resumeSkinId}.png`} alt=""/>
                                </div>
                                {
                                    Resume.isSelected
                                    ?
                                    <React.Fragment>
                                        <div className="selected-icon"><FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon></div>
                                        <div className="template-action">
                                            {/* <FontAwesomeIcon className="action-taken" icon={faEye}></FontAwesomeIcon>
                                            <FontAwesomeIcon className="action-taken" icon={faEdit}></FontAwesomeIcon> */}
                                            <div className="action-taken"  onClick={(e)=>this.handleChooseTemplate(e)}>view</div>
                                            <div className="action-taken"  onClick={(e)=>this.handleChooseTemplate(e)}>edit</div>
                                        </div>
                                    </React.Fragment>
                                    : 
                                    <React.Fragment>
                                        <div className="template-action">
                                        {/* <FontAwesomeIcon className="action-taken" icon={faCheckCircle}></FontAwesomeIcon> */}
                                        <div className="action-taken" id={Resume.resumeId} onClick={(e)=>this.handleSelectResume(e)}>select</div>
                                        </div>
                                    </React.Fragment>
                                }
                            </div>
                        })
                    }
                    </div>
                    :
                    <React.Fragment>
                        <p>Sit tight, resumes loading.</p>
                    </React.Fragment>
                }   
            </div>
        </div>    
        );
    }
}
 
export default Profile;