import React, { Component } from 'react';
import firebase from "../../firebase/firebaseConfig";
import "./Education.css";
import {educationCodes} from "../../util/codes";
import Skin2 from '../Skins/Skin2';
import firebaseApp from '../../firebase/firebaseConfig';

class Education extends Component {
    state = {  
        codes:[
            "collegeName",
            "degree",
            "cgpa",
            "collegeCity",
            "collegeState",
            "collegeCountry",
            "duration",
            "schoolName",
            "class10marks",
            "class10PassingYear",
            "class12marks",
            "class12PassingYear",
            "schoolCity",
            "schoolState",
            "schoolCountry"
        ],
        educationDetails: {
            collegeName:"",
            degree:"",
            cgpa:"",
            collegeCity:"",
            collegeState:"",
            collegeCountry:"",
            duration:"",
            schoolName:"",
            class10marks:"",
            class10PassingYear:"",
            class12marks:"",
            class12PassingYear:"",
            schoolCity:"",
            schoolState:"",
            schoolCountry:""
          },
          contactDetails: {
            fname: "",
            lname: "",
            summary: "",
            email: "",
            phone: "",
            profession: "",
            houseNo:"",
            street: "",
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
        // this.props.history.push("/education");
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
                    {
                        this.state.codes.map(code=>{
                            return <div className="education-form-element" key={code}>
                                <label htmlFor="">{educationCodes[code]}</label>
                                <input type="text" id={code} value={this.state.educationDetails[code]} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>

                        })
                    }
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