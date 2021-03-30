import React, { Component } from 'react';
import "./Finalize.css";
import Skin2 from '../Skins/Skin2';
import firebaseApp from '../../firebase/firebaseConfig';
import { educationCodes } from '../../util/codes';

class Finalize extends Component {
    state = { 
        skinId:null,
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
          }
     };

    componentDidMount(){
        // get all information
        firebaseApp.firestore().collection("Resumes").doc(this.props.resumeId).get().then(doc=>{
            let {skinId, educationDetails, contactDetails} = doc.data();
            this.setState({
                skinId,
                educationDetails,
                contactDetails
            })
        })
    };

    BackButtonHandler =()=>{
        // console.log("inside back button handler");
        this.props.history.goBack();
    };

    render() { 
        let {skinId, contactDetails, educationDetails} = this.state;
        return ( 
        <div className="finalize">
            <div className="finalize-viewer">
                <Skin2 contactDetails={contactDetails} educationDetails={educationDetails} ></Skin2>
            </div>
            <button className="btn back" onClick={this.BackButtonHandler} >Back</button>
        </div> 
         );
    }
}
 
export default Finalize;