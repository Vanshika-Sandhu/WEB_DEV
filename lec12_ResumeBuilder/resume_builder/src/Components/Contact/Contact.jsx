import React, { Component } from 'react';
import "./Contact.css";
import {contactCodes} from "../../util/codes";
import firebaseApp from '../../firebase/firebaseConfig';
import Skin1 from '../Skins/Skin1';
// import Skin from '../Skins/Skin';


class Contact extends Component {
    state = { 
        // codes:["fname", "lname", "summary", "email","phone","profession","houseNo","street","city","state","country","pin" ],
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
                    {/* {
                        this.state.codes.map(code=>{
                            return <div className="contact-form-element" key={code}>
                                <label htmlFor="">{contactCodes[code]}</label>
                                <input type="text" id={code} value={this.state.contactDetails[code]} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>

                        })
                    } */}
                    <div className="form-input-box">
                        <div className="form-main-element">
                            <div className="form-element">
                                <label htmlFor="">First Name</label>
                                <input type="text" id="fname" value={this.state.contactDetails.fname} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="">Last Name</label>
                                <input type="text" id="lname" value={this.state.contactDetails.lname} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                        </div>
                        <div className="form-main-element form-element single-element">
                            <label htmlFor="">Summary</label>
                            <input type="text" id="summary" value={this.state.contactDetails.summary} onChange={ (e) => this.onChangeHandler(e)}/>
                        </div>
                        <div className="form-main-element">
                            <div className="form-element">
                                <label htmlFor="">Email</label>
                                <input type="text" id="email" value={this.state.contactDetails.email} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="">Phone</label>
                                <input type="text" id="phone" value={this.state.contactDetails.phone} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                        </div>
                        <div className="form-main-element form-element single-element">
                            <label htmlFor="">Profession</label>
                            <input type="text" id="profession" value={this.state.contactDetails.profession} onChange={ (e) => this.onChangeHandler(e)}/>
                        </div>
                        <div className="form-main-element form-element single-element">
                            <label htmlFor="">Address</label>
                            <input type="text" id="address" value={this.state.contactDetails.address} onChange={ (e) => this.onChangeHandler(e)}/>
                        </div>
                        <div className="form-main-element">
                            <div className="form-element">
                                <label htmlFor="">City</label>
                                <input type="text" id="city" value={this.state.contactDetails.city} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="">State</label>
                                <input type="text" id="state" value={this.state.contactDetails.state} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                        </div>   
                        <div className="form-main-element">
                            <div className="form-element">
                                <label htmlFor="">Country</label>
                                <input type="text" id="country" value={this.state.contactDetails.country} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                            <div className="form-element">
                                <label htmlFor="">Pin</label>
                                <input type="text" id="pin" value={this.state.contactDetails.pin} onChange={ (e) => this.onChangeHandler(e)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn back" onClick={this.BackButtonHandler} >Back</button>
                <button className="btn next" onClick={this.NextButtonHandler} >Next</button>
                <div className="resume-viewer">
                    {/* get skin according to skinId */}
                    {/* <Skin skinId={this.state.skinId} contactDetails={this.state.contactDetails}></Skin> */}
                    <Skin1 skinId={this.state.skinId} contactDetails={this.state.contactDetails}></Skin1>
                </div>
            </div>
         );
    }
}
 
export default Contact;