import React, { Component } from 'react';
import firebase from "../../firebase/firebaseConfig";
import "./Education.css";
import {educationCodes} from "../../util/codes";
import Skin2 from '../Skins/Skin2';
import firebaseApp from '../../firebase/firebaseConfig';

class Education extends Component {
    state = {  
        // codes:[
        //     "collegeName",
        //     "degree",
        //     "cgpa",
        //     "collegeCity",
        //     "collegeState",
        //     "collegeCountry",
        //     "duration",
        //     "schoolName",
        //     "class10marks",
        //     "class10PassingYear",
        //     "class12marks",
        //     "class12PassingYear",
        //     "schoolCity",
        //     "schoolState",
        //     "schoolCountry"
        // ],
        educationDetails: {
            collegeName:"",
            degree:"",
            cgpa:"",
            collegeState:"",
            duration:"",
            schoolName:"",
            class10marks:"",
            class10PassingYear:"",
            class12marks:"",
            class12PassingYear:"",
            schoolState:"",
          },
          contactDetails: {
            fname: "",
            lname: "",
            summary: "",
            email: "",
            phone: "",
            profession: "",
            address:"",
            city: "",
            state: "",
            country: "",
            pin: "",
          },
          skinId:null
    };

    onChangeHandler = (e) =>{
        // console.log(contactCodes);
        let id = e.target.id;
        let value = e.target.value;
        let oldEducationDetails = this.state.educationDetails;
        this.setState({
            educationDetails:{
                ...oldEducationDetails,
                [id]:value
            }
        });
    };

    componentDidMount(){
        // get contact details of the selected resume
        firebaseApp.firestore().collection("Resumes").doc(this.props.resumeId).get().then(doc=>{
            console.log("Inside component did mount of education");
            let {contactDetails, educationDetails, skinId} = doc.data();
            // console.log(skinId);
            // console.log(contactDetails);
            this.setState({
                contactDetails:contactDetails,
                educationDetails:educationDetails,
                skinId:skinId
            })
        });

        
    };
    NextButtonHandler= async ()=>{
        // save contactDetails object in doc
        await firebaseApp.firestore().collection("Resumes").doc(this.props.resumeId).update({
            educationDetails: this.state.educationDetails
        });
        this.props.history.push("/finalize");
    };

    BackButtonHandler =()=>{
        // console.log("inside back button handler");
        this.props.history.goBack();
    };

    render() { 
        return (
            <div className="education-details-form">
                <div className="div-layer"></div>
                <div className="education-form">
                    <div className="form-input-box">
                        <div className="form-main-element form-element single-element">
                            <label htmlFor="">College Name</label>
                            <input type="text" id="collegeName" value={this.state.educationDetails.collegeName} onChange={ (e) => this.onChangeHandler(e)}/>
                        </div>
                        <div className="form-main-element">
                            <div className="form-element">
                                <label htmlFor="">Degree</label>
                                <input type="text" id="degree" value={this.state.educationDetails.degree} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="">CGPA</label>
                                <input type="text" id="cgpa" value={this.state.educationDetails.cgpa} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                        </div>
                        <div className="form-main-element">
                            <div className="form-element">
                                <label htmlFor="">Duration</label>
                                <input type="text" id="duration" value={this.state.educationDetails.duration} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="">State</label>
                                <input type="text" id="collegeState" value={this.state.educationDetails.collegeState} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                        </div>  
                        <div className="form-main-element form-element single-element">
                            <label htmlFor="">School Name</label>
                            <input type="text" id="schoolName" value={this.state.educationDetails.schoolName} onChange={ (e) => this.onChangeHandler(e)}/>
                        </div>
                        <div className="form-main-element">
                            <div className="form-element">
                                <label htmlFor="">Class 12 %</label>
                                <input type="text" id="class12marks" value={this.state.educationDetails.class12marks} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="">Passing Year</label>
                                <input type="text" id="class12PassingYear" value={this.state.educationDetails.class12PassingYear} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                        </div>
                        <div className="form-main-element">
                            <div className="form-element">
                                <label htmlFor="">Class 10 %</label>
                                <input type="text" id="class10marks" value={this.state.educationDetails.class10marks} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="">Passing Year</label>
                                <input type="text" id="class10PassingYear" value={this.state.educationDetails.class10PassingYear} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                        </div>  
                    </div>   
                </div>
                <button className="btn back" onClick={this.BackButtonHandler} >Back</button>
                <button className="btn next" onClick={this.NextButtonHandler} >Next</button>
                <div className="resume-viewer">
                    {/* get skin according to skinId */}
                    <Skin2 skinId={this.state.skinId} educationDetails={this.state.educationDetails} contactDetails ={this.props.contactDetails}></Skin2>
                </div>
            </div> 
             );
    }
}
 
export default Education;