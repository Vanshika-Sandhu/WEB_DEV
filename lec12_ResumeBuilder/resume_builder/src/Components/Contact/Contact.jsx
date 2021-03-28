import React, { Component } from 'react';
import "./Contact.css";
import {contactCodes} from "../../util/codes";
import firebaseApp from '../../firebase/firebaseConfig';
import Skin2 from '../Skins/Skin2';
import Skin from '../Skins/Skin';


class Contact extends Component {
    state = { 
        codes:["fname", "lname", "summary", "email","phone","profession","houseNo","street","city","state","country","pin" ],
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
     }

    onChangeHandler = (e) =>{
        // console.log(contactCodes);
        let id = e.target.id;
        let value = e.target.value;
        let oldContactDetails = this.state.contactDetails;
        this.setState({
            contactDetails:{
                ...oldContactDetails,
                [id]:value
            }
        })
    };

    componentDidMount(){
        console.log(this.props.resumeId);
        // get contact details of the selected resume
        firebaseApp.firestore().collection("Resumes").doc(this.props.resumeId).get().then(doc=>{
            console.log("Inside component did mount of contact");
            let {contactDetails, skinId} = doc.data();
            console.log(skinId);
            console.log(contactDetails);
            this.setState({
                contactDetails:contactDetails,
                skinId:skinId
            })
        });

        
    };

    NextButtonHandler= async ()=>{
        // save contactDetails object in doc
        await firebaseApp.firestore().collection("Resumes").doc(this.props.resumeId).update({
            contactDetails: this.state.contactDetails
        });
        this.props.history.push("/education");
    };

    BackButtonHandler =()=>{
        // console.log("inside back button handler");
        this.props.history.goBack();
    };

    render() { 
        return ( 
            <div className="contact-details-form">
                <div className="div-layer"></div>
                <div className="contact-form">
                    {
                        this.state.codes.map(code=>{
                            return <div className="contact-form-element" key={code}>
                                <label htmlFor="">{contactCodes[code]}</label>
                                <input type="text" id={code} value={this.state.contactDetails[code]} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>

                        })
                    }
                </div>
                <button className="btn back" onClick={this.BackButtonHandler} >Back</button>
                <button className="btn next" onClick={this.NextButtonHandler} >Next</button>
                <div className="resume-viewer">
                    {/* get skin according to skinId */}
                    {/* <Skin skinId={this.state.skinId} contactDetails={this.state.contactDetails}></Skin> */}
                    <Skin2 skinId={this.state.skinId} contactDetails={this.state.contactDetails}></Skin2>
                </div>
            </div>
         );
    }
}
 
export default Contact;